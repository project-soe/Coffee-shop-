import { useTranslation } from "react-i18next";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

gsap.registerPlugin(ScrollTrigger);

import heroImg from "@/assets/images/hero.png";
import roastingImg from "@/assets/images/roasting.png";
import baristaImg from "@/assets/images/barista.png";

export default function Home() {
  const { t } = useTranslation();
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2
    })
    .from(".hero-desc", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.4")
    .from(".hero-cta", {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.2");

    gsap.utils.toArray(".scroll-section").forEach((section: any) => {
      gsap.from(section.querySelectorAll(".scroll-element"), {
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    });

    gsap.to(".parallax-bg", {
      scrollTrigger: {
        trigger: ".parallax-container",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      y: 100,
      ease: "none"
    });

  }, { scope: container });

  const FEATURED_IDS = ["rebata-signature", "cold-brew", "rebata-beans"];
  const featuredProducts = FEATURED_IDS
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean) as typeof PRODUCTS;

  return (
    <div ref={container} className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={heroImg}
            alt="Rebata Coffee Plantation"
            className="w-full h-full object-cover object-center scale-105"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="hero-desc text-lg md:text-xl text-white/90 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="hero-cta">
            <Link href="/menu">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-medium tracking-wide">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="scroll-section py-24 md:py-32 px-4 bg-background">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative h-[600px] rounded-2xl overflow-hidden scroll-element">
            <img
              src={roastingImg}
              alt="Coffee Roasting"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 scroll-element">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              {t('home.section1')}
            </h2>
            <div className="w-12 h-1 bg-primary mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('home.section1_desc')}
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8">
                {t('home.section1_btn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="scroll-section py-24 md:py-32 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-element">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
              {t('home.section2')}
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 scroll-element">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16 scroll-element">
            <Link href="/menu">
              <Button variant="outline" size="lg" className="rounded-full px-8">
                {t('home.section2_btn')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Craft Section / Parallax */}
      <section className="parallax-container relative h-[80vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={baristaImg}
            alt="Barista Craft"
            className="parallax-bg w-full h-[120%] object-cover absolute -top-[10%]"
          />
        </div>
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {t('home.section3')}
          </h2>
          <p className="text-xl text-white/80 font-light">
            {t('home.section3_subtitle')}
          </p>
        </div>
      </section>

    </div>
  );
}

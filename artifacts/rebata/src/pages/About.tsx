import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import roastingImg from "@/assets/images/roasting.png";
import baristaImg from "@/assets/images/barista.png";

export default function About() {
  const { t } = useTranslation();

  const handleWhatsApp = () => {
    window.open("https://wa.me/6281234567890", "_blank");
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">

      {/* Hero */}
      <section className="relative h-72 md:h-96 overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/55 z-10" />
          <img
            src={baristaImg}
            alt="Barista"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-6xl font-serif text-white"
          >
            {t('about.title')}
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-xl md:text-2xl font-serif text-foreground mb-6 leading-relaxed">
              {t('about.subtitle')}
            </p>
            <div className="w-12 h-1 bg-primary mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t('about.p1')}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.p2')}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[480px] rounded-2xl overflow-hidden"
          >
            <img
              src={roastingImg}
              alt="Coffee Roasting"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Rate Us / Contact */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              {t('about.rateTitle')}
            </h2>
            <div className="w-12 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground mb-10">
              {t('about.rateSubtitle')}
            </p>
            <Button
              onClick={handleWhatsApp}
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full px-8 py-6 text-base font-medium inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              {t('about.rateCta')}
            </Button>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

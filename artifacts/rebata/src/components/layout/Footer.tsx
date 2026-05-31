import { useTranslation } from "react-i18next";
import { Link } from "wouter";
import { RebataLogo } from "@/components/RebataLogo";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="mb-6 block">
              <RebataLogo size={40} className="[&_span]:text-[#C5A059] [&_.kopi-murni]:text-secondary-foreground/60" />
            </Link>
            <p className="text-secondary-foreground/70 max-w-xs text-sm leading-relaxed mt-4">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">{t('footer.links')}</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors">{t('nav.menu')}</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">{t('footer.contact')}</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li>Jakarta, Indonesia</li>
              <li>hello@rebata.id</li>
              <li>+62 812 3456 7890</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-secondary-foreground/50">
          <p>&copy; {new Date().getFullYear()} REBATA. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

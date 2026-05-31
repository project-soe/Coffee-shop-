import { useTranslation } from "react-i18next";
import { Link } from "wouter";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="font-serif text-2xl tracking-widest font-bold text-primary mb-6 block">
              REBATA
            </Link>
            <p className="text-secondary-foreground/70 max-w-xs text-sm leading-relaxed">
              Kopi Murni. Merayakan warisan kopi Indonesia dengan setiap tegukan.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Links</h4>
            <ul className="space-y-3 text-sm text-secondary-foreground/70">
              <li><Link href="/" className="hover:text-primary transition-colors">{t('nav.home')}</Link></li>
              <li><Link href="/menu" className="hover:text-primary transition-colors">{t('nav.menu')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Contact</h4>
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

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  id: {
    translation: {
      nav: {
        home: "Beranda",
        menu: "Menu",
        about: "Tentang Kami",
        cart: "Keranjang"
      },
      hero: {
        title: "Kopi Murni, Jiwa Nusantara.",
        subtitle: "Merayakan warisan kopi Indonesia dengan setiap tegukan.",
        cta: "Jelajahi Menu"
      },
      home: {
        section1: "Kisah Kopi Kami",
        section1_desc: "Dari pegunungan vulkanik Jawa hingga cangkir Anda, perjalanan kopi kami adalah tentang dedikasi dan keaslian.",
        section2: "Koleksi Pilihan",
        section3: "Cita Rasa Otentik",
      },
      products: {
        addToCart: "Tambah ke Keranjang",
        price: "Harga",
        viewDetails: "Lihat Detail"
      },
      cart: {
        title: "Keranjang Belanja",
        empty: "Keranjang Anda kosong.",
        total: "Total",
        checkout: "Pesan via WhatsApp",
        quantity: "Jumlah"
      },
      footer: {
        rights: "Hak Cipta Dilindungi."
      }
    }
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        menu: "Menu",
        about: "About Us",
        cart: "Cart"
      },
      hero: {
        title: "Pure Coffee, Soul of the Archipelago.",
        subtitle: "Celebrating Indonesian coffee heritage with every sip.",
        cta: "Explore Menu"
      },
      home: {
        section1: "Our Coffee Story",
        section1_desc: "From the volcanic mountains of Java to your cup, our coffee journey is about dedication and authenticity.",
        section2: "Curated Collection",
        section3: "Authentic Flavors",
      },
      products: {
        addToCart: "Add to Cart",
        price: "Price",
        viewDetails: "View Details"
      },
      cart: {
        title: "Shopping Cart",
        empty: "Your cart is empty.",
        total: "Total",
        checkout: "Checkout via WhatsApp",
        quantity: "Quantity"
      },
      footer: {
        rights: "All Rights Reserved."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "id", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

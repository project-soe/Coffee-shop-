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
        section1_btn: "Kenali Kami",
        section2: "Koleksi Pilihan",
        section2_btn: "Lihat Semua Menu",
        section3: "Cita Rasa Otentik",
        section3_subtitle: "Diseduh dengan presisi, disajikan dengan hati."
      },
      menu: {
        searchPlaceholder: "Cari kopi favoritmu...",
        noResults: "Tidak ada produk yang sesuai dengan pencarian Anda.",
        categories: {
          all: "Semua",
          espresso: "Espresso Based",
          singleOrigin: "Single Origin",
          coldBrew: "Cold Brew",
          merchandise: "Merchandise"
        }
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
        subtotal: "Subtotal",
        shipping: "Pengiriman",
        shippingNote: "Dihitung di WhatsApp",
        paymentNote: "Pembayaran akan diproses melalui WhatsApp.",
        summary: "Ringkasan",
        checkout: "Pesan via WhatsApp",
        quantity: "Jumlah",
        whatsappGreeting: "Halo REBATA, saya ingin memesan:",
        whatsappClosing: "Mohon informasi pembayarannya. Terima kasih!"
      },
      about: {
        title: "Tentang REBATA",
        subtitle: "Kami percaya kopi adalah lebih dari sekadar minuman.",
        p1: "REBATA lahir dari kecintaan mendalam terhadap kopi Indonesia. Setiap biji yang kami pilih berasal dari petani terbaik di kepulauan Nusantara — dari lereng Gunung Gayo di Aceh hingga dataran tinggi Toraja di Sulawesi.",
        p2: "Kami berkomitmen untuk menjaga kemurnian rasa tanpa kompromi, menghormati proses dari ladang hingga cangkir, dan merayakan kekayaan kopi Indonesia kepada dunia.",
        rateTitle: "Bagikan Pengalamanmu",
        rateSubtitle: "Setiap ulasan membantu kami tumbuh dan melayani lebih baik.",
        rateCta: "Hubungi kami di WhatsApp"
      },
      footer: {
        tagline: "Merayakan warisan kopi Indonesia dengan setiap tegukan.",
        links: "Tautan",
        contact: "Kontak",
        rights: "Hak Cipta Dilindungi."
      },
      theme: {
        light: "Terang",
        dark: "Gelap"
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
        section1_btn: "Know Us",
        section2: "Curated Collection",
        section2_btn: "View Full Menu",
        section3: "Authentic Flavors",
        section3_subtitle: "Brewed with precision, served with heart."
      },
      menu: {
        searchPlaceholder: "Search your favorite coffee...",
        noResults: "No products match your search.",
        categories: {
          all: "All",
          espresso: "Espresso Based",
          singleOrigin: "Single Origin",
          coldBrew: "Cold Brew",
          merchandise: "Merchandise"
        }
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
        subtotal: "Subtotal",
        shipping: "Shipping",
        shippingNote: "Calculated on WhatsApp",
        paymentNote: "Payment will be processed via WhatsApp.",
        summary: "Summary",
        checkout: "Checkout via WhatsApp",
        quantity: "Quantity",
        whatsappGreeting: "Hello REBATA, I'd like to order:",
        whatsappClosing: "Please let me know the payment details. Thank you!"
      },
      about: {
        title: "About REBATA",
        subtitle: "We believe coffee is more than just a drink.",
        p1: "REBATA was born from a deep love for Indonesian coffee. Every bean we select comes from the finest farmers across the archipelago — from the slopes of Mount Gayo in Aceh to the highlands of Toraja in Sulawesi.",
        p2: "We are committed to preserving pure flavor without compromise, honoring the process from field to cup, and bringing the richness of Indonesian coffee to the world.",
        rateTitle: "Share Your Experience",
        rateSubtitle: "Every review helps us grow and serve you better.",
        rateCta: "Contact us on WhatsApp"
      },
      footer: {
        tagline: "Celebrating Indonesian coffee heritage with every sip.",
        links: "Links",
        contact: "Contact",
        rights: "All Rights Reserved."
      },
      theme: {
        light: "Light",
        dark: "Dark"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "id",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

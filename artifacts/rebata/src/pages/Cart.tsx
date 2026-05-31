import { useTranslation } from "react-i18next";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { Trash2, Minus, Plus, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export default function Cart() {
  const { t } = useTranslation();
  const { items, updateQuantity, removeFromCart, total } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    const phoneNumber = "6281234567890";

    let message = `${t('cart.whatsappGreeting')}\n\n`;
    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name} - ${item.quantity}x (${formatPrice(item.product.price * item.quantity)})\n`;
    });
    message += `\n*${t('cart.total')}: ${formatPrice(total)}*\n\n${t('cart.whatsappClosing')}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-8">
          {t('cart.title')}
        </h1>

        {items.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-2xl border border-border shadow-sm">
            <p className="text-muted-foreground text-lg mb-6">{t('cart.empty')}</p>
            <Link href="/menu">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items List */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex flex-col sm:flex-row gap-6 p-6 bg-card rounded-2xl border border-border shadow-sm">
                  <div className="w-full sm:w-32 h-32 rounded-xl overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-serif text-lg font-medium text-foreground mb-1">
                          {item.product.name}
                        </h3>
                        <p className="text-primary font-medium">
                          {formatPrice(item.product.price)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-border rounded-full p-1 bg-background">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted text-foreground"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-muted text-foreground"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card rounded-2xl border border-border shadow-sm p-6 sticky top-24">
                <h3 className="font-serif text-xl mb-6 text-foreground">{t('cart.summary')}</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>{t('cart.subtotal')}</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>{t('cart.shipping')}</span>
                    <span>{t('cart.shippingNote')}</span>
                  </div>
                  <div className="h-px bg-border my-4" />
                  <div className="flex justify-between text-foreground font-serif text-xl">
                    <span>{t('cart.total')}</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full py-6 text-base font-medium flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" />
                  {t('cart.checkout')}
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-4">
                  {t('cart.paymentNote')}
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

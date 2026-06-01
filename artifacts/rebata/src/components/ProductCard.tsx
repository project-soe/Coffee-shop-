import { useState } from "react";
import { Product, ProductVariant } from "@/hooks/use-cart";
import { useCart } from "@/hooks/use-cart";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(
    product.variants ? product.variants[0] : null
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const activePrice = selectedVariant ? selectedVariant.price : product.price;

  const handleAddToCart = () => {
    if (selectedVariant) {
      addToCart({
        ...product,
        id: selectedVariant.id,
        name: `${product.name} – ${selectedVariant.label}`,
        price: selectedVariant.price,
        variants: undefined,
      });
    } else {
      addToCart(product);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium rounded-full border border-border text-foreground">
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-xl mb-2 text-foreground">{product.name}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
          {product.description}
        </p>

        {product.variants && product.variants.length > 0 && (
          <div className="flex gap-2 mb-5">
            {product.variants.map((variant) => (
              <button
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-semibold border transition-all duration-200",
                  selectedVariant?.id === variant.id
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-foreground border-border hover:border-primary"
                )}
              >
                {variant.label}
              </button>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between mt-auto">
          <motion.span
            key={activePrice}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="font-medium text-primary text-lg"
          >
            {formatPrice(activePrice)}
          </motion.span>
          <Button
            onClick={handleAddToCart}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-4"
          >
            <Plus className="w-4 h-4 mr-1" />
            {t('products.addToCart')}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

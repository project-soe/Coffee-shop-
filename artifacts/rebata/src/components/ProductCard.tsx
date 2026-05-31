import { Product } from "@/hooks/use-cart";
import { useCart } from "@/hooks/use-cart";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

export function ProductCard({ product }: { product: Product }) {
  const { t } = useTranslation();
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
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
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="font-medium text-primary text-lg">
            {formatPrice(product.price)}
          </span>
          <Button 
            onClick={() => addToCart(product)}
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

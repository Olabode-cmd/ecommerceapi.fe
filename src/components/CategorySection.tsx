import type { Category, Product } from '../types';
import ProductCard from './ProductCard';
import Button from './ui/Button';

interface CategorySectionProps {
  category: Category;
  products: Product[];
}

export default function CategorySection({ category, products }: CategorySectionProps) {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{category.name}</h2>
        <Button variant="ghost" className="text-blue-600 hover:text-blue-800">
          See More →
        </Button>
      </div>
      
      <div className="overflow-x-auto">
        <div className="flex space-x-4 pb-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
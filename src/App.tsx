import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CategorySection from './components/CategorySection'
import Footer from './components/Footer'
import { useGetCategories } from './services/category'
import type { Category, Product } from './types'

// Mock products data - replace with actual API call later
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Wireless Headphones',
    price: 99.99,
    description: 'High-quality wireless headphones with noise cancellation',
    image: 'https://via.placeholder.com/300x200',
    tags: ['electronics', 'audio', 'wireless'],
    categoryId: '1'
  },
  {
    id: '2',
    name: 'Smart Watch',
    price: 199.99,
    description: 'Feature-rich smartwatch with health tracking',
    image: 'https://via.placeholder.com/300x200',
    tags: ['electronics', 'wearable', 'fitness'],
    categoryId: '1'
  }
];

function App() {
  const { data: categoriesResponse } = useGetCategories();
  const categories: Category[] = categoriesResponse?.data || [];

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 py-12">
        {categories.length > 0 ? (
          categories.map((category) => (
            <CategorySection 
              key={category.id}
              category={category}
              products={mockProducts.filter(p => p.categoryId === category.id)}
            />
          ))
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">No categories available</h2>
            <p className="text-gray-500">Check back later for new products and categories.</p>
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}

export default App

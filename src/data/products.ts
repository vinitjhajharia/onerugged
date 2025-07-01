import productsData from './full_merged_products_feed.json';

// Product interface based on the structure used in components
export interface Product {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  shortDescription?: string;
  mainImage: string;
  price?: string;
  rating: number;
  reviews?: number;
  badge?: string;
  inStock: boolean;
  features: string[];
  industries: string[];
  certifications: string[];
  specifications?: Record<string, any>;
  specs?: Record<string, any>;
  images: {
    gallery: string[];
    overview?: string[];
  };
}

// Category interface
export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  count: number;
}

// Transform the JSON data to match our Product interface
const transformProduct = (product: any): Product => {
  return {
    id: product.id || product.product_id || Math.random().toString(36).substr(2, 9),
    title: product.title || product.name || 'Unnamed Product',
    slug: product.slug || product.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'product',
    category: product.category || 'laptops',
    description: product.description || product.long_description || 'No description available',
    shortDescription: product.short_description || product.description?.substring(0, 200) + '...' || 'No description available',
    mainImage: product.main_image || product.image_link || product.images?.[0] || '/images2.png',
    price: product.price || 'Contact for Quote',
    rating: product.rating || 4.5,
    reviews: product.reviews || 0,
    badge: product.badge,
    inStock: product.in_stock !== false,
    features: Array.isArray(product.features) ? product.features : product.features?.split(',') || [],
    industries: Array.isArray(product.industries) ? product.industries : product.industries?.split(',') || ['Industrial', 'Military', 'Field Operations'],
    certifications: Array.isArray(product.certifications) ? product.certifications : product.certifications?.split(',') || ['IP65', 'MIL-STD-810G'],
    specifications: product.specifications || product.specs || {},
    specs: product.specs || product.specifications || {},
    images: {
      gallery: Array.isArray(product.images) ? product.images : [product.main_image || product.image_link || '/images2.png'],
      overview: product.overview_images || []
    }
  };
};

// Transform all products
export const products: Product[] = Array.isArray(productsData) 
  ? productsData.map(transformProduct)
  : Object.values(productsData || {}).map(transformProduct);

// Create categories from products
export const categories: Category[] = [
  {
    id: 'laptops',
    name: 'Rugged Laptops',
    slug: 'laptops',
    description: 'Military-grade laptops built for extreme conditions',
    image: '/images2.png',
    count: products.filter(p => p.category.toLowerCase().includes('laptop')).length || 12
  },
  {
    id: 'tablets',
    name: 'Rugged Tablets',
    slug: 'tablets',
    description: 'Durable tablets for field operations and mobile computing',
    image: '/images2.png',
    count: products.filter(p => p.category.toLowerCase().includes('tablet')).length || 8
  },
  {
    id: 'handhelds',
    name: 'Handheld Devices',
    slug: 'handhelds',
    description: 'Portable rugged devices for mission-critical applications',
    image: '/images2.png',
    count: products.filter(p => p.category.toLowerCase().includes('handheld')).length || 6
  }
];

// Utility functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedProducts = (limit: number = 6): Product[] => {
  return products
    .filter(product => product.badge || product.rating >= 4.5)
    .slice(0, limit);
};

export const getRelatedProducts = (currentProduct: Product, limit: number = 3): Product[] => {
  return products
    .filter(product => 
      product.id !== currentProduct.id && 
      product.category === currentProduct.category
    )
    .slice(0, limit);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product =>
    product.title.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.features.some(feature => 
      feature.toLowerCase().includes(lowercaseQuery)
    )
  );
};

export default products;
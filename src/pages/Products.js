import React, { useState } from 'react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products', count: 12 },
    { id: 'herbs', name: 'Medicinal Herbs', count: 4 },
    { id: 'oils', name: 'Essential Oils', count: 3 },
    { id: 'supplements', name: 'Ayurvedic Supplements', count: 3 },
    { id: 'foods', name: 'Agri-based Foods', count: 2 },
  ];

  const products = [
    {
      id: 1,
      name: 'Triphala Churna',
      category: 'supplements',
      price: 12.99,
      originalPrice: 15.99,
      image: '/sample-images/product-card-1.png',
      description: 'A traditional Ayurvedic formulation for digestive health.',
      rating: 4.8,
      reviews: 124,
      inStock: true,
    },
    {
      id: 2,
      name: 'Lavender Essential Oil',
      category: 'oils',
      price: 15.50,
      image: '/sample-images/product-card-2.png',
      description: 'A calming and soothing essential oil for relaxation.',
      rating: 4.9,
      reviews: 89,
      inStock: true,
    },
    {
      id: 3,
      name: 'Ashwagandha Root',
      category: 'herbs',
      price: 18.00,
      image: '/sample-images/product-card-3.png',
      description: 'An adaptogenic herb to help manage stress.',
      rating: 4.7,
      reviews: 156,
      inStock: true,
    },
    {
      id: 4,
      name: 'Organic Basmati Rice',
      category: 'foods',
      price: 9.99,
      image: '/sample-images/product-card-4.png',
      description: 'Premium quality basmati rice, grown organically.',
      rating: 4.6,
      reviews: 78,
      inStock: true,
    },
    {
      id: 5,
      name: 'Turmeric Powder',
      category: 'herbs',
      price: 8.99,
      image: '/sample-images/food-herbs-1.png',
      description: 'Pure organic turmeric powder with high curcumin content.',
      rating: 4.8,
      reviews: 203,
      inStock: true,
    },
    {
      id: 6,
      name: 'Brahmi Capsules',
      category: 'supplements',
      price: 22.50,
      image: '/sample-images/food-herbs-2.png',
      description: 'Memory and cognitive support supplement.',
      rating: 4.5,
      reviews: 67,
      inStock: false,
    },
    {
      id: 7,
      name: 'Tea Tree Oil',
      category: 'oils',
      price: 12.75,
      image: '/sample-images/food-herbs-3.png',
      description: 'Natural antiseptic and antimicrobial essential oil.',
      rating: 4.7,
      reviews: 92,
      inStock: true,
    },
    {
      id: 8,
      name: 'Neem Leaves',
      category: 'herbs',
      price: 6.99,
      image: '/sample-images/food-herbs-4.png',
      description: 'Dried neem leaves for natural detoxification.',
      rating: 4.4,
      reviews: 45,
      inStock: true,
    },
    {
      id: 9,
      name: 'Eucalyptus Oil',
      category: 'oils',
      price: 14.25,
      image: '/sample-images/product-card-1.png',
      description: 'Refreshing eucalyptus essential oil for respiratory health.',
      rating: 4.6,
      reviews: 67,
      inStock: true,
    },
    {
      id: 10,
      name: 'Amla Powder',
      category: 'herbs',
      price: 10.50,
      image: '/sample-images/product-card-2.png',
      description: 'Vitamin C rich amla powder for immunity.',
      rating: 4.7,
      reviews: 112,
      inStock: true,
    },
    {
      id: 11,
      name: 'Chyawanprash',
      category: 'supplements',
      price: 18.99,
      image: '/sample-images/product-card-3.png',
      description: 'Traditional Ayurvedic immunity booster.',
      rating: 4.8,
      reviews: 89,
      inStock: true,
    },
    {
      id: 12,
      name: 'Organic Millets',
      category: 'foods',
      price: 7.50,
      image: '/sample-images/product-card-4.png',
      description: 'Nutritious blend of ancient grains and millets.',
      rating: 4.5,
      reviews: 156,
      inStock: true,
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} className="material-symbols-outlined text-yellow-400 text-sm">star</span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="material-symbols-outlined text-yellow-400 text-sm">star_half</span>
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="material-symbols-outlined text-gray-300 text-sm">star</span>
      );
    }

    return stars;
  };

  return (
    <div className="min-h-screen bg-surface-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-text-900 mb-4 font-lexend">
            Our Products
          </h1>
          <p className="text-lg text-surface-700 max-w-2xl mx-auto">
            Discover our range of authentic Ayurvedic products, carefully crafted from natural ingredients 
            to support your holistic wellness journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-surface-600 hover:bg-primary-50 hover:text-primary-600 shadow-soft'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group"
            >
              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.originalPrice && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-bold">
                    Sale
                  </div>
                )}
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-white text-text-900 px-4 py-2 rounded-full font-bold">
                      Out of Stock
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-text-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-surface-600 text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-sm text-surface-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-primary-600">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-surface-400 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  disabled={!product.inStock}
                  className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                    product.inStock
                      ? 'bg-primary-600 text-white hover:bg-primary-700 hover:scale-105 shadow-lg'
                      : 'bg-surface-200 text-surface-500 cursor-not-allowed'
                  }`}
                >
                  {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl text-surface-300 mb-4">🌿</div>
            <h3 className="text-2xl font-bold text-text-900 mb-2">No Products Found</h3>
            <p className="text-surface-600">Try selecting a different category or check back later.</p>
          </div>
        )}

        {/* Newsletter Section */}
        <div className="mt-20 bg-primary-50 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl font-bold text-text-900 mb-4 font-lexend">
            Stay Updated with New Products
          </h2>
          <p className="text-surface-700 mb-8 max-w-2xl mx-auto">
            Be the first to know about our latest Ayurvedic products, special offers, and wellness tips.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-surface-200 focus:outline-none focus:ring-2 focus:ring-primary-600"
            />
            <button className="px-8 py-3 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
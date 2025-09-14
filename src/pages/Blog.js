import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'ayurveda', name: 'Ayurveda' },
    { id: 'yoga', name: 'Yoga & Meditation' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'wellness', name: 'Wellness Tips' },
    { id: 'lifestyle', name: 'Lifestyle' },
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Ancient Art of Ayurvedic Living',
      excerpt: 'Discover how ancient Indian wisdom can transform your modern lifestyle with practical Ayurvedic principles.',
      author: 'Dr. Priya Sharma',
      date: 'January 15, 2024',
      readTime: '8 min read',
      category: 'ayurveda',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'Understanding Your Dosha: A Complete Guide',
      excerpt: 'Learn about the three doshas - Vata, Pitta, and Kapha - and how to balance them for optimal health.',
      author: 'Raj Patel',
      date: 'January 12, 2024',
      readTime: '6 min read',
      category: 'ayurveda',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 3,
      title: 'Morning Yoga Routine for Beginners',
      excerpt: 'Start your day with this gentle 15-minute yoga sequence perfect for beginners.',
      author: 'Anita Desai',
      date: 'January 10, 2024',
      readTime: '5 min read',
      category: 'yoga',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 4,
      title: 'The Power of Meditation for Stress Relief',
      excerpt: 'Explore scientific-backed benefits of meditation and simple techniques to get started.',
      author: 'Dr. Priya Sharma',
      date: 'January 8, 2024',
      readTime: '7 min read',
      category: 'yoga',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 5,
      title: 'Ayurvedic Nutrition: Eating for Your Body Type',
      excerpt: 'Learn how to choose foods that support your unique constitution and promote digestive health.',
      author: 'Anita Desai',
      date: 'January 5, 2024',
      readTime: '9 min read',
      category: 'nutrition',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
    {
      id: 6,
      title: 'Natural Remedies for Better Sleep',
      excerpt: 'Discover traditional herbs and practices that can help you achieve deeper, more restful sleep.',
      author: 'Raj Patel',
      date: 'January 3, 2024',
      readTime: '6 min read',
      category: 'wellness',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      featured: false,
    },
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const otherPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-surface-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-900 font-lexend mb-6">
            Wellness Insights
          </h1>
          <p className="text-lg text-surface-700 max-w-2xl mx-auto">
            Discover ancient wisdom and modern insights for your holistic wellness journey. 
            Our experts share knowledge, tips, and practices to help you live your best life.
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-surface-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'all' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-lg shadow-medium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="text-surface-600 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-text-900 font-newsreader mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-surface-700 text-lg mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                        <span className="text-primary-600 font-semibold text-sm">
                          {featuredPost.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-text-900">{featuredPost.author}</p>
                        <p className="text-surface-600 text-sm">{featuredPost.date}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                    >
                      Read More
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {selectedCategory !== 'all' && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-text-900 font-lexend">
                {categories.find(cat => cat.id === selectedCategory)?.name} Posts
              </h2>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-surface-100 text-surface-700 text-xs font-medium rounded">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                      <span className="text-surface-500 text-xs">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-900 font-newsreader mb-3 group-hover:text-primary-600 transition-colors">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-surface-700 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                          <span className="text-primary-600 font-semibold text-xs">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-text-900 text-sm">{post.author}</p>
                          <p className="text-surface-500 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <Link
                        to={`/blog/${post.id}`}
                        className="text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        <span className="material-symbols-outlined">arrow_forward</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-lexend">
            Stay Updated with Wellness Insights
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Get the latest articles, tips, and insights delivered to your inbox weekly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-text-900 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
            <button className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mt-4">
            Join 10,000+ readers who get our weekly wellness newsletter.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;

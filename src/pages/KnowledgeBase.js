import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const KnowledgeBase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'library_books' },
    { id: 'ayurveda', name: 'Ayurveda Basics', icon: 'spa' },
    { id: 'nutrition', name: 'Nutrition', icon: 'restaurant' },
    { id: 'yoga', name: 'Yoga & Meditation', icon: 'self_improvement' },
    { id: 'herbs', name: 'Herbal Medicine', icon: 'local_florist' },
    { id: 'lifestyle', name: 'Lifestyle', icon: 'home' },
    { id: 'wellness', name: 'General Wellness', icon: 'favorite' },
  ];

  const articles = [
    {
      id: 1,
      title: 'What is Ayurveda? A Complete Beginner\'s Guide',
      category: 'ayurveda',
      readTime: '8 min read',
      difficulty: 'Beginner',
      excerpt: 'Learn the fundamental principles of Ayurveda, including the three doshas, five elements, and how this ancient system can improve your health.',
      tags: ['doshas', 'basics', 'principles'],
      featured: true
    },
    {
      id: 2,
      title: 'Understanding Your Dosha Constitution',
      category: 'ayurveda',
      readTime: '12 min read',
      difficulty: 'Beginner',
      excerpt: 'Discover how to identify your unique dosha combination and what it means for your health, diet, and lifestyle choices.',
      tags: ['vata', 'pitta', 'kapha', 'assessment']
    },
    {
      id: 3,
      title: 'Ayurvedic Nutrition: Eating for Your Body Type',
      category: 'nutrition',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      excerpt: 'Learn how to choose foods that balance your dosha and support optimal digestion and health.',
      tags: ['diet', 'digestion', 'food-combining']
    },
    {
      id: 4,
      title: 'The Six Tastes in Ayurveda',
      category: 'nutrition',
      readTime: '6 min read',
      difficulty: 'Beginner',
      excerpt: 'Understand how sweet, sour, salty, pungent, bitter, and astringent tastes affect your doshas and overall health.',
      tags: ['tastes', 'flavors', 'balance']
    },
    {
      id: 5,
      title: 'Pranayama: The Art of Conscious Breathing',
      category: 'yoga',
      readTime: '9 min read',
      difficulty: 'Intermediate',
      excerpt: 'Explore various breathing techniques and their benefits for physical health, mental clarity, and spiritual growth.',
      tags: ['breathing', 'pranayama', 'meditation']
    },
    {
      id: 6,
      title: 'Essential Herbs for Daily Wellness',
      category: 'herbs',
      readTime: '11 min read',
      difficulty: 'Beginner',
      excerpt: 'Discover common herbs like turmeric, ginger, and ashwagandha and how to incorporate them into your daily routine.',
      tags: ['turmeric', 'ginger', 'ashwagandha', 'daily-use']
    },
    {
      id: 7,
      title: 'Creating an Ayurvedic Daily Routine (Dinacharya)',
      category: 'lifestyle',
      readTime: '15 min read',
      difficulty: 'Intermediate',
      excerpt: 'Learn how to structure your day according to Ayurvedic principles for optimal health and energy.',
      tags: ['routine', 'dinacharya', 'daily-habits']
    },
    {
      id: 8,
      title: 'Seasonal Living: Adapting to Nature\'s Rhythms',
      category: 'lifestyle',
      readTime: '13 min read',
      difficulty: 'Intermediate',
      excerpt: 'Understand how to adjust your diet, activities, and self-care practices according to the seasons.',
      tags: ['seasons', 'ritucharya', 'adaptation']
    },
    {
      id: 9,
      title: 'Stress Management Through Ayurveda',
      category: 'wellness',
      readTime: '7 min read',
      difficulty: 'Beginner',
      excerpt: 'Learn natural, Ayurvedic approaches to managing stress and anxiety in modern life.',
      tags: ['stress', 'anxiety', 'mental-health']
    },
    {
      id: 10,
      title: 'Meditation for Beginners: Getting Started',
      category: 'yoga',
      readTime: '8 min read',
      difficulty: 'Beginner',
      excerpt: 'Simple meditation techniques and tips for establishing a regular practice.',
      tags: ['meditation', 'mindfulness', 'beginners']
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles.find(article => article.featured);

  const quickStart = [
    {
      title: 'New to Ayurveda?',
      description: 'Start with the basics and learn fundamental concepts',
      link: '/knowledge/ayurveda-basics',
      icon: 'school'
    },
    {
      title: 'Find Your Dosha',
      description: 'Take our comprehensive dosha assessment',
      link: '/dosha-assessment',
      icon: 'psychology'
    },
    {
      title: 'Daily Routines',
      description: 'Learn how to create healthy daily habits',
      link: '/knowledge/daily-routines',
      icon: 'schedule'
    },
    {
      title: 'Seasonal Guide',
      description: 'Adapt your lifestyle to seasonal changes',
      link: '/knowledge/seasonal-living',
      icon: 'nature'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-surface-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-900 font-lexend mb-6">
            Knowledge Base
          </h1>
          <p className="text-lg text-surface-700 max-w-2xl mx-auto mb-8">
            Explore our comprehensive collection of articles, guides, and resources 
            on Ayurveda, yoga, nutrition, and holistic wellness. Learn from experts 
            and deepen your understanding of ancient wisdom for modern living.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 rounded-full border border-surface-300 focus:ring-2 focus:ring-primary-600 focus:border-transparent"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 transform -translate-y-1/2 text-surface-500">
                search
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-surface-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-text-900 font-lexend mb-8 text-center">
            Quick Start Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStart.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="group bg-surface-50 rounded-lg p-6 text-center hover:bg-primary-50 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <h3 className="font-semibold text-text-900 mb-2">{item.title}</h3>
                <p className="text-surface-700 text-sm">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-surface-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && selectedCategory === 'all' && !searchTerm && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-lg shadow-medium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-primary-100 to-surface-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="material-symbols-outlined text-6xl text-primary-600 mb-4">library_books</span>
                    <p className="text-primary-700 font-medium">Featured Article</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      Featured
                    </span>
                    <span className="px-3 py-1 bg-surface-100 text-surface-700 text-sm rounded-full">
                      {featuredArticle.difficulty}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-text-900 font-newsreader mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-surface-700 text-lg mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-surface-600 text-sm">{featuredArticle.readTime}</span>
                    <Link
                      to={`/knowledge/${featuredArticle.id}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                    >
                      Read Article
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {searchTerm && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-text-900 font-lexend">
                Search Results for "{searchTerm}" ({filteredArticles.length} articles)
              </h2>
            </div>
          )}

          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <span className="material-symbols-outlined text-6xl text-surface-400 mb-4">search_off</span>
              <h3 className="text-xl font-semibold text-surface-600 mb-2">No articles found</h3>
              <p className="text-surface-500">Try adjusting your search terms or browse all categories.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.filter(article => !article.featured).map((article) => (
                <article key={article.id} className="group">
                  <div className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                    <div className="aspect-[4/3] bg-gradient-to-br from-primary-50 to-surface-100 flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-primary-400">
                        {categories.find(cat => cat.id === article.category)?.icon || 'article'}
                      </span>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-surface-100 text-surface-700 text-xs font-medium rounded capitalize">
                          {categories.find(cat => cat.id === article.category)?.name}
                        </span>
                        <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                          {article.difficulty}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-text-900 font-newsreader mb-3 group-hover:text-primary-600 transition-colors">
                        <Link to={`/knowledge/${article.id}`}>{article.title}</Link>
                      </h3>
                      <p className="text-surface-700 mb-4 flex-1 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-surface-50 text-surface-600 text-xs rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-surface-500 text-sm">{article.readTime}</span>
                        <Link
                          to={`/knowledge/${article.id}`}
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
          )}
        </div>
      </section>

      {/* Popular Topics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
              Popular Topics
            </h2>
            <p className="text-lg text-surface-700">
              Explore the most searched and read topics in our knowledge base.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'Dosha Assessment',
              'Daily Routines',
              'Herbal Remedies',
              'Yoga Basics',
              'Meditation',
              'Stress Relief',
              'Seasonal Eating',
              'Sleep Health',
              'Digestive Health',
              'Mind-Body Balance',
              'Pranayama',
              'Nutrition Tips'
            ].map((topic, index) => (
              <button
                key={index}
                className="p-4 bg-white rounded-lg text-center hover:bg-primary-50 hover:text-primary-700 transition-colors"
              >
                <span className="text-sm font-medium">{topic}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-lexend">
            Stay Updated with New Content
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Get notified when we publish new articles, guides, and resources to help you 
            on your wellness journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-text-900 placeholder-surface-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-surface-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;

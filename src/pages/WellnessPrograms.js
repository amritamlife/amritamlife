import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WellnessPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    {
      id: 1,
      title: '21-Day Ayurvedic Detox Program',
      duration: '21 Days',
      level: 'Beginner to Intermediate',
      price: '$299',
      originalPrice: '$399',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Detox & Cleanse',
      participants: 1234,
      rating: 4.8,
      description: 'A comprehensive program designed to gently cleanse your body and reset your digestive system using traditional Ayurvedic principles.',
      longDescription: 'This 21-day program combines ancient Ayurvedic wisdom with modern nutritional science to help you detoxify your body, boost energy, and establish healthy habits. You\'ll receive daily meal plans, herbal recommendations, lifestyle guidance, and ongoing support from our team of experts.',
      includes: [
        'Daily meal plans and recipes',
        'Herbal supplement recommendations',
        'Guided meditation sessions',
        'Weekly group video calls',
        'Personal progress tracking',
        'Detox recipe e-book',
        'Access to private community group',
        '30-day money-back guarantee'
      ],
      schedule: [
        'Week 1: Preparation and gentle cleansing',
        'Week 2: Deep detox and elimination',
        'Week 3: Restoration and rebalancing'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Dosha Discovery & Balance Program',
      duration: '8 Weeks',
      level: 'All Levels',
      price: '$199',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Ayurvedic Foundation',
      participants: 892,
      rating: 4.9,
      description: 'Discover your unique constitution and learn how to live in harmony with your natural tendencies for optimal health.',
      longDescription: 'This comprehensive 8-week program helps you understand your unique dosha combination and provides personalized recommendations for diet, lifestyle, and self-care practices. Perfect for beginners looking to integrate Ayurvedic principles into their daily life.',
      includes: [
        'Comprehensive dosha assessment',
        'Personalized lifestyle recommendations',
        'Weekly educational modules',
        'Custom meal planning guide',
        'Daily routine templates',
        'Herbal medicine basics course',
        'Monthly one-on-one consultation',
        'Lifetime access to materials'
      ],
      schedule: [
        'Weeks 1-2: Understanding the doshas',
        'Weeks 3-4: Personal assessment and analysis',
        'Weeks 5-6: Customized lifestyle design',
        'Weeks 7-8: Implementation and fine-tuning'
      ]
    },
    {
      id: 3,
      title: 'Mindful Eating Mastery',
      duration: '6 Weeks',
      level: 'All Levels',
      price: '$149',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Nutrition & Diet',
      participants: 567,
      rating: 4.7,
      description: 'Transform your relationship with food through mindful eating practices and Ayurvedic nutrition principles.',
      longDescription: 'Learn to eat intuitively, improve digestion, and develop a healthy relationship with food. This program combines mindfulness techniques with Ayurvedic nutrition wisdom to help you make better food choices and enjoy meals more fully.',
      includes: [
        'Mindful eating techniques',
        'Digestive health optimization',
        'Emotional eating solutions',
        'Seasonal eating guidelines',
        'Recipe collection and meal plans',
        'Weekly live Q&A sessions',
        'Mindful eating journal',
        'Nutrition tracking tools'
      ],
      schedule: [
        'Weeks 1-2: Mindfulness foundations',
        'Weeks 3-4: Ayurvedic nutrition principles',
        'Weeks 5-6: Integration and habit formation'
      ]
    },
    {
      id: 4,
      title: 'Stress-Free Living Program',
      duration: '10 Weeks',
      level: 'All Levels',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Stress Management',
      participants: 743,
      rating: 4.6,
      description: 'Learn practical techniques to manage stress, anxiety, and overwhelm using ancient wisdom and modern science.',
      longDescription: 'This comprehensive stress management program teaches you practical techniques from yoga, meditation, and Ayurveda to help you manage stress more effectively and create lasting peace in your life.',
      includes: [
        'Daily meditation practices',
        'Breathing technique tutorials',
        'Stress-reduction strategies',
        'Time management tools',
        'Relaxation audio guides',
        'Stress assessment tools',
        'Weekly group support calls',
        'Emergency stress-relief toolkit'
      ],
      schedule: [
        'Weeks 1-3: Understanding stress and its effects',
        'Weeks 4-6: Building your stress-relief toolkit',
        'Weeks 7-8: Advanced techniques and practices',
        'Weeks 9-10: Creating sustainable habits'
      ]
    },
    {
      id: 5,
      title: 'Women\'s Wellness Journey',
      duration: '12 Weeks',
      level: 'All Levels',
      price: '$349',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Specialized Programs',
      participants: 456,
      rating: 4.9,
      description: 'A holistic program addressing the unique wellness needs of women through different life stages.',
      longDescription: 'This specialized program focuses on women\'s unique health needs, including hormonal balance, reproductive health, and emotional well-being. Learn Ayurvedic approaches to women\'s health issues and create a personalized wellness plan.',
      includes: [
        'Hormonal balance protocols',
        'Reproductive health guidance',
        'Emotional wellness strategies',
        'Monthly cycle support',
        'Menopause preparation/management',
        'Women-only community access',
        'Expert guest speakers',
        'Personalized health assessments'
      ],
      schedule: [
        'Weeks 1-3: Foundation and assessment',
        'Weeks 4-6: Hormonal health focus',
        'Weeks 7-9: Emotional wellness',
        'Weeks 10-12: Integration and lifestyle design'
      ]
    },
    {
      id: 6,
      title: 'Sleep Optimization Program',
      duration: '4 Weeks',
      level: 'All Levels',
      price: '$99',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      category: 'Health & Recovery',
      participants: 321,
      rating: 4.5,
      description: 'Improve your sleep quality and establish healthy sleep patterns using natural, holistic approaches.',
      longDescription: 'Transform your sleep with this intensive 4-week program that addresses the root causes of sleep issues using Ayurvedic principles, sleep hygiene, and relaxation techniques.',
      includes: [
        'Sleep assessment and tracking',
        'Bedtime routine optimization',
        'Relaxation techniques',
        'Herbal sleep remedies',
        'Environmental modifications',
        'Sleep meditation recordings',
        'Weekly progress check-ins',
        'Sleep improvement guarantee'
      ],
      schedule: [
        'Week 1: Sleep assessment and foundation',
        'Week 2: Routine establishment',
        'Week 3: Advanced optimization',
        'Week 4: Maintenance and troubleshooting'
      ]
    }
  ];

  const categories = [
    'All Programs',
    'Detox & Cleanse',
    'Ayurvedic Foundation',
    'Nutrition & Diet',
    'Stress Management',
    'Specialized Programs',
    'Health & Recovery'
  ];

  const [selectedCategory, setSelectedCategory] = useState('All Programs');

  const filteredPrograms = selectedCategory === 'All Programs' 
    ? programs 
    : programs.filter(program => program.category === selectedCategory);

  const featuredProgram = programs.find(program => program.featured);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="text-yellow-400">★</span>);
    }
    if (hasHalfStar) {
      stars.push(<span key="half" className="text-yellow-400">☆</span>);
    }
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-300">☆</span>);
    }
    return stars;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-surface-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-900 font-lexend mb-6">
            Wellness Programs
          </h1>
          <p className="text-lg text-surface-700 max-w-2xl mx-auto mb-8">
            Transform your health and well-being with our structured, expert-led programs. 
            Each program is designed to provide you with the knowledge, tools, and support 
            you need to create lasting positive changes in your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#programs"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
            >
              Explore Programs
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors"
            >
              Get Guidance
            </Link>
          </div>
        </div>
      </section>

      {/* Program Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b border-surface-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-surface-100 text-surface-700 hover:bg-surface-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Program */}
      {featuredProgram && selectedCategory === 'All Programs' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-lg shadow-medium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredProgram.image}
                    alt={featuredProgram.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      Featured Program
                    </span>
                    {featuredProgram.originalPrice && (
                      <span className="px-3 py-1 bg-red-100 text-red-700 text-sm font-medium rounded-full">
                        Save ${parseInt(featuredProgram.originalPrice.replace('$', '')) - parseInt(featuredProgram.price.replace('$', ''))}
                      </span>
                    )}
                  </div>
                  <h2 className="text-3xl font-bold text-text-900 font-newsreader mb-4">
                    {featuredProgram.title}
                  </h2>
                  <p className="text-surface-700 text-lg mb-6 leading-relaxed">
                    {featuredProgram.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-surface-700">
                      <span className="material-symbols-outlined text-primary-600">schedule</span>
                      <span>{featuredProgram.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-surface-700">
                      <span className="material-symbols-outlined text-primary-600">trending_up</span>
                      <span>{featuredProgram.level}</span>
                    </div>
                    <div className="flex items-center gap-2 text-surface-700">
                      <span className="material-symbols-outlined text-primary-600">group</span>
                      <span>{featuredProgram.participants} participants</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {featuredProgram.originalPrice && (
                        <span className="text-lg text-surface-500 line-through">
                          {featuredProgram.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold text-primary-600">
                        {featuredProgram.price}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProgram(featuredProgram)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Programs Grid */}
      <section id="programs" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {selectedCategory !== 'All Programs' && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-text-900 font-lexend">
                {selectedCategory} Programs
              </h2>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.filter(program => !program.featured).map((program) => (
              <div key={program.id} className="group">
                <div className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {program.originalPrice && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold">
                        Sale
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-surface-100 text-surface-700 text-xs font-medium rounded">
                        {program.category}
                      </span>
                      <span className="text-surface-500 text-xs">{program.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-900 font-newsreader mb-3 group-hover:text-primary-600 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-surface-700 mb-4 flex-1">
                      {program.description}
                    </p>
                    
                    {/* Rating and Participants */}
                    <div className="flex items-center gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-1">
                        <div className="flex">{renderStars(program.rating)}</div>
                        <span className="text-surface-600">({program.rating})</span>
                      </div>
                      <span className="text-surface-500">{program.participants} enrolled</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {program.originalPrice && (
                          <span className="text-sm text-surface-500 line-through">
                            {program.originalPrice}
                          </span>
                        )}
                        <span className="text-lg font-bold text-primary-600">
                          {program.price}
                        </span>
                      </div>
                      <button
                        onClick={() => setSelectedProgram(program)}
                        className="px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProgram.image}
                alt={selectedProgram.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProgram(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-medium hover:bg-surface-50 transition-colors"
              >
                <span className="material-symbols-outlined text-text-900">close</span>
              </button>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-text-900 font-newsreader mb-4">
                    {selectedProgram.title}
                  </h2>
                  <p className="text-surface-700 mb-6 leading-relaxed">
                    {selectedProgram.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-900 mb-3">Program Schedule</h4>
                    <ul className="space-y-2">
                      {selectedProgram.schedule.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mt-2"></span>
                          <span className="text-surface-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-900 mb-3">What's Included</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {selectedProgram.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary-600 text-sm">check_circle</span>
                          <span className="text-surface-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-surface-50 p-6 rounded-lg sticky top-4">
                    <h3 className="font-semibold text-text-900 mb-4">Program Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">schedule</span>
                          <span className="font-medium text-text-900">Duration</span>
                        </div>
                        <p className="text-surface-700 text-sm ml-6">{selectedProgram.duration}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">trending_up</span>
                          <span className="font-medium text-text-900">Level</span>
                        </div>
                        <p className="text-surface-700 text-sm ml-6">{selectedProgram.level}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">group</span>
                          <span className="font-medium text-text-900">Participants</span>
                        </div>
                        <p className="text-surface-700 text-sm ml-6">{selectedProgram.participants} enrolled</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">star</span>
                          <span className="font-medium text-text-900">Rating</span>
                        </div>
                        <div className="flex items-center gap-2 ml-6">
                          <div className="flex">{renderStars(selectedProgram.rating)}</div>
                          <span className="text-surface-700 text-sm">({selectedProgram.rating})</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-surface-200">
                      <div className="text-center mb-4">
                        {selectedProgram.originalPrice && (
                          <div className="text-sm text-surface-500 line-through mb-1">
                            {selectedProgram.originalPrice}
                          </div>
                        )}
                        <span className="text-3xl font-bold text-primary-600">{selectedProgram.price}</span>
                      </div>
                      <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                        Enroll Now
                      </button>
                      <p className="text-xs text-surface-600 text-center mt-2">
                        30-day money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-surface-700">
              Hear from participants who have transformed their lives through our programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                program: '21-Day Detox Program',
                result: 'Lost 15 pounds and gained incredible energy',
                quote: 'This program completely changed my relationship with food and my body. I feel more energized than I have in years!'
              },
              {
                name: 'Michael Chen',
                program: 'Stress-Free Living Program',
                result: 'Reduced anxiety by 80% and improved sleep',
                quote: 'The techniques I learned have become part of my daily routine. I handle stress so much better now.'
              },
              {
                name: 'Lisa Rodriguez',
                program: 'Dosha Discovery Program',
                result: 'Better digestion and clearer skin',
                quote: 'Understanding my dosha was a game-changer. I now eat and live in a way that truly supports my body.'
              }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-soft">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {story.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="ml-3">
                    <h4 className="font-semibold text-text-900">{story.name}</h4>
                    <p className="text-primary-600 text-sm">{story.program}</p>
                  </div>
                </div>
                <p className="text-surface-700 text-sm mb-3 italic">"{story.quote}"</p>
                <p className="text-primary-600 font-medium text-sm">{story.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-lexend">
            Start Your Transformation Today
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Join thousands of others who have already begun their journey to better health and well-being. 
            Our expert-designed programs provide the guidance and support you need to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-surface-100 transition-colors">
              Browse All Programs
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors"
            >
              Get Personal Guidance
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WellnessPrograms;

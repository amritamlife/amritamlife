import React from 'react';
import { Link } from 'react-router-dom';
import VineDecoration from '../components/VineDecoration';
import Practitioners from '../components/Practitioners';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Herbal Supplements',
      description: 'Enhance your health with our natural herbal supplements.',
      image: '/sample-images/product-card-1.png',
    },
    {
      id: 2,
      name: 'Organic Skincare',
      description: 'Nourish your skin with our organic skincare range.',
      image: '/sample-images/product-card-2.png',
    },
    {
      id: 3,
      name: 'Ayurvedic Teas',
      description: 'Find balance with our selection of Ayurvedic teas.',
      image: '/sample-images/product-card-3.png',
    },
  ];

  const services = [
    {
      id: 1,
      name: 'Detox Breakfast Plans',
      description: 'Wholesome detox breakfast bowls with fresh fruits, chia seeds, soaked oats, and herbal tea to cleanse and energize your morning.',
      image: '/sample-images/meal-plans-1.png',
      features: ['Fresh Fruits & Seeds', 'Herbal Tea Blend', 'Organic Oats', 'Customizable Portions'],
      price: 'Starting at $15/meal',
      duration: 'Daily or Weekly Plans'
    },
    {
      id: 2,
      name: 'Energy Meal Boosters',
      description: 'Vibrant energy-boosting Ayurvedic breakfast with multigrain porridge, nuts, dates, honey drizzle, and herbal tonics.',
      image: '/sample-images/meal-plans-2.png',
      features: ['Multigrain Porridge', 'Natural Sweeteners', 'Herbal Tonics', 'Nutrient Dense'],
      price: 'Starting at $18/meal',
      duration: 'Morning Energy Plans'
    },
    {
      id: 3,
      name: 'Herbal Infused Porridge',
      description: 'Calming herbal-infused porridge with warming spices, cardamom, and traditional herbs served in rustic clay bowls.',
      image: '/sample-images/meal-plans-3.png',
      features: ['Traditional Herbs', 'Warming Spices', 'Clay Bowl Service', 'Digestive Support'],
      price: 'Starting at $16/meal',
      duration: 'Therapeutic Meals'
    },
    {
      id: 4,
      name: 'Immunity Booster Bowl',
      description: 'Immunity-boosting breakfast bowl with turmeric oats, nuts, dried fruits, and golden milk for optimal health protection.',
      image: '/sample-images/meal-plans-4.png',
      features: ['Turmeric Infusion', 'Golden Milk', 'Antioxidant Rich', 'Immune Support'],
      price: 'Starting at $20/meal',
      duration: 'Health Protection Plans'
    },
    {
      id: 5,
      name: 'Weight Balance Meals',
      description: 'Light, balanced Ayurvedic breakfast of sprouted pulses, fresh vegetables, and herbal chutneys for natural weight management.',
      image: '/sample-images/meal-plans-5.png',
      features: ['Sprouted Pulses', 'Fresh Vegetables', 'Herbal Chutneys', 'Portion Control'],
      price: 'Starting at $17/meal',
      duration: 'Weight Management Plans'
    },
    {
      id: 6,
      name: 'Complete Detox Programs',
      description: 'Comprehensive 7-30 day detox programs with meal plans, herbal supplements, and guidance for complete body cleansing.',
      image: '/sample-images/meal-plans-6.png',
      features: ['Full Meal Plans', 'Herbal Supplements', 'Daily Guidance', 'Progress Tracking'],
      price: 'Starting at $150/week',
      duration: '7-30 Day Programs'
    },
    {
      id: 7,
      name: 'Ayurvedic Consultations',
      description: 'Expert one-on-one guidance with certified Ayurvedic practitioners to create your personalized wellness journey.',
      image: '/sample-images/meal-plans-7.png',
      features: ['Personal Assessment', 'Custom Plans', 'Follow-up Support', 'Lifestyle Guidance'],
      price: 'Starting at $75/session',
      duration: '60-90 minute sessions'
    },
    {
      id: 8,
      name: 'Yoga & Meditation Classes',
      description: 'Traditional yoga and meditation sessions designed to enhance physical flexibility, mental clarity, and spiritual well-being.',
      image: '/sample-images/meal-plans-8.png',
      features: ['Hatha Yoga', 'Pranayama', 'Meditation', 'Group & Private'],
      price: 'Starting at $25/class',
      duration: '60-75 minute sessions'
    },
    {
      id: 9,
      name: 'Lifestyle Coaching',
      description: 'Comprehensive lifestyle transformation programs combining nutrition, fitness, mindfulness, and Ayurvedic principles.',
      image: '/sample-images/meal-plans-9.png',
      features: ['Holistic Approach', 'Personalized Plans', 'Weekly Check-ins', 'Progress Reports'],
      price: 'Starting at $200/month',
      duration: '3-12 Month Programs'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative">
        <VineDecoration 
          position="top" 
          length={1600} 
          leafCount={16} 
          className="opacity-40" 
          animateOnScroll={true}
        />
        
        <HeroSlider />
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="relative py-4">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"></div>
              <div className="relative bg-surface-50 px-8 inline-block">
                <h2 className="text-text-900 text-4xl font-bold leading-tight tracking-tight font-lexend">Our Products</h2>
              </div>
            </div>
            <p className="text-center text-lg text-surface-700 mt-4 max-w-2xl mx-auto">
              Handcrafted with natural ingredients to nurture your body.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="flex flex-col gap-4 rounded-lg overflow-hidden shadow-soft hover:shadow-medium transition-shadow duration-300">
                  <div className="w-full aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-text-900 text-xl font-semibold leading-normal mb-2">
                      {product.name}
                    </h3>
                    <p className="text-surface-700 text-base font-normal leading-normal">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="relative py-6">
        <VineDecoration
          position="center"
          length={1300}
          leafCount={8}
          className="opacity-40"
          animateOnScroll={true}
        />
      </div>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="relative py-4">
              <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-surface-300 to-transparent"></div>
              <div className="relative bg-surface-100 px-8 inline-block">
                <h2 className="text-text-900 text-4xl font-bold leading-tight tracking-tight font-lexend">Our Services</h2>
              </div>
            </div>
            <p className="text-center text-lg text-surface-700 mt-4 max-w-2xl mx-auto">
              Guidance and support for your holistic wellness journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="group">
                <div className="flex flex-col gap-4 rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 bg-white border border-surface-100 hover:border-primary-200">
                  <div className="w-full aspect-square overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {service.price && (
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                        {service.price}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-text-900 text-xl font-bold leading-normal group-hover:text-primary-600 transition-colors">
                        {service.name}
                      </h3>
                      {service.duration && (
                        <span className="text-primary-600 text-sm font-medium bg-primary-50 px-2 py-1 rounded-full">
                          {service.duration}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-surface-700 text-base font-normal leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {service.features && (
                      <div className="mb-4">
                        <h4 className="text-text-900 font-semibold mb-2 text-sm">Key Features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {service.features.map((feature, index) => (
                            <span
                              key={index}
                              className="inline-flex items-center px-2 py-1 bg-surface-100 text-surface-700 text-xs rounded-full"
                            >
                              <span className="material-symbols-outlined text-green-500 text-sm mr-1">check_circle</span>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <Link
                        to="/services"
                        className="inline-flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-bold rounded-full hover:bg-primary-700 hover:scale-105 transition-all duration-300"
                      >
                        Order Now
                        <span className="material-symbols-outlined ml-1 text-sm">arrow_forward</span>
                      </Link>
                      <Link
                        to="/services"
                        className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section Divider */}
        <div className="relative py-6">
          <VineDecoration
            position="center"
            length={1300}
            leafCount={8}
            className="opacity-40"
            animateOnScroll={true}
          />
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="bg-surface-200 rounded-2xl relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="absolute -top-5 -left-5 w-64 h-20 opacity-25">
              <VineDecoration
                position="corner"
                length={800}
                leafCount={6}
                className="transform rotate-12"
                animateOnScroll={true}
              />
            </div>
            <div className="absolute -bottom-5 -right-5 w-64 h-20 opacity-25">
              <VineDecoration
                position="corner"
                length={800}
                leafCount={6}
                className="transform rotate-180 scale-x-[-1]"
                animateOnScroll={true}
              />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-text-900 text-4xl font-bold leading-tight tracking-tight font-lexend mb-6">
                Our Philosophy
              </h2>
              <p className="text-text-900 text-lg font-normal leading-relaxed max-w-4xl mx-auto">
                At Amritam, we believe in the power of nature and ancient wisdom to promote holistic well-being. 
                Our products and services are crafted with care, using traditional Indian practices to help you 
                achieve balance and harmony in your life. We bridge the gap between time-tested knowledge and 
                modern living, creating an ecosystem that nurtures your complete wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Practitioners Section */}
      <Practitioners />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center">
            <h2 className="text-text-900 text-4xl sm:text-5xl font-bold leading-tight tracking-tight font-lexend mb-4">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-surface-700 text-lg font-normal leading-normal max-w-2xl mx-auto mb-8">
              Have questions or need assistance? Our team is here to help you discover the path to holistic wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-primary-600 text-white text-lg font-bold rounded-full hover:bg-primary-700 transition-colors duration-300"
              >
                Get in Touch
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-primary-600 text-primary-600 text-lg font-bold rounded-full hover:bg-primary-600 hover:text-white transition-colors duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom decorative vine */}
        <VineDecoration 
          position="bottom" 
          length={1600} 
          leafCount={14} 
          className="opacity-35" 
          animateOnScroll={true}
        />
      </section>
    </div>
  );
};

export default Home;

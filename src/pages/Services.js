import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Practitioners from '../components/Practitioners';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: 'Ayurvedic Consultations',
      description: 'Personalized health assessments and treatment plans based on your unique constitution',
      longDescription: 'Our certified Ayurvedic practitioners conduct comprehensive consultations to assess your dosha, current health status, and lifestyle factors. We create personalized treatment plans that include dietary recommendations, herbal formulations, and lifestyle modifications to restore balance and promote optimal health.',
      duration: '60-90 minutes',
      price: 'Starting at $150',
      image: '/sample-images/health-wellness-1.png',
      features: [
        'Comprehensive dosha assessment',
        'Personalized dietary guidelines',
        'Herbal remedy recommendations',
        'Lifestyle modification plan',
        'Follow-up support included'
      ],
      category: 'consultation'
    },
    {
      id: 2,
      title: 'Yoga & Meditation Classes',
      description: 'Group and private sessions designed to enhance physical flexibility and mental clarity',
      longDescription: 'Our experienced yoga instructors offer classes for all levels, from beginner to advanced. We incorporate traditional Hatha, Vinyasa, and restorative yoga practices, along with pranayama (breathing techniques) and meditation to create a comprehensive wellness experience.',
      duration: '60-75 minutes',
      price: 'From $25 per class',
      image: '/sample-images/health-wellness-2.png',
      features: [
        'Multiple class styles available',
        'Experienced certified instructors',
        'Small group sizes',
        'Props and equipment provided',
        'Online and in-person options'
      ],
      category: 'wellness'
    },
    {
      id: 3,
      title: 'Nutritional Counseling',
      description: 'Evidence-based nutrition guidance tailored to your health goals and dietary preferences',
      longDescription: 'Our registered dietitians combine modern nutritional science with traditional Ayurvedic principles to create sustainable eating plans. We focus on whole foods, seasonal eating, and mindful nutrition practices that support your unique body type and health objectives.',
      duration: '45-60 minutes',
      price: 'Starting at $120',
      image: '/sample-images/food-health-wellness-3.png',
      features: [
        'Personalized meal planning',
        'Seasonal eating guidelines',
        'Supplement recommendations',
        'Recipe suggestions',
        'Ongoing progress tracking'
      ],
      category: 'nutrition'
    },
    {
      id: 4,
      title: 'Herbal Medicine Consultations',
      description: 'Traditional herbal remedies and formulations for natural healing and prevention',
      longDescription: 'Our herbalists work with you to identify the most appropriate herbal medicines for your health concerns. We provide custom herbal formulations, guidance on proper usage, and education about the healing properties of traditional plants and herbs.',
      duration: '45 minutes',
      price: 'Starting at $100',
      image: '/sample-images/Herbal_Medicine_Consultations.png',
      features: [
        'Custom herbal formulations',
        'Quality sourced ingredients',
        'Detailed usage instructions',
        'Safety and interaction guidance',
        'Follow-up consultations'
      ],
      category: 'herbal'
    },
    {
      id: 5,
      title: 'Wellness Coaching',
      description: 'Holistic lifestyle coaching to help you achieve sustainable health and wellness goals',
      longDescription: 'Our certified wellness coaches provide ongoing support and guidance as you implement positive lifestyle changes. We focus on sustainable habits, stress management, work-life balance, and creating a wellness routine that fits your unique life circumstances.',
      duration: '50 minutes',
      price: 'Starting at $90',
      image: '/sample-images/Wellness-Coaching.png',
      features: [
        'Goal setting and planning',
        'Habit formation support',
        'Stress management techniques',
        'Accountability and motivation',
        'Regular progress reviews'
      ],
      category: 'coaching'
    },
    {
      id: 6,
      title: 'Detox & Cleansing Programs',
      description: 'Guided cleansing programs to reset your body and enhance natural detoxification',
      longDescription: 'Our supervised detox programs combine traditional Panchakarma principles with modern safety standards. These programs help eliminate toxins, boost metabolism, and restore vitality through carefully planned dietary protocols and supportive therapies.',
      duration: '7-21 days',
      price: 'Starting at $350',
      image: '/sample-images/product-card-1.png',
      features: [
        'Medical supervision',
        'Customized detox protocols',
        'Nutritional support',
        'Daily check-ins',
        'Post-cleanse guidance'
      ],
      category: 'detox'
    },
    {
      id: 6,
      title: 'Detox Breakfast Plans',
      description: 'Wholesome detox breakfast bowls with fresh fruits, chia seeds, and herbal tea',
      longDescription: 'Start your day with our carefully crafted detox breakfast plans featuring organic ingredients, superfoods, and traditional Ayurvedic principles. Each meal is designed to cleanse your system while providing sustained energy and nutrition.',
      duration: 'Daily or Weekly Plans',
      price: 'Starting at $15/meal',
      image: '/sample-images/meal-plans-1.png',
      features: [
        'Fresh fruits and seeds',
        'Herbal tea blends',
        'Organic oats and grains',
        'Customizable portions',
        'Home delivery available'
      ],
      category: 'nutrition'
    },
    {
      id: 7,
      title: 'Energy Meal Boosters',
      description: 'Vibrant energy-boosting Ayurvedic breakfast with multigrain porridge and tonics',
      longDescription: 'Fuel your morning with our energy-boosting meal plans that combine traditional multigrain porridge, natural sweeteners, nuts, dates, and specially formulated herbal tonics to maintain energy levels throughout the day.',
      duration: 'Morning Energy Plans',
      price: 'Starting at $18/meal',
      image: '/sample-images/meal-plans-2.png',
      features: [
        'Multigrain porridge base',
        'Natural honey and dates',
        'Herbal energy tonics',
        'Nutrient-dense additions',
        'Weekly meal prep options'
      ],
      category: 'nutrition'
    },
    {
      id: 8,
      title: 'Herbal Infused Porridge',
      description: 'Calming herbal-infused porridge with warming spices and traditional herbs',
      longDescription: 'Experience the therapeutic benefits of our herbal-infused porridge, carefully prepared with warming spices, cardamom, and traditional Ayurvedic herbs, served in authentic rustic clay bowls for enhanced digestion and wellness.',
      duration: 'Therapeutic Meals',
      price: 'Starting at $16/meal',
      image: '/sample-images/meal-plans-3.png',
      features: [
        'Traditional Ayurvedic herbs',
        'Warming spice blends',
        'Clay bowl service',
        'Digestive support',
        'Made-to-order freshness'
      ],
      category: 'nutrition'
    },
    {
      id: 9,
      title: 'Immunity Booster Bowl',
      description: 'Immunity-boosting breakfast bowl with turmeric oats and golden milk',
      longDescription: 'Strengthen your immune system with our specially formulated breakfast bowls featuring turmeric-infused oats, immunity-boosting nuts, dried fruits, and golden milk prepared with traditional spices and healing herbs.',
      duration: 'Health Protection Plans',
      price: 'Starting at $20/meal',
      image: '/sample-images/meal-plans-4.png',
      features: [
        'Turmeric infusion',
        'Golden milk preparation',
        'Antioxidant-rich ingredients',
        'Immune system support',
        'Daily wellness boost'
      ],
      category: 'nutrition'
    },
    {
      id: 10,
      title: 'Weight Balance Meals',
      description: 'Light, balanced Ayurvedic breakfast for natural weight management',
      longDescription: 'Support your weight management goals with our light, balanced Ayurvedic breakfast featuring sprouted pulses, fresh vegetables, and specially prepared herbal chutneys that promote healthy digestion and metabolism.',
      duration: 'Weight Management Plans',
      price: 'Starting at $17/meal',
      image: '/sample-images/meal-plans-5.png',
      features: [
        'Sprouted pulse varieties',
        'Fresh seasonal vegetables',
        'Herbal weight-loss chutneys',
        'Portion-controlled servings',
        'Metabolism-boosting ingredients'
      ],
      category: 'nutrition'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'consultation', name: 'Consultations' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'nutrition', name: 'Nutrition' },
    { id: 'herbal', name: 'Herbal Medicine' },
    { id: 'coaching', name: 'Coaching' },
    { id: 'detox', name: 'Detox Programs' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-surface-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-900 font-lexend mb-6">
            Wellness Services
          </h1>
          <p className="text-lg text-surface-700 max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of holistic health services designed to support your journey 
            toward optimal wellness. Each service is personalized to meet your unique needs and health goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>

      {/* Service Categories */}
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

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="group">
                <div className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-text-900 font-lexend mb-3">
                      {service.title}
                    </h3>
                    <p className="text-surface-700 mb-4 flex-1">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-surface-600">Duration:</span>
                        <span className="font-medium text-text-900">{service.duration}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-surface-600">Price:</span>
                        <span className="font-semibold text-primary-600">{service.price}</span>
                      </div>
                      <button
                        onClick={() => setSelectedService(service)}
                        className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-medium hover:bg-surface-50 transition-colors"
              >
                <span className="material-symbols-outlined text-text-900">close</span>
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
                {selectedService.title}
              </h2>
              <p className="text-surface-700 mb-6 leading-relaxed">
                {selectedService.longDescription}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-surface-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-text-900 mb-1">Duration</h4>
                  <p className="text-surface-700">{selectedService.duration}</p>
                </div>
                <div className="bg-surface-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-text-900 mb-1">Investment</h4>
                  <p className="text-primary-600 font-semibold">{selectedService.price}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-text-900 mb-3">What's Included</h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      <span className="text-surface-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <Link
                  to="/contact"
                  className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
                >
                  Book Consultation
                </Link>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 border border-surface-300 text-surface-700 py-3 px-6 rounded-lg font-semibold hover:bg-surface-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
              Our Process
            </h2>
            <p className="text-lg text-surface-700 max-w-2xl mx-auto">
              We follow a comprehensive approach to ensure you receive the most effective and personalized care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Initial Consultation',
                description: 'We begin with a thorough assessment of your health history, current concerns, and wellness goals.'
              },
              {
                step: '2',
                title: 'Personalized Plan',
                description: 'Based on your assessment, we create a customized treatment plan tailored to your unique needs.'
              },
              {
                step: '3',
                title: 'Implementation',
                description: 'We guide you through implementing your plan with ongoing support and adjustments as needed.'
              },
              {
                step: '4',
                title: 'Follow-up',
                description: 'Regular check-ins ensure your progress and allow us to refine your approach for optimal results.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-text-900 mb-3 font-lexend">
                  {item.title}
                </h3>
                <p className="text-surface-700">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioners Section */}
      <Practitioners />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-lexend">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Schedule a consultation with one of our experienced practitioners and take the first step 
            toward optimal health and well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-surface-100 transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/wellness-programs"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

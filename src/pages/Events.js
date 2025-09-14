import React, { useState } from 'react';

const Events = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const categories = [
    { id: 'all', name: 'All Events' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'retreat', name: 'Retreats' },
    { id: 'webinar', name: 'Webinars' },
    { id: 'class', name: 'Classes' },
  ];

  const events = [
    {
      id: 1,
      title: 'Ayurvedic Cooking Workshop',
      category: 'workshop',
      date: 'July 15, 2024',
      time: '10:00 AM - 4:00 PM',
      location: 'Amritam Wellness Center',
      price: '$120',
      spots: '12 spots remaining',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Learn the art of cooking healthy and delicious meals based on Ayurvedic principles.',
      longDescription: 'This hands-on workshop will teach you the fundamentals of Ayurvedic cooking, including how to choose foods based on your dosha, the importance of the six tastes, and how to use spices therapeutically. You\'ll prepare a complete meal and take home recipes and spice blends.',
      instructor: 'Chef Meera Patel',
      includes: [
        'Hands-on cooking experience',
        'Complete meal preparation',
        'Recipe booklet',
        'Spice blend kit',
        'Light breakfast and lunch'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Meditation & Mindfulness Retreat',
      category: 'retreat',
      date: 'August 5-7, 2024',
      time: 'Friday 6:00 PM - Sunday 4:00 PM',
      location: 'Mountain View Retreat Center',
      price: '$450',
      spots: '8 spots remaining',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A weekend retreat to disconnect from stress and reconnect with your inner self.',
      longDescription: 'Join us for a transformative weekend retreat in the peaceful mountains. This retreat combines various meditation techniques, mindful movement, and silent contemplation. Perfect for both beginners and experienced practitioners looking to deepen their practice.',
      instructor: 'Raj Patel & Dr. Priya Sharma',
      includes: [
        '2 nights accommodation',
        'All vegetarian meals',
        'Daily meditation sessions',
        'Yoga classes',
        'Nature walks',
        'Meditation kit'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'Herbal Remedies Workshop',
      category: 'workshop',
      date: 'September 10, 2024',
      time: '2:00 PM - 6:00 PM',
      location: 'Amritam Wellness Center',
      price: '$85',
      spots: '15 spots remaining',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Discover the healing power of herbs and create your own natural remedies.',
      longDescription: 'Learn about the therapeutic properties of common herbs and how to prepare simple remedies for everyday health concerns. You\'ll make tinctures, teas, and salves to take home.',
      instructor: 'Dr. Anita Desai',
      includes: [
        'Herb identification guide',
        'Remedy preparation kit',
        'Take-home preparations',
        'Recipe cards',
        'Light refreshments'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Understanding Your Dosha - Free Webinar',
      category: 'webinar',
      date: 'July 22, 2024',
      time: '7:00 PM - 8:30 PM',
      location: 'Online (Zoom)',
      price: 'Free',
      spots: 'Unlimited',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Learn about the three doshas and how to identify your unique constitution.',
      longDescription: 'This introductory webinar will help you understand the fundamental concepts of Ayurveda and how to determine your unique body-mind type. Includes a guided dosha assessment and personalized recommendations.',
      instructor: 'Dr. Priya Sharma',
      includes: [
        'Interactive dosha assessment',
        'Personalized recommendations',
        'Q&A session',
        'Recording access',
        'Resource downloads'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Morning Yoga Series',
      category: 'class',
      date: 'Ongoing - Mondays & Wednesdays',
      time: '7:00 AM - 8:00 AM',
      location: 'Amritam Wellness Center',
      price: '$25 per class',
      spots: '6 spots available',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Start your day with energizing yoga practice suitable for all levels.',
      longDescription: 'Join our regular morning yoga classes designed to awaken your body and mind. Each session includes gentle warm-ups, strengthening poses, and relaxing cool-down with meditation.',
      instructor: 'Raj Patel',
      includes: [
        'All props provided',
        'Beginner modifications',
        'Take-home practice sheets',
        'Community support',
        'Monthly progress check-ins'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Women\'s Wellness Retreat',
      category: 'retreat',
      date: 'October 12-14, 2024',
      time: 'Friday 4:00 PM - Sunday 2:00 PM',
      location: 'Seaside Wellness Resort',
      price: '$520',
      spots: '10 spots remaining',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'A nurturing retreat focused on women\'s health and empowerment.',
      longDescription: 'This special retreat addresses the unique wellness needs of women through Ayurvedic practices, hormone balancing techniques, and supportive community building. Includes spa treatments and nutrition counseling.',
      instructor: 'Dr. Priya Sharma & Team',
      includes: [
        '2 nights luxury accommodation',
        'All organic meals',
        'Spa treatments',
        'Hormone balancing workshop',
        'Nutrition counseling',
        'Wellness kit'
      ],
      featured: false
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const featuredEvent = events.find(event => event.featured);
  const upcomingEvents = filteredEvents.filter(event => !event.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-surface-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-900 font-lexend mb-6">
            Wellness Events & Workshops
          </h1>
          <p className="text-lg text-surface-700 max-w-2xl mx-auto">
            Join our community of wellness enthusiasts in transformative experiences that combine 
            ancient wisdom with modern practices. From hands-on workshops to peaceful retreats, 
            we offer opportunities for every stage of your wellness journey.
          </p>
        </div>
      </section>

      {/* Event Categories */}
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

      {/* Featured Event */}
      {featuredEvent && selectedCategory === 'all' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="bg-white rounded-lg shadow-medium overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[4/3] lg:aspect-auto">
                  <img
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-sm font-medium rounded-full">
                      Featured Event
                    </span>
                    <span className="text-surface-600 text-sm">{featuredEvent.spots}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-text-900 font-newsreader mb-4">
                    {featuredEvent.title}
                  </h2>
                  <p className="text-surface-700 text-lg mb-6 leading-relaxed">
                    {featuredEvent.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-surface-700">
                      <span className="material-symbols-outlined text-primary-600">event</span>
                      <span>{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-surface-700">
                      <span className="material-symbols-outlined text-primary-600">schedule</span>
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-surface-700">
                      <span className="material-symbols-outlined text-primary-600">location_on</span>
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary-600">{featuredEvent.price}</span>
                    <button
                      onClick={() => setSelectedEvent(featuredEvent)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
                    >
                      Learn More & Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {selectedCategory !== 'all' && (
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-text-900 font-lexend">
                {categories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="group">
                <div className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden h-full flex flex-col">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-2 py-1 bg-surface-100 text-surface-700 text-xs font-medium rounded capitalize">
                        {event.category}
                      </span>
                      <span className="text-surface-500 text-xs">{event.spots}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-900 font-newsreader mb-3 group-hover:text-primary-600 transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-surface-700 mb-4 flex-1">
                      {event.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-surface-600">
                        <span className="material-symbols-outlined text-primary-600 text-sm">event</span>
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-surface-600">
                        <span className="material-symbols-outlined text-primary-600 text-sm">location_on</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary-600">{event.price}</span>
                      <button
                        onClick={() => setSelectedEvent(event)}
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

      {/* Event Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-medium hover:bg-surface-50 transition-colors"
              >
                <span className="material-symbols-outlined text-text-900">close</span>
              </button>
            </div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold text-text-900 font-newsreader mb-4">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-surface-700 mb-6 leading-relaxed">
                    {selectedEvent.longDescription}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-text-900 mb-3">Led by: {selectedEvent.instructor}</h4>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-900 mb-3">What's Included</h4>
                    <ul className="space-y-2">
                      {selectedEvent.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                          <span className="text-surface-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-surface-50 p-6 rounded-lg sticky top-4">
                    <h3 className="font-semibold text-text-900 mb-4">Event Details</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">event</span>
                          <span className="font-medium text-text-900">Date</span>
                        </div>
                        <p className="text-surface-700 text-sm ml-6">{selectedEvent.date}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">schedule</span>
                          <span className="font-medium text-text-900">Time</span>
                        </div>
                        <p className="text-surface-700 text-sm ml-6">{selectedEvent.time}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">location_on</span>
                          <span className="font-medium text-text-900">Location</span>
                        </div>
                        <p className="text-surface-700 text-sm ml-6">{selectedEvent.location}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="material-symbols-outlined text-primary-600 text-sm">group</span>
                          <span className="font-medium text-text-900">Availability</span>
                        </div>
                        <p className="text-surface-700 text-sm ml-6">{selectedEvent.spots}</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-surface-200">
                      <div className="text-center mb-4">
                        <span className="text-3xl font-bold text-primary-600">{selectedEvent.price}</span>
                      </div>
                      <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                        Register Now
                      </button>
                      <p className="text-xs text-surface-600 text-center mt-2">
                        Secure payment • Cancel anytime
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-lexend">
            Never Miss an Event
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Subscribe to our newsletter to be the first to know about upcoming workshops, 
            retreats, and special events.
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
        </div>
      </section>
    </div>
  );
};

export default Events;

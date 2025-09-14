import React, { useState } from 'react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', name: 'Profile', icon: 'person' },
    { id: 'orders', name: 'Order History', icon: 'receipt_long' },
    { id: 'saved', name: 'Saved Items', icon: 'bookmark_border' },
    { id: 'recommendations', name: 'Recommendations', icon: 'recommend' },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Ayurvedic Cooking Workshop',
      date: 'JUL 15, 2024',
      description: 'Learn the art of cooking healthy and delicious meals based on Ayurvedic principles.',
      status: 'registered',
    },
    {
      id: 2,
      title: 'Meditation & Mindfulness Retreat',
      date: 'AUG 05, 2024',
      description: 'A weekend retreat to disconnect from stress and reconnect with your inner self.',
      status: 'interested',
    },
    {
      id: 3,
      title: 'Herbal Remedies Workshop',
      date: 'SEP 10, 2024',
      description: 'Discover the healing power of herbs and create your own natural remedies.',
      status: 'registered',
    },
  ];

  const orders = [
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 67.50,
      items: 3,
    },
    {
      id: 'ORD-002',
      date: '2024-01-08',
      status: 'Delivered',
      total: 45.99,
      items: 2,
    },
    {
      id: 'ORD-003',
      date: '2023-12-22',
      status: 'Delivered',
      total: 89.25,
      items: 4,
    },
  ];

  const savedItems = [
    {
      id: 1,
      name: 'Ashwagandha Capsules',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Organic Turmeric Powder',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      name: 'Lavender Essential Oil',
      price: 15.50,
      image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  const recommendations = [
    {
      id: 1,
      name: 'Brahmi Capsules',
      price: 22.50,
      reason: 'Based on your interest in cognitive health',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      name: 'Chamomile Tea',
      price: 12.99,
      reason: 'Perfect for your relaxation routine',
      image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-8">
            {/* Profile Info */}
            <div>
              <h3 className="text-2xl font-bold text-text-900 font-newsreader mb-4 border-b border-surface-300 pb-2">
                Account Details
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row">
                  <p className="w-full sm:w-1/4 font-semibold text-surface-700">Name</p>
                  <p className="text-text-900">Anya Sharma</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <p className="w-full sm:w-1/4 font-semibold text-surface-700">Email</p>
                  <p className="text-text-900">anya.sharma@email.com</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <p className="w-full sm:w-1/4 font-semibold text-surface-700">Phone</p>
                  <p className="text-text-900">+1-555-123-4567</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <p className="w-full sm:w-1/4 font-semibold text-surface-700">Address</p>
                  <p className="text-text-900">123 Harmony Lane, Wellness City, CA 90210</p>
                </div>
              </div>
            </div>

            {/* Membership */}
            <div>
              <h3 className="text-2xl font-bold text-text-900 font-newsreader mb-4 border-b border-surface-300 pb-2">
                Membership
              </h3>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row">
                  <p className="w-full sm:w-1/4 font-semibold text-surface-700">Plan</p>
                  <p className="text-text-900">Premium</p>
                </div>
                <div className="flex flex-col sm:flex-row">
                  <p className="w-full sm:w-1/4 font-semibold text-surface-700">Renewal Date</p>
                  <p className="text-text-900">December 31, 2024</p>
                </div>
              </div>
              <div className="mt-6">
                <button className="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-600 hover:text-white transition-colors font-medium">
                  Manage Subscription
                </button>
              </div>
            </div>
          </div>
        );

      case 'orders':
        return (
          <div>
            <h3 className="text-2xl font-bold text-text-900 font-newsreader mb-6">Order History</h3>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white border border-surface-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-text-900">{order.id}</h4>
                      <p className="text-sm text-surface-600">{order.date}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-surface-700">{order.items} items</p>
                    <p className="font-semibold text-text-900">${order.total}</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 border border-surface-300 text-surface-700 rounded-lg text-sm hover:bg-surface-50 transition-colors">
                      Reorder
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'saved':
        return (
          <div>
            <h3 className="text-2xl font-bold text-text-900 font-newsreader mb-6">Saved Items</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedItems.map((item) => (
                <div key={item.id} className="bg-white border border-surface-200 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="font-semibold text-text-900 mb-2">{item.name}</h4>
                    <p className="text-lg font-bold text-text-900 mb-4">${item.price}</p>
                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors">
                        Add to Cart
                      </button>
                      <button className="px-3 py-2 text-surface-500 hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'recommendations':
        return (
          <div>
            <h3 className="text-2xl font-bold text-text-900 font-newsreader mb-6">Recommendations for You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recommendations.map((item) => (
                <div key={item.id} className="bg-white border border-surface-200 rounded-lg overflow-hidden">
                  <div className="flex">
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover" />
                    <div className="flex-1 p-4">
                      <h4 className="font-semibold text-text-900 mb-1">{item.name}</h4>
                      <p className="text-sm text-surface-600 mb-2">{item.reason}</p>
                      <p className="text-lg font-bold text-text-900 mb-3">${item.price}</p>
                      <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm hover:bg-primary-700 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-surface-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-900 font-newsreader mb-2">
            Welcome back, Anya!
          </h1>
          <p className="text-surface-700 text-lg">
            Explore your personalized dashboard for a holistic life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-soft border border-surface-200 p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1494790108755-2616c9c9b8d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                  alt="Anya Sharma"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-text-900 font-newsreader mb-2">
                Anya Sharma
              </h3>
              <p className="text-primary-600 font-semibold mb-1">Premium Member</p>
              <p className="text-surface-700 text-sm mb-4">Joined 2 years ago</p>
              <button className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Edit Profile
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Tabs */}
            <div className="border-b border-surface-300 mb-8">
              <nav className="-mb-px flex space-x-8 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium transition-colors ${
                      activeTab === tab.id
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-surface-700 hover:border-surface-300 hover:text-text-900'
                    }`}
                  >
                    <span className="material-symbols-outlined">{tab.icon}</span>
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl shadow-soft border border-surface-200 p-6 mb-8">
              {renderContent()}
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-soft border border-surface-200 p-6">
              <h3 className="text-2xl font-bold text-text-900 font-newsreader mb-6 border-b border-surface-300 pb-2">
                Upcoming Events & Workshops
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="border border-surface-200 rounded-xl overflow-hidden">
                    <div className="p-5">
                      <p className="text-sm font-semibold text-primary-600 mb-1">{event.date}</p>
                      <h4 className="text-xl font-bold text-text-900 font-newsreader mb-2">
                        {event.title}
                      </h4>
                      <p className="text-surface-700 text-sm mb-4">{event.description}</p>
                    </div>
                    <div className="px-5 py-4 bg-surface-50 border-t border-surface-200">
                      <button
                        className={`w-full py-2 px-4 rounded-lg text-sm font-semibold transition-colors ${
                          event.status === 'registered'
                            ? 'bg-primary-600 text-white hover:bg-primary-700'
                            : 'border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
                        }`}
                      >
                        {event.status === 'registered' ? 'Registered' : 'Register Now'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

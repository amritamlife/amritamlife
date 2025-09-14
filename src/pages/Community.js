import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: 'Best Ayurvedic herbs for stress relief?',
      author: 'Sarah Chen',
      category: 'Ayurveda',
      replies: 24,
      lastActive: '2 hours ago',
      excerpt: 'I\'ve been dealing with chronic stress and looking for natural solutions. What herbs have worked best for you?',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c9c9b8d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 2,
      title: 'Morning yoga routine for beginners',
      author: 'Michael Rodriguez',
      category: 'Yoga',
      replies: 18,
      lastActive: '4 hours ago',
      excerpt: 'Looking for a gentle morning routine that won\'t take more than 20 minutes. Any suggestions?',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 3,
      title: 'Vata-pacifying meal ideas for winter',
      author: 'Priya Patel',
      category: 'Nutrition',
      replies: 31,
      lastActive: '6 hours ago',
      excerpt: 'Winter is coming and my Vata is already acting up. What are your go-to warming, grounding meals?',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    },
    {
      id: 4,
      title: 'Meditation challenges - how to stay consistent?',
      author: 'David Kim',
      category: 'Meditation',
      replies: 42,
      lastActive: '8 hours ago',
      excerpt: 'I keep starting meditation practices but can\'t seem to stick with them. What has helped you maintain consistency?',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
    }
  ];

  const members = [
    {
      id: 1,
      name: 'Dr. Priya Sharma',
      role: 'Expert',
      specialization: 'Ayurvedic Medicine',
      contributions: 156,
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      verified: true
    },
    {
      id: 2,
      name: 'Raj Patel',
      role: 'Expert',
      specialization: 'Yoga & Meditation',
      contributions: 134,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      verified: true
    },
    {
      id: 3,
      name: 'Sarah Chen',
      role: 'Community Leader',
      specialization: 'Wellness Enthusiast',
      contributions: 89,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616c9c9b8d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      verified: false
    },
    {
      id: 4,
      name: 'Michael Rodriguez',
      role: 'Active Member',
      specialization: 'Yoga Practitioner',
      contributions: 67,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      verified: false
    }
  ];

  const resources = [
    {
      id: 1,
      title: 'Dosha Self-Assessment Guide',
      type: 'PDF Guide',
      downloads: 1420,
      author: 'Dr. Priya Sharma',
      description: 'Comprehensive guide to identifying your dominant dosha with detailed questionnaire and lifestyle recommendations.'
    },
    {
      id: 2,
      title: '21-Day Meditation Challenge',
      type: 'Program',
      downloads: 892,
      author: 'Raj Patel',
      description: 'Structured meditation program with daily practices, guidance, and progress tracking.'
    },
    {
      id: 3,
      title: 'Seasonal Eating Calendar',
      type: 'Resource',
      downloads: 756,
      author: 'Anita Desai',
      description: 'Month-by-month guide to eating according to Ayurvedic principles and seasonal availability.'
    },
    {
      id: 4,
      title: 'Essential Yoga Poses for Beginners',
      type: 'Video Series',
      downloads: 2103,
      author: 'Raj Patel',
      description: 'Step-by-step video tutorials covering fundamental yoga poses with modifications and alignment cues.'
    }
  ];

  const events = [
    {
      id: 1,
      title: 'Virtual Meditation Circle',
      date: 'Every Tuesday',
      time: '7:00 PM PST',
      participants: 45,
      type: 'Recurring'
    },
    {
      id: 2,
      title: 'Ayurvedic Cooking Q&A',
      date: 'July 20, 2024',
      time: '11:00 AM PST',
      participants: 23,
      type: 'Live Session'
    },
    {
      id: 3,
      title: 'Wellness Goal Setting Workshop',
      date: 'July 25, 2024',
      time: '2:00 PM PST',
      participants: 18,
      type: 'Workshop'
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'discussions':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-text-900">Recent Discussions</h3>
              <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                Start Discussion
              </button>
            </div>
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <div key={discussion.id} className="bg-white border border-surface-200 rounded-lg p-6 hover:shadow-soft transition-shadow">
                  <div className="flex items-start gap-4">
                    <img
                      src={discussion.avatar}
                      alt={discussion.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-text-900 hover:text-primary-600 cursor-pointer">
                          {discussion.title}
                        </h4>
                        <span className="px-2 py-1 bg-surface-100 text-surface-700 text-xs rounded">
                          {discussion.category}
                        </span>
                      </div>
                      <p className="text-surface-700 text-sm mb-3">{discussion.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-surface-600">
                        <div className="flex items-center gap-4">
                          <span>By {discussion.author}</span>
                          <span>{discussion.replies} replies</span>
                        </div>
                        <span>{discussion.lastActive}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'members':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-text-900">Community Members</h3>
              <div className="text-sm text-surface-600">2,456 total members</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {members.map((member) => (
                <div key={member.id} className="bg-white border border-surface-200 rounded-lg p-6">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      {member.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-sm">verified</span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-text-900">{member.name}</h4>
                      <p className="text-primary-600 text-sm font-medium">{member.role}</p>
                      <p className="text-surface-600 text-sm">{member.specialization}</p>
                      <p className="text-surface-500 text-xs mt-1">{member.contributions} contributions</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-text-900">Community Resources</h3>
              <button className="px-4 py-2 border border-surface-300 text-surface-700 rounded-lg hover:bg-surface-50 transition-colors font-medium">
                Upload Resource
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource) => (
                <div key={resource.id} className="bg-white border border-surface-200 rounded-lg p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-semibold text-text-900">{resource.title}</h4>
                    <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs rounded">
                      {resource.type}
                    </span>
                  </div>
                  <p className="text-surface-700 text-sm mb-4">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-surface-600">
                      <p>By {resource.author}</p>
                      <p>{resource.downloads} downloads</p>
                    </div>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-text-900">Community Events</h3>
              <Link
                to="/events"
                className="px-4 py-2 border border-surface-300 text-surface-700 rounded-lg hover:bg-surface-50 transition-colors font-medium"
              >
                View All Events
              </Link>
            </div>
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="bg-white border border-surface-200 rounded-lg p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-semibold text-text-900">{event.title}</h4>
                        <span className="px-2 py-1 bg-surface-100 text-surface-700 text-xs rounded">
                          {event.type}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-surface-600">
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">event</span>
                          {event.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">schedule</span>
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="material-symbols-outlined text-sm">group</span>
                          {event.participants} participants
                        </span>
                      </div>
                    </div>
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
                      Join
                    </button>
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-surface-100">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-900 font-lexend mb-6">
            Amritam Community
          </h1>
          <p className="text-lg text-surface-700 max-w-2xl mx-auto mb-8">
            Connect with like-minded individuals on their wellness journey. Share experiences, 
            learn from experts, and support each other in creating healthier, more balanced lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors">
              Join Community
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-primary-600 text-primary-600 font-semibold rounded-full hover:bg-primary-600 hover:text-white transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-surface-200">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">2,456</div>
              <div className="text-surface-700">Active Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">1,234</div>
              <div className="text-surface-700">Discussions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">89</div>
              <div className="text-surface-700">Expert Contributors</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">156</div>
              <div className="text-surface-700">Resources Shared</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Community Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Tabs Navigation */}
          <div className="border-b border-surface-300 mb-8">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {[
                { id: 'discussions', name: 'Discussions', icon: 'chat' },
                { id: 'members', name: 'Members', icon: 'group' },
                { id: 'resources', name: 'Resources', icon: 'library_books' },
                { id: 'events', name: 'Events', icon: 'event' },
              ].map((tab) => (
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
          {renderTabContent()}
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
              Community Guidelines
            </h2>
            <p className="text-lg text-surface-700 max-w-2xl mx-auto">
              Our community thrives on respect, authenticity, and mutual support. 
              Please follow these guidelines to help maintain a positive environment for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'favorite',
                title: 'Be Respectful',
                description: 'Treat all members with kindness and respect, regardless of their background or level of experience.'
              },
              {
                icon: 'verified',
                title: 'Stay Authentic',
                description: 'Share genuine experiences and advice. Avoid promoting unverified claims or commercial interests.'
              },
              {
                icon: 'support',
                title: 'Support Others',
                description: 'Offer encouragement and constructive feedback. We\'re all here to learn and grow together.'
              },
              {
                icon: 'topic',
                title: 'Stay On Topic',
                description: 'Keep discussions relevant to wellness, health, and holistic living practices.'
              },
              {
                icon: 'privacy_tip',
                title: 'Respect Privacy',
                description: 'Don\'t share personal information without consent. Respect boundaries and comfort levels.'
              },
              {
                icon: 'report',
                title: 'Report Issues',
                description: 'If you encounter inappropriate content or behavior, please report it to our moderation team.'
              }
            ].map((guideline, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined">{guideline.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-text-900 mb-3">
                  {guideline.title}
                </h3>
                <p className="text-surface-700 text-sm">
                  {guideline.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-lexend">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Become part of a supportive community dedicated to holistic wellness and personal growth. 
            Connect, learn, and thrive together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-surface-100 transition-colors"
            >
              Create Account
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-primary-600 transition-colors"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;

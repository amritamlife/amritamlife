import React from 'react';
import Practitioners from '../components/Practitioners';

const About = () => {
  const commitments = [
    {
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M228,103.56,152,148,76,103.56,28,128,128,188l100-60ZM128,48,28,108l100,60,100-60Z"></path>
        </svg>
      ),
      title: 'Authenticity',
      description: 'Our formulations are based on traditional recipes, passed down through generations, and enhanced by modern scientific research.',
    },
    {
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M229.66,85.66l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L152,112.69l42.34-42.35a8,8,0,0,1,11.32,11.32ZM224,128a96,96,0,1,1-96-96A96.11,96.11,0,0,1,224,128Zm-16,0a80,80,0,1,0-80,80A80.09,80.09,0,0,0,208,128ZM112,88a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V96A8,8,0,0,0,112,88Z"></path>
        </svg>
      ),
      title: 'Quality',
      description: 'We believe in the power of nature to heal and nourish, and we strive to create products that are both effective and gentle on the body.',
    },
    {
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M104,24a8,8,0,0,1,8,8V48.7A104.2,104.2,0,0,1,128,48a103.94,103.94,0,0,1,88,144.38A8,8,0,1,1,202.13,184a88,88,0,1,0-80.26,0,8,8,0,1,1-13.74,8.36A103.94,103.94,0,0,1,40,192.38,104.2,104.2,0,0,1,56,48.7V32A8,8,0,0,1,40,24a8,8,0,0,1,0-16H216a8,8,0,0,1,0,16Z"></path>
        </svg>
      ),
      title: 'Community',
      description: 'Beyond our products, we are dedicated to building a vibrant community of like-minded individuals who share a passion for holistic living.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-base font-semibold uppercase tracking-wider text-primary-600 mb-2">
              Our Journey
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-text-900 font-lexend mb-6">
              About Amritam
            </h1>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-surface-700">
              Discover the story behind Amritam, our vision for a holistic future, and our unwavering commitment to you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-text-900 tracking-tight font-lexend mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-surface-700">
                <p>
                  Amritam was born from a deep-seated passion for holistic well-being, rooted in the ancient wisdom of Indian traditions. Our journey began with a simple desire: to share the transformative power of natural, time-honored practices with the world.
                </p>
                <p>
                  Inspired by the rich heritage of Ayurveda and the profound connection between mind, body, and spirit, we embarked on a mission to curate a collection of products and resources that nurture and support a balanced, harmonious life.
                </p>
                <p>
                  What started as a personal quest for wellness has evolved into a comprehensive ecosystem that bridges ancient knowledge with modern living, helping thousands discover their path to holistic health.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-medium">
                <img
                  src="/sample-images/heritage-1.png"
                  alt="Traditional Indian wellness practices"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-surface-300 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-text-900 tracking-tight font-lexend mb-4">
              Our Mission & Values
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-surface-700">
              We're committed to making holistic wellness accessible to everyone through authentic products, expert guidance, and a supportive community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {commitments.map((commitment, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary-100 text-primary-600 mx-auto mb-6">
                  {commitment.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-900 mb-4 font-lexend">
                  {commitment.title}
                </h3>
                <p className="text-base text-surface-700 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden shadow-medium">
                <img
                  src="/sample-images/heritage-2.png"
                  alt="Ayurvedic herbs and spices"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-text-900 tracking-tight font-lexend mb-6">
                What Makes Us Unique
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-primary-600 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-900 mb-2">Holistic Ecosystem</h3>
                    <p className="text-surface-700">We're not just an online store—we're a complete ecosystem combining products, events, education, and community support.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-primary-600 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-900 mb-2">Ancient Wisdom, Modern Science</h3>
                    <p className="text-surface-700">We bridge the gap between traditional Indian knowledge and contemporary wellness practices, backed by modern research.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="w-3 h-3 bg-primary-600 rounded-full"></span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-900 mb-2">Cultural Preservation</h3>
                    <p className="text-surface-700">We're dedicated to preserving and promoting traditional Indian heritage through digital platforms and educational content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-text-900 tracking-tight font-lexend mb-6">
              Our Vision
            </h2>
            <p className="text-lg text-surface-800 leading-relaxed">
              Our vision is to be a beacon of holistic well-being, guiding individuals towards a life of balance, vitality, and inner peace. We aspire to be a trusted source for authentic, high-quality products and resources that honor the wisdom of ancient traditions while embracing the advancements of modern science.
            </p>
            <p className="text-lg text-surface-800 leading-relaxed mt-4">
              We envision a world where everyone has access to the tools and knowledge they need to thrive, and we are committed to making this vision a reality through our comprehensive approach to wellness.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <Practitioners 
        title="Meet Our Experts"
        subtitle="Our team combines traditional knowledge with modern expertise to guide you on your wellness journey."
      />

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6 font-lexend">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            Join thousands of others who have discovered the path to holistic health with Amritam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-surface-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

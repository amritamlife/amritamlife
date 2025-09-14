import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      image: '/sample-images/hero-banner-1.png',
      title: 'Embrace the Essence of Well-being',
      subtitle: 'Traditional Wisdom • Modern Wellness',
      description: 'Discover Amritam, your guide to holistic health and nutrition rooted in ancient Indian wisdom.',
      primaryButton: { text: 'Explore Our Offerings', link: '/products' },
      secondaryButton: { text: 'Learn More', link: '/about' }
    },
    {
      id: 2,
      image: '/sample-images/hero-banner-2.png',
      title: 'Authentic Ayurvedic Solutions',
      subtitle: 'Pure • Natural • Effective',
      description: 'Experience the power of time-tested Ayurvedic formulations crafted with the finest natural ingredients.',
      primaryButton: { text: 'Shop Ayurveda', link: '/products' },
      secondaryButton: { text: 'Our Story', link: '/about' }
    },
    {
      id: 3,
      image: '/sample-images/hero-banner-3.png',
      title: 'Holistic Wellness Journey',
      subtitle: 'Mind • Body • Spirit',
      description: 'Transform your life with our comprehensive wellness programs designed for complete harmony.',
      primaryButton: { text: 'Start Your Journey', link: '/wellness-programs' },
      secondaryButton: { text: 'Explore Services', link: '/services' }
    },
    {
      id: 4,
      image: '/sample-images/hero-banner-4.png',
      title: 'Heritage of Healing',
      subtitle: 'Ancient Knowledge • Modern Application',
      description: 'Connect with thousands of years of Indian healing tradition through our authentic products and practices.',
      primaryButton: { text: 'Discover Heritage', link: '/products' },
      secondaryButton: { text: 'Learn Tradition', link: '/knowledge-base' }
    },
    {
      id: 5,
      image: '/sample-images/hero-banner-5.png',
      title: 'Natural Living Solutions',
      subtitle: 'Organic • Sustainable • Pure',
      description: 'Embrace a lifestyle that honors nature with our range of organic products and sustainable practices.',
      primaryButton: { text: 'Go Natural', link: '/products' },
      secondaryButton: { text: 'Our Values', link: '/about' }
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              index === currentSlide
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-105'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(20, 27, 14, 0.7) 0%, rgba(20, 27, 14, 0.3) 50%, rgba(20, 27, 14, 0.1) 100%),
                  url("${slide.image}")
                `
              }}
            />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Animated Content */}
            <div className="space-y-6">
              {/* Subtitle with animation */}
              <div 
                className={`transform transition-all duration-1000 delay-200 ${
                  currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                  ✨ {currentSlideData.subtitle}
                </div>
              </div>

              {/* Main Title with staggered animation */}
              <h1 
                className={`text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-lexend drop-shadow-lg transform transition-all duration-1000 delay-400 ${
                  currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                {currentSlideData.title}
              </h1>

              {/* Description with fade-in */}
              <p 
                className={`text-gray-200 text-lg sm:text-xl font-normal leading-relaxed drop-shadow max-w-2xl transform transition-all duration-1000 delay-600 ${
                  currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                {currentSlideData.description}
              </p>

              {/* Action Buttons with slide-in animation */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 transform transition-all duration-1000 delay-800 ${
                  currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <Link
                  to={currentSlideData.primaryButton.link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white text-lg font-bold rounded-full hover:bg-primary-700 hover:scale-105 transition-all duration-300 shadow-lg group"
                >
                  {currentSlideData.primaryButton.text}
                  <span className="material-symbols-outlined ml-2 group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                  to={currentSlideData.secondaryButton.link}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-bold rounded-full hover:bg-white/30 hover:scale-105 transition-all duration-300 border border-white/30 group"
                >
                  {currentSlideData.secondaryButton.text}
                  <span className="material-symbols-outlined ml-2 group-hover:rotate-12 transition-transform">info</span>
                </Link>
              </div>

              {/* Trust indicators with fade-in */}
              <div 
                className={`flex items-center gap-6 text-white/80 text-sm transform transition-all duration-1000 delay-1000 ${
                  currentSlide >= 0 ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-yellow-400">star</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-green-400">verified</span>
                  <span>Certified Practitioners</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-blue-400">group</span>
                  <span>10k+ Happy Customers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">chevron_left</span>
          </button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300 group"
            aria-label="Next slide"
          >
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-8 right-8 z-20">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          <span className="material-symbols-outlined">
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-primary-400 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default HeroSlider;

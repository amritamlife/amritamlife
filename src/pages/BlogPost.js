import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch the post data based on the slug
  const post = {
    id: 1,
    title: 'The Ancient Art of Ayurvedic Living',
    author: 'Dr. Priya Sharma',
    date: 'January 15, 2024',
    readTime: '8 min read',
    category: 'Traditional Wisdom',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    content: `
      <p class="text-lg">
        Ayurveda, the ancient Indian system of medicine, offers a holistic approach to health and well-being. 
        Rooted in the principles of balance and harmony, it emphasizes the interconnectedness of mind, body, and spirit. 
        This article explores the core tenets of Ayurvedic living, providing insights into how you can integrate its wisdom into your daily life.
      </p>

      <h2 class="text-2xl font-bold text-text-900 mt-8 mb-4">Understanding the Doshas</h2>
      <p>
        Central to Ayurveda is the concept of the three doshas: Vata, Pitta, and Kapha. These bio-energies govern our physical and mental characteristics. 
        Understanding your dominant dosha can help you tailor your diet, lifestyle, and self-care practices to achieve optimal health.
      </p>

      <h3 class="text-xl font-semibold text-text-900 mt-6 mb-3">Vata Dosha</h3>
      <p>
        Vata is associated with movement, creativity, and communication. When balanced, Vata individuals are energetic, creative, and adaptable. 
        When imbalanced, they may experience anxiety, insomnia, and digestive issues.
      </p>

      <h3 class="text-xl font-semibold text-text-900 mt-6 mb-3">Pitta Dosha</h3>
      <p>
        Pitta governs metabolism, digestion, and transformation. Balanced Pitta individuals are focused, intelligent, and goal-oriented. 
        Imbalanced Pitta can lead to anger, inflammation, and digestive problems.
      </p>

      <h3 class="text-xl font-semibold text-text-900 mt-6 mb-3">Kapha Dosha</h3>
      <p>
        Kapha provides structure, stability, and immunity. When balanced, Kapha individuals are calm, loving, and have strong immunity. 
        Imbalanced Kapha can result in lethargy, weight gain, and respiratory issues.
      </p>

      <h2 class="text-2xl font-bold text-text-900 mt-8 mb-4">Diet and Nutrition</h2>
      <p>
        Ayurvedic nutrition focuses on eating in accordance with your dosha and the seasons. It emphasizes whole, unprocessed foods, 
        and the use of spices and herbs to enhance digestion and balance the doshas. Learn about foods that are beneficial for each dosha 
        and how to create a personalized Ayurvedic diet.
      </p>

      <h2 class="text-2xl font-bold text-text-900 mt-8 mb-4">Lifestyle Practices</h2>
      <p>
        Ayurvedic living extends beyond diet to include daily routines (dinacharya) and seasonal practices (ritucharya). 
        These practices promote harmony with nature's rhythms and support overall well-being. Explore techniques such as yoga, 
        meditation, and mindful breathing to enhance your physical and mental health.
      </p>

      <h2 class="text-2xl font-bold text-text-900 mt-8 mb-4">Getting Started</h2>
      <p>
        Begin your Ayurvedic journey by identifying your dominant dosha through self-assessment or consultation with an Ayurvedic practitioner. 
        Start with simple changes like eating warm, cooked foods if you're Vata-dominant, or cooling foods if you're Pitta-dominant. 
        Remember, Ayurveda is about gradual, sustainable changes that honor your unique constitution.
      </p>
    `,
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'Yoga for Beginners',
      description: 'A guide to starting your yoga journey.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      title: 'The Benefits of Meditation',
      description: 'Explore the science-backed benefits of meditation.',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 4,
      title: 'Natural Remedies for Stress',
      description: 'Discover natural ways to manage stress.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center text-sm text-surface-600">
            <Link to="/blog" className="text-primary-600 hover:underline">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-text-900">{post.category}</span>
          </div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-text-900 font-newsreader leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-surface-600 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-sm">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <span>By {post.author}</span>
              </div>
              <span>|</span>
              <span>{post.date}</span>
              <span>|</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className="aspect-[2/1] w-full rounded-lg overflow-hidden shadow-medium mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <article className="prose prose-lg max-w-none text-surface-700 leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>

          {/* Share Buttons */}
          <div className="mt-12 pt-8 border-t border-surface-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-text-900 mb-2">Share this article</h3>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.56-.01-.188 0-.495.074-.754.371-.26.296-.99.968-.99 2.361 0 1.394 1.015 2.742 1.156 2.931.141.19 2.002 3.056 4.851 4.281.678.292 1.207.466 1.621.596.681.217 1.301.186 1.791.113.546-.082 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    </svg>
                    WhatsApp
                  </button>
                </div>
              </div>
              <div className="text-right">
                <button className="flex items-center gap-2 px-4 py-2 border border-surface-300 text-surface-700 rounded-lg hover:bg-surface-50 transition-colors">
                  <span className="material-symbols-outlined">bookmark_border</span>
                  Save Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-lg p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-bold text-xl">
                  {post.author.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-900 font-newsreader mb-2">
                  {post.author}
                </h3>
                <p className="text-surface-700 mb-4">
                  Dr. Priya Sharma is a certified Ayurvedic practitioner with over 20 years of experience in traditional Indian medicine. 
                  She specializes in holistic health and has helped thousands of people achieve balance through personalized Ayurvedic treatments.
                </p>
                <div className="flex gap-3">
                  <button className="text-primary-600 hover:text-primary-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </button>
                  <button className="text-primary-600 hover:text-primary-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-text-900 font-lexend mb-8 text-center">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <div key={relatedPost.id} className="group">
                <div className="bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow duration-300 overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-900 font-newsreader mb-2 group-hover:text-primary-600 transition-colors">
                      <Link to={`/blog/${relatedPost.id}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-surface-700 text-sm">
                      {relatedPost.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4 font-lexend">
            Get More Wellness Insights
          </h2>
          <p className="text-lg mb-8 text-primary-100">
            Subscribe to our newsletter for weekly articles on holistic health and wellness.
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

export default BlogPost;

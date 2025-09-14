import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"></path>
        </svg>
      ),
      title: 'Email',
      content: 'info@amritam.com',
      link: 'mailto:info@amritam.com',
    },
    {
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176Z"></path>
        </svg>
      ),
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
        </svg>
      ),
      title: 'Address',
      content: '123 Wellness Way, Harmony City, CA 91234',
      link: null,
    },
    {
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149.91,179.65,139.41,188,128,188S106.09,179.65,101.63,168Zm-4-16c-2.63-8.41-4.46-18.05-5.38-28h68.46c-.92,9.95-2.75,19.59-5.38,28Zm-1.16-44C96.75,99.64,98.68,89.33,101.63,80h52.74c2.95,9.33,4.88,19.64,5.16,28Zm6.32-48C107.09,48.35,117.59,40,128,40s20.91,8.35,25.37,20ZM40,128a87.61,87.61,0,0,1,9.8-40.24A88.86,88.86,0,0,1,72,65.1,87.5,87.5,0,0,1,128,40a87.5,87.5,0,0,1,56,25.1,88.86,88.86,0,0,1,22.2,22.66A87.61,87.61,0,0,1,216,128a87.61,87.61,0,0,1-9.8,40.24A88.86,88.86,0,0,1,184,190.9,87.5,87.5,0,0,1,128,216a87.5,87.5,0,0,1-56-25.1,88.86,88.86,0,0,1-22.2-22.66A87.61,87.61,0,0,1,40,128Z"></path>
        </svg>
      ),
      title: 'Business Hours',
      content: 'Mon-Fri: 9AM-6PM PST',
      link: null,
    },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@amritam_wellness',
      link: '#',
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      handle: 'Amritam Wellness',
      link: '#',
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
        </svg>
      ),
    },
    {
      name: 'WhatsApp',
      handle: '+1 (555) 123-4567',
      link: 'https://wa.me/15551234567',
      icon: (
        <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-surface-100">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-900 font-lexend mb-6">
            Contact Amritam
          </h1>
          <p className="text-lg leading-8 text-surface-700 max-w-2xl mx-auto">
            We're here to help! Reach out to us with any questions or feedback. Our team is dedicated to providing you with the support you need on your journey to holistic well-being.
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-medium p-8">
              <h2 className="text-2xl font-bold text-text-900 font-lexend mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-900 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="consultation">Wellness Consultation</option>
                      <option value="support">Customer Support</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-text-900 font-lexend mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                      <div className="text-primary-600 flex-shrink-0 mt-1">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-900 mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-surface-700 hover:text-primary-600 transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-surface-700">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-text-900 font-lexend mb-4">
                  Follow Us
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow">
                      <div className="text-primary-600">
                        {social.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-900">{social.name}</h4>
                        <a
                          href={social.link}
                          className="text-surface-700 hover:text-primary-600 transition-colors"
                        >
                          {social.handle}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-surface-100">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-surface-700">
              Find answers to common questions about our products and services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What makes Amritam products different from others?",
                answer: "Our products are rooted in traditional Indian wisdom and crafted using authentic, time-tested formulations. We combine ancient knowledge with modern quality standards to ensure effectiveness and safety."
              },
              {
                question: "Are your products organic and natural?",
                answer: "Yes, we prioritize organic and natural ingredients in all our products. We source from trusted suppliers and maintain strict quality control to ensure purity and authenticity."
              },
              {
                question: "Do you offer personalized wellness consultations?",
                answer: "Absolutely! Our certified practitioners offer personalized consultations to help you create a wellness plan tailored to your unique needs and constitution."
              },
              {
                question: "What is your shipping policy?",
                answer: "We offer free shipping on orders over $50 within the continental US. International shipping is available with rates calculated at checkout. Most orders are processed within 1-2 business days."
              },
              {
                question: "Can I return products if I'm not satisfied?",
                answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not completely satisfied with your purchase, you can return unopened products for a full refund."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-soft p-6">
                <h3 className="text-lg font-semibold text-text-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-surface-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
              Visit Our Wellness Center
            </h2>
            <p className="text-lg text-surface-700">
              Come experience our products and services in person at our wellness center.
            </p>
          </div>
          
          <div className="bg-surface-200 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="text-surface-500 mb-4">
                <svg fill="currentColor" height="48" viewBox="0 0 256 256" width="48" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
                  <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                </svg>
              </div>
              <p className="text-surface-600">Interactive map coming soon</p>
              <p className="text-sm text-surface-500 mt-2">123 Wellness Way, Harmony City, CA 91234</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

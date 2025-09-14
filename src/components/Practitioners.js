import React from 'react';

const Practitioners = ({ 
  title = "Meet Our Practitioners",
  subtitle = "Our team of certified professionals brings decades of combined experience in holistic health and wellness.",
  showTitle = true,
  className = ""
}) => {
  const practitioners = [
    {
      name: 'Dr. Priya Sharma',
      title: 'Lead Ayurvedic Practitioner',
      credentials: 'BAMS, MD (Ayurveda)',
      experience: '20+ years',
      image: 'https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specialties: ['Digestive Health', 'Women\'s Wellness', 'Stress Management']
    },
    {
      name: 'Raj Patel',
      title: 'Senior Yoga Instructor',
      credentials: 'RYT-500, Meditation Teacher',
      experience: '15+ years',
      image: 'https://plus.unsplash.com/premium_photo-1722889137160-c1ca17ae0084?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specialties: ['Hatha Yoga', 'Pranayama', 'Mindfulness']
    },
    {
      name: 'Anita Desai',
      title: 'Wellness Coach & Nutritionist',
      credentials: 'RD, CWC',
      experience: '12+ years',
      image: 'https://images.unsplash.com/photo-1591980896142-4e36328411ec?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      specialties: ['Plant-Based Nutrition', 'Weight Management', 'Lifestyle Coaching']
    }
  ];

  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-surface-50 ${className}`}>
      <div className="container mx-auto max-w-6xl">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-900 font-lexend mb-4">
              {title}
            </h2>
            <p className="text-lg text-surface-700 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practitioners.map((practitioner, index) => (
            <div key={index} className="bg-white rounded-lg shadow-soft p-6 text-center hover:shadow-md transition-shadow">
              <img
                src={practitioner.image}
                alt={practitioner.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-primary-100"
              />
              <h3 className="text-xl font-bold text-text-900 font-lexend mb-1">
                {practitioner.name}
              </h3>
              <p className="text-primary-600 font-medium mb-2">
                {practitioner.title}
              </p>
              <p className="text-surface-600 text-sm mb-3">
                {practitioner.credentials} • {practitioner.experience}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                {practitioner.specialties.map((specialty, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-surface-100 text-surface-700 text-xs rounded-full hover:bg-primary-100 hover:text-primary-700 transition-colors"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practitioners;

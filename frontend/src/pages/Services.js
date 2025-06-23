import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: 'Local Moving',
      description: 'Professional local moves within Manchester and surrounding areas. We handle everything from single items to entire households with care and efficiency.',
      features: ['Same-day service available', 'Trained professional movers', 'All equipment provided', 'Competitive hourly rates'],
      icon: '🏠',
      image: 'https://images.pexels.com/photos/7464684/pexels-photo-7464684.jpeg'
    },
    {
      title: 'Courier Services',
      description: 'Fast and reliable courier services for documents, packages, and small items across Manchester and the UK.',
      features: ['Same-day delivery', 'Tracked and insured', 'Flexible pickup times', 'Secure handling'],
      icon: '📦',
      image: 'https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg'
    },
    {
      title: 'Cross-Country Moving',
      description: 'Reliable moving services across England, Scotland, Wales, and Northern Ireland with full logistics support.',
      features: ['Nationwide coverage', 'Planned logistics', 'Secure transport', 'Tracking updates'],
      icon: '🗺️',
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b'
    },
    {
      title: 'Long-Distance Moving',
      description: 'Specialized long-distance moving services with careful planning and execution for moves over 100 miles.',
      features: ['Pre-move planning', 'Secure packing', 'GPS tracking', 'Timely delivery'],
      icon: '🚛',
      image: 'https://images.unsplash.com/photo-1606492775219-7babadc15e83'
    },
    {
      title: 'Relocation Services',
      description: 'Complete relocation packages for families and businesses, including packing, moving, and setup services.',
      features: ['Full-service packages', 'Corporate relocations', 'Temporary storage', 'Setup assistance'],
      icon: '🏢',
      image: 'https://images.pexels.com/photos/7464721/pexels-photo-7464721.jpeg'
    },
    {
      title: 'Cleaning Services',
      description: 'Professional end-of-tenancy and post-move cleaning services to ensure your old and new properties are spotless.',
      features: ['Deep cleaning', 'End-of-tenancy cleaning', 'Post-move cleanup', 'Eco-friendly products'],
      icon: '🧽',
      image: 'https://images.unsplash.com/photo-1694715669993-ea0022b470f7'
    },
    {
      title: 'Moving Supplies',
      description: 'High-quality moving supplies including boxes, tape, bubble wrap, and protective materials delivered to your door.',
      features: ['Quality materials', 'Various box sizes', 'Protective packaging', 'Delivery available'],
      icon: '📋',
      image: 'https://images.unsplash.com/photo-1663625318264-695d2d04f11a'
    },
    {
      title: 'Full-Service Moving',
      description: 'Comprehensive moving solution where we handle everything from packing to unpacking in your new home.',
      features: ['Complete packing service', 'Professional unpacking', 'Furniture assembly', 'Room organization'],
      icon: '✨',
      image: 'https://images.pexels.com/photos/7464713/pexels-photo-7464713.jpeg'
    },
    {
      title: 'Student Moves',
      description: 'Affordable and flexible moving solutions specifically designed for students moving to and from university.',
      features: ['Student discounts', 'Flexible scheduling', 'Small load specialists', 'University area expertise'],
      icon: '🎓',
      image: 'https://images.pexels.com/photos/6981085/pexels-photo-6981085.jpeg'
    },
    {
      title: 'Furniture Delivery',
      description: 'Safe and secure furniture delivery and setup services for new purchases or relocating specific items.',
      features: ['Assembly service', 'Careful handling', 'Room placement', 'Protection guaranteed'],
      icon: '🪑',
      image: 'https://images.pexels.com/photos/7464713/pexels-photo-7464713.jpeg'
    },
    {
      title: 'Hourly Van & Man Hire',
      description: 'Flexible hourly hire service for various moving tasks, helping hands, and transportation needs.',
      features: ['Flexible hourly rates', 'Professional drivers', 'Various van sizes', 'Additional helpers available'],
      icon: '⏰',
      image: 'https://images.pexels.com/photos/7464721/pexels-photo-7464721.jpeg'
    },
    {
      title: 'Packing Services',
      description: 'Professional packing services using high-quality materials to ensure your belongings are protected during transit.',
      features: ['Expert packing', 'Quality materials', 'Fragile item specialists', 'Unpacking service'],
      icon: '📦',
      image: 'https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            Comprehensive moving and logistics solutions tailored to your specific needs. 
            From local moves to nationwide relocations, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-48 md:h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center mb-4">
                      <span className="text-4xl mr-4">{service.icon}</span>
                      <h3 className="text-2xl font-bold text-green-800">{service.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <span className="text-orange-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/quote"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg inline-block"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We proudly serve Manchester and surrounding areas with reliable moving services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              'Manchester', 'Salford', 'Stockport', 'Oldham', 'Rochdale', 'Bolton',
              'Bury', 'Wigan', 'Trafford', 'Tameside', 'Altrincham', 'Cheadle'
            ].map((area, index) => (
              <div 
                key={index}
                className="bg-green-50 hover:bg-green-100 rounded-lg p-4 transition-colors duration-200"
              >
                <span className="text-green-800 font-semibold">{area}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">Don't see your area listed? We may still be able to help!</p>
            <Link
              to="/contact"
              className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Contact us today for a free, no-obligation quote tailored to your specific moving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              Get Free Quote
            </Link>
            <a
              href="https://wa.me/447123456789"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
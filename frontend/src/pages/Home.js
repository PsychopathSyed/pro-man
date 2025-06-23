import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      title: 'Local Moving',
      description: 'Professional local moves within Manchester and surrounding areas.',
      icon: '🏠',
      image: 'https://images.pexels.com/photos/7464684/pexels-photo-7464684.jpeg'
    },
    {
      title: 'Long-Distance Moving',
      description: 'Reliable long-distance moving services across the UK.',
      icon: '🚛',
      image: 'https://images.unsplash.com/photo-1600518464441-9154a4dea21b'
    },
    {
      title: 'Student Moves',
      description: 'Affordable moving solutions tailored for students.',
      icon: '🎓',
      image: 'https://images.pexels.com/photos/6981085/pexels-photo-6981085.jpeg'
    },
    {
      title: 'Furniture Delivery',
      description: 'Safe and secure furniture delivery and setup services.',
      icon: '🪑',
      image: 'https://images.pexels.com/photos/7464713/pexels-photo-7464713.jpeg'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Absolutely fantastic service! The team was professional, punctual, and handled our belongings with great care.',
      location: 'Manchester'
    },
    {
      name: 'David Smith',
      rating: 5,
      text: 'Best moving company in Manchester! Fair pricing and excellent customer service. Highly recommended!',
      location: 'Salford'
    },
    {
      name: 'Emma Williams',
      rating: 5,
      text: 'Made our house move stress-free. The team went above and beyond to ensure everything was perfect.',
      location: 'Stockport'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.85), rgba(45, 80, 22, 0.85)), url('https://images.pexels.com/photos/7464721/pexels-photo-7464721.jpeg')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-green-800/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 py-20">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Manchester's
            <span className="block text-orange-400">Trusted Movers</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Professional, reliable, and affordable moving services. From local moves to long-distance relocations, 
            we handle your belongings with care and precision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-orange-500/25"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+447123456789"
              className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              📞 Call Now
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">5★</div>
              <div className="text-green-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-green-100">Support Available</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive moving solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-green-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    to="/services"
                    className="text-orange-500 hover:text-orange-600 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Why Choose Pro Man and Van?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're not just another moving company - we're your trusted moving partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Fast & Efficient</h3>
              <p className="text-gray-600 leading-relaxed">
                Quick response times and efficient moving processes to get you settled in your new home faster.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Fully Insured</h3>
              <p className="text-gray-600 leading-relaxed">
                Complete insurance coverage for your peace of mind. Your belongings are protected every step of the way.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Fair Pricing</h3>
              <p className="text-gray-600 leading-relaxed">
                Transparent, competitive pricing with no hidden fees. Get the best value for professional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-800 font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-green-800">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Move?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Get your free, no-obligation quote today and experience the Pro Man and Van difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
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

export default Home;
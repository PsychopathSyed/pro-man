import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Reliability',
      description: 'We show up on time, every time, and deliver on our promises with consistent, dependable service.',
      icon: '🤝'
    },
    {
      title: 'Professionalism',
      description: 'Our trained team treats your belongings and your home with the utmost respect and care.',
      icon: '👔'
    },
    {
      title: 'Transparency',
      description: 'No hidden fees, no surprises. We provide clear, upfront pricing and honest communication.',
      icon: '💎'
    },
    {
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We go above and beyond to exceed your expectations.',
      icon: '⭐'
    }
  ];

  const team = [
    {
      name: 'Mike Thompson',
      role: 'Founder & Operations Manager',
      experience: '10+ years in logistics',
      image: 'https://images.unsplash.com/photo-1606492775219-7babadc15e83'
    },
    {
      name: 'Sarah Davies',
      role: 'Customer Service Manager',
      experience: '8+ years in customer relations',
      image: 'https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg'
    },
    {
      name: 'James Wilson',
      role: 'Lead Moving Specialist',
      experience: '12+ years in moving services',
      image: 'https://images.pexels.com/photos/7464684/pexels-photo-7464684.jpeg'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.85), rgba(45, 80, 22, 0.85)), url('https://images.pexels.com/photos/7464721/pexels-photo-7464721.jpeg')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">About Pro Man and Van</h1>
          <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            Manchester's trusted moving partner, dedicated to making your relocation 
            stress-free and seamless since 2015.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2015 by Mike Thompson, Pro Man and Van began as a small local moving 
                  service with a simple mission: to provide reliable, professional, and affordable 
                  moving services to the people of Manchester.
                </p>
                <p>
                  What started as a single van operation has grown into Manchester's most trusted 
                  moving company, serving hundreds of satisfied customers across Greater Manchester 
                  and beyond. Our success is built on the foundation of treating every move as if 
                  it were our own.
                </p>
                <p>
                  Today, we're proud to be a fully licensed and insured moving company with a team 
                  of experienced professionals who share our commitment to excellence. We've helped 
                  families, students, and businesses make their moves smooth and stress-free.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/7464687/pexels-photo-7464687.jpeg" 
                alt="Pro Man and Van team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-orange-100">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and shape how we serve our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:-translate-y-2"
              >
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The experienced professionals who make your move possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                  />
                  <div className="absolute inset-0 w-48 h-48 rounded-full mx-auto bg-green-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Stats */}
      <section className="py-20 bg-gradient-to-br from-green-800 to-green-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">By the Numbers</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-green-100">Successful Moves</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">8</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">5★</div>
              <div className="text-green-100">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-green-100">Insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Licensed & Insured</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your peace of mind is our priority
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Fully Insured</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive insurance coverage protects your belongings throughout the entire moving process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📋</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Licensed Operators</h3>
              <p className="text-gray-600 leading-relaxed">
                All our drivers and movers are properly licensed and trained to handle your move professionally.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600 leading-relaxed">
                We stand behind our work with a satisfaction guarantee on all our moving services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Join hundreds of satisfied customers who chose Pro Man and Van for their moving needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/quote"
              className="bg-white hover:bg-gray-100 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              Get Your Free Quote
            </Link>
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-xl"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
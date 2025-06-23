import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Thank you for your message! We\'ll get back to you within 2 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      title: 'Phone',
      details: '0712 345 6789',
      icon: '📞',
      link: 'tel:+447123456789',
      description: 'Call us for immediate assistance'
    },
    {
      title: 'Email',
      details: 'info@promanandvan.co.uk',
      icon: '✉️',
      link: 'mailto:info@promanandvan.co.uk',
      description: 'Email us your questions'
    },
    {
      title: 'WhatsApp',
      details: 'Chat with us instantly',
      icon: '💬',
      link: 'https://wa.me/447123456789',
      description: 'Quick response guaranteed'
    },
    {
      title: 'Service Area',
      details: 'Greater Manchester & UK',
      icon: '📍',
      link: '#',
      description: 'We cover a wide area'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 8:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Emergency Service', hours: '24/7 Available' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(45, 80, 22, 0.85), rgba(45, 80, 22, 0.85)), url('https://images.unsplash.com/photo-1747994569829-6cae00826a75')`
        }}
      >
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            Get in touch with Manchester's most trusted moving company. 
            We're here to help with all your moving needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Multiple ways to reach us - choose what's most convenient for you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <a 
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                    <span className="text-4xl">{info.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">{info.title}</h3>
                  <p className="text-lg text-orange-600 font-semibold mb-2">{info.details}</p>
                  <p className="text-gray-600">{info.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-green-800 mb-6">Send us a Message</h3>
              
              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Select a service</option>
                    <option value="local-moving">Local Moving</option>
                    <option value="long-distance">Long-Distance Moving</option>
                    <option value="student-moves">Student Moves</option>
                    <option value="furniture-delivery">Furniture Delivery</option>
                    <option value="packing-services">Packing Services</option>
                    <option value="full-service">Full-Service Moving</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Tell us about your moving needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Business Hours & Manchester Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold text-green-800 mb-6">Business Hours</h3>
                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                      <span className="font-semibold text-gray-700">{schedule.day}</span>
                      <span className="text-green-800 font-semibold">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-orange-800 font-semibold">⚡ Emergency moves available 24/7</p>
                  <p className="text-orange-700 text-sm mt-1">Additional charges may apply for after-hours service</p>
                </div>
              </div>

              {/* Manchester Service Area */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-3xl font-bold text-green-800 mb-6">Service Area</h3>
                <div 
                  className="w-full h-64 bg-cover bg-center rounded-lg mb-6"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1747994569497-3073bb5b235b')`
                  }}
                ></div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We proudly serve Manchester and all surrounding areas including Salford, Stockport, 
                  Oldham, Rochdale, Bolton, and beyond.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  <div>• Manchester City Centre</div>
                  <div>• Salford</div>
                  <div>• Stockport</div>
                  <div>• Oldham</div>
                  <div>• Rochdale</div>
                  <div>• Bolton</div>
                  <div>• Bury</div>
                  <div>• Wigan</div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-green-800 to-green-900 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-green-100 mb-6">
                  For urgent moving needs or same-day service, contact us directly:
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+447123456789"
                    className="flex items-center space-x-3 text-lg hover:text-orange-300 transition-colors"
                  >
                    <span>📞</span>
                    <span>0712 345 6789</span>
                  </a>
                  <a 
                    href="https://wa.me/447123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-lg hover:text-orange-300 transition-colors"
                  >
                    <span>💬</span>
                    <span>WhatsApp Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
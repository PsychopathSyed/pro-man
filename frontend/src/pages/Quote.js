import React, { useState } from 'react';

const Quote = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
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
      setSubmitMessage('Thank you! We\'ll send you a detailed quote within 2 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const benefits = [
    {
      title: 'Free Estimates',
      description: 'No obligation quotes with transparent pricing',
      icon: '💰'
    },
    {
      title: 'Quick Response',
      description: 'Get your quote within 2 hours',
      icon: '⚡'
    },
    {
      title: 'Flexible Scheduling',
      description: 'We work around your schedule',
      icon: '📅'
    },
    {
      title: 'Expert Advice',
      description: 'Professional guidance for your move',
      icon: '🎯'
    }
  ];

  const pricingFactors = [
    {
      factor: 'Distance',
      description: 'Local moves vs. long-distance relocations'
    },
    {
      factor: 'Size of Move',
      description: 'Number of rooms and volume of belongings'
    },
    {
      factor: 'Services Required',
      description: 'Packing, loading, storage, and additional services'
    },
    {
      factor: 'Timing',
      description: 'Moving date and time preferences'
    },
    {
      factor: 'Access',
      description: 'Stairs, elevators, and parking considerations'
    },
    {
      factor: 'Special Items',
      description: 'Pianos, artwork, and fragile items'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 py-20">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get Your Free Quote</h1>
          <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
            No hidden fees, no surprises. Get a transparent, competitive quote 
            for your moving needs in just a few minutes.
          </p>
        </div>
      </section>

      {/* Quote Form & Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Quote Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-green-800 mb-4">Request Your Quote</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you with a detailed estimate.</p>
              </div>

              {submitMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
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

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Moving Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please provide details about your move: 
• Moving from and to (addresses or areas)
• Moving date (preferred/flexible)
• Size of property (e.g., 2-bedroom flat)
• Special items (piano, fragile items, etc.)
• Additional services needed (packing, storage, etc.)
• Any specific requirements or concerns"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  {isSubmitting ? 'Submitting...' : 'Get My Free Quote'}
                </button>

                <p className="text-center text-sm text-gray-600">
                  We typically respond within 2 hours during business hours
                </p>
              </form>
            </div>

            {/* Benefits & Info */}
            <div className="space-y-8">
              {/* Why Choose Our Quotes */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">Why Our Quotes?</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">{benefit.icon}</span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Factors */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-green-800 mb-6">What Affects Your Quote?</h3>
                <div className="space-y-4">
                  {pricingFactors.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-green-800">{item.factor}</h4>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Contact */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need an Immediate Quote?</h3>
                <p className="text-orange-100 mb-6">
                  For urgent moves or complex requirements, speak to our experts directly:
                </p>
                <div className="space-y-4">
                  <a 
                    href="tel:+447123456789"
                    className="flex items-center space-x-3 text-lg hover:text-orange-200 transition-colors bg-white/20 rounded-lg p-3"
                  >
                    <span>📞</span>
                    <div>
                      <div className="font-semibold">Call: 0712 345 6789</div>
                      <div className="text-sm text-orange-100">Instant phone consultation</div>
                    </div>
                  </a>
                  <a 
                    href="https://wa.me/447123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-lg hover:text-orange-200 transition-colors bg-white/20 rounded-lg p-3"
                  >
                    <span>💬</span>
                    <div>
                      <div className="font-semibold">WhatsApp Chat</div>
                      <div className="text-sm text-orange-100">Quick response guaranteed</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">Sample Pricing Guide</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get an idea of our competitive rates. Final prices depend on specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Local Moves</h3>
              <div className="text-3xl font-bold text-orange-500 mb-2">From £25/hr</div>
              <p className="text-gray-600 mb-6">For moves within Manchester area</p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>✓ Professional movers</li>
                <li>✓ Van and equipment included</li>
                <li>✓ Minimum 2-hour booking</li>
                <li>✓ Same-day availability</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8 text-center border-2 border-orange-200 hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Long Distance</h3>
              <div className="text-3xl font-bold text-orange-500 mb-2">From £150</div>
              <p className="text-gray-600 mb-6">For moves over 50 miles</p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>✓ Fixed price quotes</li>
                <li>✓ Insured transport</li>
                <li>✓ Planned logistics</li>
                <li>✓ Flexible scheduling</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Full Service</h3>
              <div className="text-3xl font-bold text-orange-500 mb-2">Quote Based</div>
              <p className="text-gray-600 mb-6">Complete moving solutions</p>
              <ul className="text-left space-y-2 text-sm text-gray-600">
                <li>✓ Packing & unpacking</li>
                <li>✓ Furniture assembly</li>
                <li>✓ Cleaning services</li>
                <li>✓ Storage options</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              * Prices shown are starting rates. Final quotes depend on specific requirements, 
              distance, timing, and additional services needed.
            </p>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="https://wa.me/447123456789"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center space-x-2"
        >
          <span className="text-2xl">💬</span>
          <span className="hidden sm:inline font-semibold">WhatsApp Quote</span>
        </a>
      </div>
    </div>
  );
};

export default Quote;
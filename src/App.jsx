import React, { useState } from 'react';
import { ChevronDown, BarChart2, Mail, Users, HardDrive, Phone, Home, CheckCircle, Quote, Rocket, Package, Globe, DollarSign, ChevronRight, ChevronLeft, X } from 'lucide-react';
// The hero image path is relative to the component, so it needs to be imported
import hero from './assets/hero_img.jpg';
import logo from './assets/logisti.svg'
import image from './assets/img1.jpeg'

const App = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [activeSection, setActiveSection] = useState('hero');
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Form states for Signup and Login
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [signupErrors, setSignupErrors] = useState({});
  const [loginErrors, setLoginErrors] = useState({});

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  // Testimonial slider functions
  const handlePrevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Form validation and submission logic
  const validateSignup = () => {
    const errors = {};
    if (!signupForm.name) {
      errors.name = 'Full Name is required';
    }
    if (!signupForm.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(signupForm.email)) {
      errors.email = 'Invalid email address';
    }
    if (!signupForm.password) {
      errors.password = 'Password is required';
    } else if (signupForm.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (!signupForm.confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required';
    } else if (signupForm.confirmPassword !== signupForm.password) {
      errors.confirmPassword = 'Passwords must match';
    }
    setSignupErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (validateSignup()) {
      console.log('Signup successful:', signupForm);
      // Navigate back to the hero section
      handleNavClick('hero');
    }
  };

  const validateLogin = () => {
    const errors = {};
    if (!loginForm.email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(loginForm.email)) {
      errors.email = 'Invalid email address';
    }
    if (!loginForm.password) {
      errors.password = 'Password is required';
    }
    setLoginErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (validateLogin()) {
      console.log('Login successful:', loginForm);
      // Navigate back to the hero section
      handleNavClick('hero');
    }
  };

  const faqs = [
    { question: 'What is Logistics?', answer: 'Logistics is the overall process of managing how resources are acquired, stored, and transported to their final destination. It involves the identification of prospective distributors and suppliers and determining their effectiveness and accessibility. It can be defined as having the right item in the right quantity at the right time at the right place for the right price in the right condition to the right customer.' },
    { question: 'What is a B2B logistics?', answer: 'Business-to-business (B2B) logistics refers to the movement of goods from one business to another. This is typically done through a third-party logistics company (3PL).' },
    { question: 'Why is it important?', answer: 'Logistics is important for businesses for several reasons. First, it ensures that products are delivered to customers on time. Second, it helps businesses save money by optimizing their supply chain. Third, it allows businesses to track their inventory and shipments in real-time. ' },
    { question: 'How is it managed?', answer: 'Logistics management is the part of supply chain management that plans, implements, and controls the efficient, effective forward and reverse flow and storage of goods, services, and related information between the point of origin and the point of consumption in order to meet customers\' requirements.' },
  ];

  const services = [
    { title: 'Project Cargo', icon: <Package size={24} />, description: 'We provide end-to-end logistics solutions for large-scale, complex projects, ensuring timely and secure delivery.' },
    { title: 'Air Freight', icon: <Rocket size={24} />, description: 'Expedited air freight services for time-sensitive shipments, with global network coverage and competitive rates.' },
    { title: 'Ocean Freight', icon: <Globe size={24} />, description: 'Reliable and cost-effective ocean freight services for international shipments of all sizes and types.' },
    { title: 'Road Freight', icon: <HardDrive size={24} />, description: 'Efficient and flexible road freight solutions for domestic and cross-border transportation.' },
  ];

  const projects = [
    {
      title: 'Global Supply Chain Optimization',
      images: [{image}],
      description: 'Streamlined international supply chains for a multinational corporation, reducing lead times and costs by 20%.',
    },
    {
      title: 'Last-Mile Delivery Solution',
      images: [{image}],
      description: 'Developed a custom last-mile delivery system for a retail giant, enhancing customer satisfaction and delivery speed.',
    },
    {
      title: 'Temperature-Controlled Logistics',
      images: [{image}],
      description: 'Implemented a new fleet of refrigerated trucks and real-time monitoring to ensure the integrity of pharmaceutical goods.',
    },
  ];

  const testimonials = [
    { quote: "Our supply chain has never been more efficient. The team is professional and always one step ahead. Highly recommend their services!", author: "Jane Doe, CEO", image: "https://placehold.co/100x100/00f59b/000000?text=JD" },
    { quote: "Their project cargo team handled our oversized equipment with ease. The communication was excellent from start to finish.", author: "John Smith, Project Manager", image: "https://placehold.co/100x100/00f59b/000000?text=JS" },
    { quote: "We trust them with all our international shipments. They consistently provide competitive rates and reliable delivery times.", author: "Mary Johnson, Founder", image: "https://placehold.co/100x100/00f59b/000000?text=MJ" },
  ];

  const teamMembers = [
    { name: "Okafor John", title: "Chief Executive Officer", image: "https://placehold.co/200x200/00f59b/000000?text=Okafor John" },
    { name: "Okafor Christopher", title: "Chief Operating Officer", image: "https://placehold.co/200x200/00f59b/000000?text=Okafor Christopher" },
    { name: "Jensen Huang", title: "Head of Logistics", image: "https://placehold.co/200x200/00f59b/000000?text= Jensen" },
  ];

  const pricingPlans = {
    monthly: [
      { name: "Starter", price: "$50", features: ["1 Project", "50GB Storage", "Basic Analytics", "24/7 Support"] },
      { name: "Professional", price: "$80", features: ["3 Projects", "150GB Storage", "Advanced Analytics", "24/7 Support"] },
      { name: "Business", price: "$120", features: ["Unlimited Projects", "500GB Storage", "Custom Analytics", "Priority Support"] }
    ],
    annually: [
      { name: "Starter", price: "$400", features: ["1 Project", "50GB Storage", "Basic Analytics", "24/7 Support"] },
      { name: "Professional", price: "$800", features: ["3 Projects", "150GB Storage", "Advanced Analytics", "24/7 Support"] },
      { name: "Business", price: "$1000", features: ["Unlimited Projects", "500GB Storage", "Custom Analytics", "Priority Support"] }
    ]
  };

  const currentPlans = pricingPlans[selectedPlan];

  return (
    <div className="bg-[#0a0a0a] text-white font-sans overflow-x-hidden">
      {/* Navbar Section */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#00f59b]/100 backdrop-blur-sm p-4 md:p-6 shadow-xl">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            {/* Space for the logo */}
            <div className="w-8 h-8"><img src= {logo} alt="" /></div>
            <div className="text-xl md:text-2xl font-bold">
              <button onClick={() => handleNavClick('hero')} className="text-[#00f59b] hover:text-white transition-colors duration-300">Logisti</button>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 text-sm items-center">
            <button onClick={() => handleNavClick('hero')} className="text-black hover:text-[#ffffff] transition-colors duration-300">Home</button>
            <button onClick={() => handleNavClick('services')} className="text-black hover:text-[#ffffff] transition-colors duration-300">Services</button>
            <button onClick={() => handleNavClick('projects')} className="text-black hover:text-[#ffffff] transition-colors duration-300">Projects</button>
            <button onClick={() => handleNavClick('team')} className="text-black hover:text-[#ffffff] transition-colors duration-300">Team</button>
            <button onClick={() => handleNavClick('pricing')} className="text-black hover:text-[#ffffff] transition-colors duration-300">Pricing</button>
            <button onClick={() => handleNavClick('faq')} className="text-black hover:text-[#ffffff] transition-colors duration-300">FAQ</button>
            <button onClick={() => handleNavClick('contact')} className="text-black hover:text-[#ffffff] transition-colors duration-300">Contact</button>
            {/* Sign Up CTA */}
            <button
              onClick={() => handleNavClick('signup')}
              className="bg-[#000000] text-white px-4 py-2 rounded-md font-semibold hover:bg-white hover:text-[#00f59b] transition-colors duration-300"
            >
              Sign Up
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0a0a] p-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleNavClick('hero')} className="text-white text-left hover:text-[#00f59b] transition-colors duration-300">Home</button>
              <button onClick={() => handleNavClick('services')} className="text-white text-left hover:text-[#00f59b] transition-colors duration-300">Services</button>
              <button onClick={() => handleNavClick('projects')} className="text-white text-left hover:text-[#00f59b] transition-colors duration-300">Projects</button>
              <button onClick={() => handleNavClick('team')} className="text-white text-left hover:text-[#00f59b] transition-colors duration-300">Team</button>
              <button onClick={() => handleNavClick('pricing')} className="text-white text-left hover:text-[#00f59b] transition-colors duration-300">Pricing</button>
              <button onClick={() => handleNavClick('faq')} className="text-white text-left hover:text-[#00f59b] transition-colors duration-300">FAQ</button>
              <button onClick={() => handleNavClick('contact')} className="text-white text-left hover:text-[#00f59b] transition-colors duration-300">Contact</button>
              <button
                onClick={() => handleNavClick('signup')}
                className="w-full text-left bg-[#00f59b] text-black px-4 py-2 rounded-md font-semibold hover:bg-white transition-colors duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-24 md:pt-32">
        {activeSection === 'hero' && (
          <section id="hero" className="relative container m-auto px-4 py-16 md:py-32 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-left mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Make Your <br /> Business <br /><span className="text-[#00f59b]">More Powerful</span> <br /> With Us</h1>
              <p className="text-gray-400 text-lg md:text-xl mb-6">
                We are a team of experienced logistics professionals dedicated to providing innovative solutions that help your business thrive in the global market.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button onClick={() => handleNavClick('projects')} className="bg-transparent ring-2 ring-[#00f59b] text-[#00f59b] font-semibold py-3 px-6 rounded-md hover:bg-[#00f59b] hover:px-8 hover:text-black ease-in-out duration-300 shadow-lg flex items-center justify-center">
                  View Project <ChevronRight size={16} className="ml-2"/>
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center md:justify-end relative">
              <img src={hero} alt="Logistics team" className="rounded-xl shadow-2xl z-10"/>
            </div>
          </section>
        )}

        {activeSection === 'services' && (
          <section id="services" className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Expertise Services We're Offering</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We provide professional logistics solutions that are tailored to your business needs, ensuring efficiency and reliability.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-[#1a1a1a] p-8 rounded-xl shadow-xl hover:bg-[#222222] transition-colors duration-300 transform hover:scale-105">
                  <div className="bg-[#00f59b] p-4 rounded-full w-fit mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section id="projects" className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Projects</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our successful projects showcase our ability to handle complex logistics challenges with precision and expertise.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden group hover:bg-[#222222] transition-colors duration-300">
                  <img src={project.images[0]} alt={project.title} className="w-full h-48 object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-110"/>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                    <a href="#" className="flex items-center text-[#00f59b] mt-4 font-semibold hover:underline transition-colors duration-300">
                      Learn More <ChevronRight size={16} className="ml-1"/>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'team' && (
          <section id="team" className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                A team of dedicated professionals who are passionate about providing the best logistics services.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover mb-4 border-4 border-[#00f59b] transform hover:scale-105 transition-transform duration-300"/>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-[#00f59b]">{member.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="testimonials" className="container mx-auto px-4 py-16 md:py-24">
          <div className="relative bg-[#1a1a1a] rounded-xl p-8 md:p-12 shadow-xl">
            <Quote size={48} className="text-[#00f59b] opacity-20 absolute top-4 left-4" />
            <div className="grid lg:grid-cols-2 items-center gap-8">
              <div className="relative text-left pr-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2">What Our Happy Customers Say</h2>
                <p className="text-gray-400 mb-6">
                  We take immense pride in the satisfaction of our clients, and their testimonials speak volumes about our commitment to excellence.
                </p>
                <div className="flex space-x-4">
                  <button onClick={handlePrevTestimonial} className="bg-[#00f59b] text-black p-3 rounded-full hover:bg-white transition-colors duration-300">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={handleNextTestimonial} className="bg-[#00f59b] text-black p-3 rounded-full hover:bg-white transition-colors duration-300">
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
              <div className="relative bg-[#00f59b] p-8 md:p-12 rounded-xl shadow-2xl text-black">
                <Quote size={24} className="absolute top-4 left-4" />
                <p className="italic text-lg mb-6">"{testimonials[currentTestimonialIndex].quote}"</p>
                <div className="flex items-center space-x-4">
                  <img src={testimonials[currentTestimonialIndex].image} alt={testimonials[currentTestimonialIndex].author} className="w-12 h-12 rounded-full border-2 border-black" />
                  <div>
                    <p className="font-semibold">{testimonials[currentTestimonialIndex].author}</p>
                    <p className="text-sm">Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {activeSection === 'pricing' && (
          <section id="pricing" className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Choose a Plan That Works for You</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Our pricing plans are designed to be flexible and transparent, with options for every business size.
              </p>
              <div className="flex justify-center mt-6">
                <div className="relative bg-[#1a1a1a] rounded-full p-1 flex items-center">
                  <button
                    onClick={() => setSelectedPlan('monthly')}
                    className={`py-2 px-6 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedPlan === 'monthly' ? 'bg-[#00f59b] text-black' : 'text-white'}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setSelectedPlan('annually')}
                    className={`py-2 px-6 rounded-full text-sm font-semibold transition-colors duration-300 ${selectedPlan === 'annually' ? 'bg-[#00f59b] text-black' : 'text-white'}`}
                  >
                    Annually
                  </button>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {currentPlans.map((plan, index) => (
                <div key={index} className={`bg-[#1a1a1a] rounded-xl p-8 shadow-xl border-2 border-transparent transition-all duration-300 ${index === 1 ? 'border-[#00f59b] transform scale-105' : ''}`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="bg-[#00f59b] text-black px-3 py-1 text-sm font-semibold rounded-full">
                      {index === 1 ? 'Popular' : 'Best Price'}
                    </div>
                  </div>
                  <div className="flex items-center mb-6">
                    <span className="text-5xl font-extrabold">{plan.price}</span>
                    <span className="text-gray-400 text-lg ml-2">/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle size={18} className="text-[#00f59b] mr-3 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-full font-semibold transition-colors duration-300 ${index === 1 ? 'bg-[#00f59b] text-black hover:bg-white' : 'bg-gray-800 text-white hover:bg-gray-700'}`}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'faq' && (
          <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">The Real Questions Asked</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Find answers to the most common questions about our logistics services and solutions.
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#1a1a1a] rounded-xl shadow-xl p-6">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center text-left text-lg font-semibold"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={24}
                      className={`transform transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {activeFaq === index && (
                    <p className="mt-4 text-gray-400">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
        
        {activeSection === 'contact' && (
          <section id="contact" className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Contact Us</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Get in touch with us for a consultation or to learn more about our services. We are here to help.
              </p>
            </div>
            <div className="max-w-xl mx-auto bg-[#1a1a1a] rounded-xl shadow-xl p-8 md:p-12">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full bg-gray-900 border-gray-700 rounded-md shadow-sm p-3 focus:ring-[#00f59b] focus:border-[#00f59b]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full bg-gray-900 border-gray-700 rounded-md shadow-sm p-3 focus:ring-[#00f59b] focus:border-[#00f59b]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                  <textarea id="message" name="message" rows="4" className="mt-1 block w-full bg-gray-900 border-gray-700 rounded-md shadow-sm p-3 focus:ring-[#00f59b] focus:border-[#00f59b]"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-full bg-[#00f59b] text-black font-semibold hover:bg-white transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </section>
        )}

        {activeSection === 'signup' && (
          <section className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <form onSubmit={handleSignupSubmit} className="bg-[#1a1a1a] p-8 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-white text-center mb-6">Create your account</h2>
                <div className="mb-4">
                  <label htmlFor="signup-name" className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="signup-name"
                    value={signupForm.name}
                    onChange={(e) => setSignupForm({ ...signupForm, name: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-900 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                  {signupErrors.name && <div className="text-red-500 text-sm mt-1">{signupErrors.name}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="signup-email"
                    value={signupForm.email}
                    onChange={(e) => setSignupForm({ ...signupForm, email: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-900 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                  {signupErrors.email && <div className="text-red-500 text-sm mt-1">{signupErrors.email}</div>}
                </div>
                <div className="mb-4">
                  <label htmlFor="signup-password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                  <input
                    type="password"
                    id="signup-password"
                    value={signupForm.password}
                    onChange={(e) => setSignupForm({ ...signupForm, password: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-900 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:border-transparent"
                    placeholder="Create a password"
                  />
                  {signupErrors.password && <div className="text-red-500 text-sm mt-1">{signupErrors.password}</div>}
                </div>
                <div className="mb-6">
                  <label htmlFor="signup-confirm-password" className="block text-sm font-medium text-gray-400 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    id="signup-confirm-password"
                    value={signupForm.confirmPassword}
                    onChange={(e) => setSignupForm({ ...signupForm, confirmPassword: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-900 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:border-transparent"
                    placeholder="Confirm your password"
                  />
                  {signupErrors.confirmPassword && <div className="text-red-500 text-sm mt-1">{signupErrors.confirmPassword}</div>}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-[#00f59b] text-black px-4 py-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:ring-offset-2 transition-colors cursor-pointer"
                  >
                    Sign Up
                  </button>
                  <button
                    onClick={() => handleNavClick('login')}
                    className="text-[#00f59b] hover:text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    Already have an account?
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}

        {activeSection === 'login' && (
          <section className="min-h-screen bg-[#0a0a0a] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <form onSubmit={handleLoginSubmit} className="bg-[#1a1a1a] p-8 shadow rounded-lg">
                <h2 className="text-2xl font-semibold text-white text-center mb-6">Log in to your account</h2>
                <div className="mb-4">
                  <label htmlFor="login-email" className="block text-sm font-medium text-gray-400 mb-1">Email</label>
                  <input
                    type="email"
                    id="login-email"
                    value={loginForm.email}
                    onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-900 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                  {loginErrors.email && <div className="text-red-500 text-sm mt-1">{loginErrors.email}</div>}
                </div>
                <div className="mb-6">
                  <label htmlFor="login-password" className="block text-sm font-medium text-gray-400 mb-1">Password</label>
                  <input
                    type="password"
                    id="login-password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="w-full px-3 py-2 bg-gray-900 border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:border-transparent"
                    placeholder="Enter your password"
                  />
                  {loginErrors.password && <div className="text-red-500 text-sm mt-1">{loginErrors.password}</div>}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-[#00f59b] text-black px-4 py-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#00f59b] focus:ring-offset-2 transition-colors cursor-pointer"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => handleNavClick('signup')}
                    className="text-[#00f59b] hover:text-white text-sm font-medium transition-colors cursor-pointer"
                  >
                    Create an account
                  </button>
                </div>
              </form>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-[#1a1a1a] py-12">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>&copy; 2024 Logisti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

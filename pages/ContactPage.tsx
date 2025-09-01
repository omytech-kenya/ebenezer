
import React, { useState } from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon } from '../components/icons/IconLibrary';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call)
    setFormStatus('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-secondary-navy sm:text-5xl">Get In Touch</h1>
          <p className="mt-4 text-xl text-gray-600">We'd love to hear from you. Please reach out with any questions or inquiries.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-primary-green mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <LocationMarkerIcon className="h-8 w-8 text-primary-green flex-shrink-0 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary-navy">Address</h3>
                  <p className="text-gray-700">Off Busia–Kisumu Road, Opp. Airstrip<br/>Busia, Kenya</p>
                </div>
              </div>
              <div className="flex items-start">
                <PhoneIcon className="h-8 w-8 text-primary-green flex-shrink-0 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary-navy">Phone</h3>
                  <p className="text-gray-700">+254 712 345 678</p>
                  <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:underline">Chat on WhatsApp</a>
                </div>
              </div>
              <div className="flex items-start">
                <MailIcon className="h-8 w-8 text-primary-green flex-shrink-0 mr-4" />
                <div>
                  <h3 className="text-lg font-semibold text-secondary-navy">Email</h3>
                  <p className="text-gray-700">info@ebenezeracademy.ac.ke</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-primary-green mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-green focus:border-primary-green border-gray-300 rounded-md" placeholder="Full Name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-green focus:border-primary-green border-gray-300 rounded-md" placeholder="Email Address" />
              </div>
               <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleInputChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-green focus:border-primary-green border-gray-300 rounded-md" placeholder="Subject" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} required className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-primary-green focus:border-primary-green border border-gray-300 rounded-md" placeholder="Your Message"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-green">
                  Submit Message
                </button>
              </div>
              {formStatus && <p className="text-center text-primary-green">{formStatus}</p>}
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-secondary-navy mb-8">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.664428801931!2d34.11394461475344!3d0.4616219996996659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781df5a54b69325%3A0xb1f22e89a690776!2sBusia%20Airstrip!5e0!3m2!1sen!2ske!4v1662991054714!5m2!1sen!2ske" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ebenezer Academy Location"
                ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

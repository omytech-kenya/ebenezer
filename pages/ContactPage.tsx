
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
      {/* Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/ebe2.png')" }}></div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Get In Touch</h1>
          <p className="mt-3 text-lg md:text-xl text-gray-200">We'd love to hear from you. Please reach out with any questions or inquiries.</p>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-black/5 shadow-sm">
            <h2 className="text-2xl font-semibold text-secondary-navy mb-6">Contact Information</h2>
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
              {/* Socials */}
              <div>
                <h3 className="text-lg font-semibold text-secondary-navy mb-3">Follow Us</h3>
                <div className="flex items-center gap-3">
                  <a href="#" aria-label="Facebook" className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow hover:ring-primary-green/40">
                    <svg className="h-5 w-5 text-secondary-navy group-hover:text-primary-green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12a10 10 0 1 0-11.57 9.87v-6.98H7.9V12h2.53V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.22.2 2.22.2v2.44h-1.25c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.98A10 10 0 0 0 22 12Z"/></svg>
                  </a>
                  <a href="#" aria-label="X" className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow hover:ring-primary-green/40">
                    <svg className="h-5 w-5 text-secondary-navy group-hover:text-primary-green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3 3h3.9l5.17 7.38L18.1 3H21l-7.41 10.23L21.5 21H17.6l-5.47-7.8L6.02 21H3l7.8-10.77L3 3Z"/></svg>
                  </a>
                  <a href="#" aria-label="Instagram" className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow hover:ring-primary-green/40">
                    <svg className="h-5 w-5 text-secondary-navy group-hover:text-primary-green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM17.5 6A1.5 1.5 0 1 1 16 7.5 1.5 1.5 0 0 1 17.5 6Z"/></svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-black/10 shadow hover:ring-primary-green/40">
                    <svg className="h-5 w-5 text-secondary-navy group-hover:text-primary-green" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM0 8h5v16H0V8Zm7.5 0h4.8v2.2h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.33 6 7.66V24h-5v-6.9c0-1.64-.03-3.74-2.28-3.74-2.28 0-2.63 1.78-2.63 3.62V24h-5V8Z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-secondary-navy mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl bg-white p-6 ring-1 ring-black/5 shadow-sm">
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
            <div className="relative rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/10 aspect-[16/9]">
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

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen">
      {/* --- HEADER SECTION --- */}
      <section className="bg-stone-900 pt-32 pb-20 px-6 text-center text-white">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="uppercase tracking-[0.4em] text-[10px] text-amber-500 font-bold mb-4 block"
        >
          Get In Touch
        </motion.span>
        <h1 className="text-4xl md:text-6xl font-serif italic mb-6">Contact Us</h1>
        <p className="text-stone-400 max-w-xl mx-auto font-sans text-sm leading-relaxed">
          Whether it's a table reservation, a private event, or just a quick hello, 
          we are here to make your experience exceptional.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 -mt-10 pb-24">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* --- CONTACT INFO CARDS --- */}
          <div className="lg:col-span-1 space-y-4">
            <ContactInfoCard 
              icon={<MapPin className="text-amber-600" />} 
              title="Our Location" 
              value="02, York Street, Colombo 01, Sri Lanka" 
            />
            <ContactInfoCard 
              icon={<Phone className="text-amber-600" />} 
              title="Reservations" 
              value="+94 11 234 5678" 
            />
            <ContactInfoCard 
              icon={<Mail className="text-amber-600" />} 
              title="General Inquiry" 
              value="hello@royaldine.lk" 
            />
            <ContactInfoCard 
              icon={<Clock className="text-amber-600" />} 
              title="Opening Hours" 
              value="Daily: 11:00 AM – 11:00 PM" 
            />
          </div>

          {/* --- CONTACT FORM --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-white shadow-xl p-8 md:p-12 rounded-sm border border-stone-100"
          >
            <h2 className="text-2xl font-serif mb-8 text-stone-800">Send us a Message</h2>
            <form className="grid md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
              <CustomField label="Full Name" placeholder="John Doe" />
              <CustomField label="Email Address" placeholder="john@example.com" type="email" />
              <div className="md:col-span-2">
                <CustomField label="Subject" placeholder="Reservation / Event / Feedback" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">Message</label>
                <textarea 
                  rows="5" 
                  className="w-full bg-stone-50 border border-stone-200 p-4 focus:border-amber-600 outline-none transition-all font-sans text-sm"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button className="w-full bg-stone-900 hover:bg-amber-700 text-white py-4 uppercase tracking-[0.2em] text-xs font-bold transition-all flex items-center justify-center gap-3">
                  Send Message <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* --- GOOGLE MAP EMBED --- */}
        <div className="mt-12 w-full h-[450px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden border border-stone-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.627349121404!2d79.843706175005!3d6.935086893065038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25916059d0685%3A0xe541460591f8f300!2sYork%20St%2C%20Colombo!5e0!3m2!1sen!2slk!4v1700000000000!5m2!1sen!2slk" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

// Reusable Contact Info Card Component
function ContactInfoCard({ icon, title, value }) {
  return (
    <div className="bg-white p-6 flex items-center gap-5 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-stone-50 rounded-full">{icon}</div>
      <div>
        <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{title}</p>
        <p className="text-stone-800 font-sans text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}

// Reusable Form Field Component
function CustomField({ label, placeholder, type = "text" }) {
  return (
    <div className="flex flex-col">
      <label className="text-[10px] uppercase tracking-widest font-bold text-stone-500 mb-2">{label}</label>
      <input 
        type={type} 
        placeholder={placeholder}
        className="bg-stone-50 border border-stone-200 px-4 py-3 focus:border-amber-600 outline-none transition-all font-sans text-sm"
      />
    </div>
  );
}
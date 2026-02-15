import React from "react";
import { motion } from "framer-motion";
import { Award, Users, Heart, Star, Clock, MapPin, Phone, Mail, Utensils, Wine, ChefHat, Sparkles } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import logo from "../assets/grandterrace-logo.jpeg";

export default function About() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Background */}
      <section className="relative py-24 px-6 overflow-hidden bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#6F4E37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B6239] rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block uppercase tracking-[0.4em] text-xs text-[#D4A574] font-bold mb-6 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm"
          >
            About Us
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">
            A Modern Heritage <br />
            <span className="text-[#D4A574]">Dining Concept</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Tell your story here — how the restaurant started, what you serve, and what guests should feel when they visit.
          </p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="bg-stone-900 text-white py-12 -mt-px">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award size={24} />, value: "15+", label: "Years Excellence" },
              { icon: <Users size={24} />, value: "10K+", label: "Happy Guests" },
              { icon: <Star size={24} />, value: "4.9/5", label: "Guest Rating" },
              { icon: <ChefHat size={24} />, value: "5", label: "Master Chefs" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center text-[#8B6239] mb-3">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-serif text-[#D4A574] mb-1">{stat.value}</div>
                <div className="text-sm text-stone-400 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#6F4E37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
                Where Tradition Meets <br />
                <span className="italic text-[#6F4E37]">Modern Excellence</span>
              </h2>
              <div className="w-20 h-1 bg-[#6F4E37] mb-8"></div>

              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                Replace this text with your real brand story. Keep it short, premium, and emotional: ambience, signature
                flavours, service philosophy, and what makes Grand Terrace unique.
              </p>

              <p className="text-stone-600 leading-relaxed mb-8">
                Tip: Add 3–5 key values (quality ingredients, craftsmanship, hospitality, atmosphere, and consistency).
              </p>

              {/* Key Values */}
              <div className="space-y-4">
                {[
                  { icon: <Sparkles size={20} />, title: "Quality Ingredients", desc: "Sourced fresh daily from local farms" },
                  { icon: <Heart size={20} />, title: "Exceptional Hospitality", desc: "Service that exceeds expectations" },
                  { icon: <ChefHat size={20} />, title: "Culinary Craftsmanship", desc: "Prepared by master chefs" },
                ].map((value, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 bg-stone-50 p-4 border-l-4 border-[#6F4E37]"
                  >
                    <div className="text-[#6F4E37] mt-1">{value.icon}</div>
                    <div>
                      <h4 className="font-bold text-stone-900 mb-1">{value.title}</h4>
                      <p className="text-sm text-stone-600">{value.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Logo & Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Logo Card */}
              <div className="bg-white shadow-2xl border border-stone-100 overflow-hidden">
                <div className="p-8">
                  <img
                    src={logo}
                    alt="Grand Terrace"
                    className="w-full rounded-lg border-2 border-stone-200 bg-white object-contain shadow-md"
                  />
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <Stat
                  icon={<Users size={20} />}
                  label="Seating"
                  value="(add number)"
                  delay={0.1}
                />
                <Stat
                  icon={<Utensils size={20} />}
                  label="Private Events"
                  value="Yes"
                  delay={0.2}
                />
                <Stat
                  icon={<MapPin size={20} />}
                  label="Parking"
                  value="(add details)"
                  delay={0.3}
                />
                <Stat
                  icon={<Phone size={20} />}
                  label="Reservations"
                  value="Call / WhatsApp"
                  delay={0.4}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#6F4E37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Philosophy</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Mission & Vision</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 shadow-lg border-t-4 border-[#6F4E37]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F5E6D3] rounded-lg">
                  <Heart className="text-[#6F4E37]" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-stone-900">Our Mission</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                To create exceptional dining experiences that celebrate tradition while embracing innovation, 
                bringing people together through outstanding food and genuine hospitality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white p-10 shadow-lg border-t-4 border-[#6F4E37]"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-[#F5E6D3] rounded-lg">
                  <Star className="text-[#6F4E37]" size={28} />
                </div>
                <h3 className="text-2xl font-serif text-stone-900">Our Vision</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                To be recognized as the premier dining destination, known for culinary excellence, 
                impeccable service, and creating memorable moments that guests cherish forever.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#6F4E37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">What Makes Us Special</h2>
            <p className="text-stone-600 max-w-2xl mx-auto text-lg">
              Discover the elements that set Grand Terrace apart from the rest
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Utensils size={32} />,
                title: "Exquisite Cuisine",
                description: "Every dish is crafted with passion, using the finest ingredients and time-honored techniques."
              },
              {
                icon: <Wine size={32} />,
                title: "Curated Selection",
                description: "An expertly selected wine list and beverage menu to complement your dining experience."
              },
              {
                icon: <Users size={32} />,
                title: "Warm Atmosphere",
                description: "An inviting ambiance perfect for intimate dinners, celebrations, and special occasions."
              },
              {
                icon: <Clock size={32} />,
                title: "Impeccable Timing",
                description: "Seamless service that ensures your meal is perfectly paced and thoroughly enjoyable."
              },
              {
                icon: <Award size={32} />,
                title: "Award-Winning",
                description: "Recognized for excellence in cuisine, service, and overall dining experience."
              },
              {
                icon: <Heart size={32} />,
                title: "Guest Focused",
                description: "Your satisfaction is our priority. We go above and beyond to exceed expectations."
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="text-center p-8 bg-stone-50 border border-stone-200 hover:border-[#8B6239] hover:shadow-xl transition-all"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#F5E6D3] to-[#E8D4BF] rounded-full text-[#6F4E37] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-stone-900 mb-3">{feature.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#6F4E37] uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Our Team</span>
            <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Meet the Masters</h2>
            <p className="text-stone-600 max-w-2xl mx-auto">
              The talented individuals who bring Grand Terrace to life every day
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Chef Name", role: "Executive Chef", image: logo },
              { name: "Manager Name", role: "Restaurant Manager", image: logo },
              { name: "Sommelier Name", role: "Wine Director", image: logo },
            ].map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="aspect-square overflow-hidden bg-stone-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-serif text-stone-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-[#6F4E37] uppercase tracking-wider font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-[#6F4E37] rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#8B6239] rounded-full blur-3xl"></div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-4xl mx-auto text-center text-white"
        >
          <Utensils className="mx-auto mb-6 text-[#D4A574]" size={48} />
          <h2 className="text-4xl md:text-5xl font-serif italic mb-6">
            Ready to Experience <br />
            <span className="text-[#D4A574]">Grand Terrace?</span>
          </h2>
          <p className="text-xl text-stone-300 mb-10 max-w-2xl mx-auto">
            Reserve your table today and discover why we're the talk of the town
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-[#6F4E37] hover:bg-[#5A3D2B] text-white px-12 py-4 text-sm uppercase tracking-wider font-medium transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              Make Reservation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/50 text-white px-12 py-4 text-sm uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

function Stat({ icon, label, value, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -5 }}
      className="bg-white border-2 border-stone-200 p-6 shadow-md hover:shadow-xl hover:border-[#8B6239] transition-all group"
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="text-[#6F4E37] group-hover:text-[#5A3D2B] transition-colors">
          {icon}
        </div>
        <div className="text-xs uppercase tracking-wider text-stone-500 font-bold">{label}</div>
      </div>
      <div className="text-lg font-semibold text-stone-900">{value}</div>
    </motion.div>
  );
}
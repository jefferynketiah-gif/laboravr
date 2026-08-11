import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    department: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // In production, send to your backend or Formspree
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', university: '', department: '', message: '' });
  };

  return (
    <>
      <Head>
        <title>Contact Us - LaboraVR</title>
        <meta name="description" content="Join our VR labs pilot program. Contact LaboraVR today." />
      </Head>

      <Navbar />

      <HeroSection
        title="Get In Touch"
        subtitle="Let's discuss how LaboraVR can transform science education at your institution."
        bgColor="from-purple-600 to-purple-800"
      />

      <section className="py-16 bg-white">
        <div className="max-width-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg mb-6"
              >
                ✓ Thanks for reaching out! We'll contact you within 24 hours.
              </motion.div>
            )}

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="mb-6">
                <label className="block font-bold text-gray-900 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-6">
                <label className="block font-bold text-gray-900 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block font-bold text-gray-900 mb-2">University Name *</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your university"
                />
              </div>

              <div className="mb-6">
                <label className="block font-bold text-gray-900 mb-2">Department *</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Select Department</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Physics">Physics</option>
                  <option value="Biology">Biology</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block font-bold text-gray-900 mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tell us about your lab needs..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Join Pilot Program
              </motion.button>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-12 text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Other Ways to Reach Us</h3>
              <p className="text-gray-600 mb-2">Email: <a href="mailto:jefferynketiah20@gmail.com" className="text-blue-600 hover:underline">hello@laboravr.com</a></p>
              <p className="text-gray-600">Follow us on <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a> and <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a></p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

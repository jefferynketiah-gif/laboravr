import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <>
      <Head>
        <title>About LaboraVR - Our Mission</title>
        <meta name="description" content="Learn about LaboraVR's mission to transform science education in Africa." />
      </Head>

      <Navbar />

      <HeroSection
        title="About LaboraVR"
        subtitle="On a mission to make science education accessible, safe, and affordable for every African student."
        bgColor="from-green-600 to-green-800"
      />

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              African universities have the brightest minds, but often lack access to proper laboratory facilities. Students graduate without hands-on experience in chemistry, physics, or biology—limiting their opportunities and potential.

              LaboraVR solves this problem by bringing immersive virtual reality laboratories to every institution, regardless of budget or location.

              We believe science education should be:
            </p>

            <ul className="mt-6 space-y-3 text-lg">
              {[
                "Safe: No chemical spills, no injuries, no risks",
                "Affordable: 97% cheaper than traditional labs",
                "Accessible: Works for every student, every time",
                "Effective: Proven to improve learning outcomes",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 text-gray-700"
                >
                  <span className="text-green-600 font-bold">✓</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              LaboraVR was founded by developers passionate about making education accessible across Africa.

              We've seen too many brilliant students limited by outdated infrastructure. We've watched universities struggle with expensive equipment budgets. We've witnessed the frustration when practical learning is impossible.

              That's why we're building VR labs. Not as a replacement for real science—but as an equalizer. A tool that gives every African student the hands-on learning experience they deserve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Education First", desc: "Every decision serves student learning." },
                { title: "African-Focused", desc: "Built for African institutions, by people who understand the context." },
                { title: "Affordable", desc: "Price should never be a barrier to quality education." },
                { title: "Quality", desc: "Educational rigor meets cutting-edge technology." },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600"
                >
                  <h3 className="font-bold text-lg mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Transforming Science Education</h2>
          <p className="text-lg mb-8 opacity-90">
            We're just getting started. Help us bring immersive learning to thousands of African students.
          </p>
          <a
            href="/contact"
            className="bg-amber-400 text-gray-900 px-8 py-3 rounded-lg font-bold hover:bg-amber-500 transition inline-block"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

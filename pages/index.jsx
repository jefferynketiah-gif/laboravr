import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FlaskConical, Zap, Microscope } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Hero3D from '../components/Hero3D';

export default function Home() {
  return (
    <>
      <Head>
        <title>LaboraVR - Virtual Reality Labs for African Universities</title>
        <meta name="description" content="Immersive, safe, and affordable VR labs for chemistry, physics, and biology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <HeroSection
        title="VR Labs for African Universities"
        subtitle="Immersive, safe, and affordable science education that transforms how students learn."
        primaryCTA={{ text: "Join Our Pilot Program", href: "/contact" }}
        secondaryCTA={{ text: "Learn More", href: "#features" }}
      />

      <Hero3D />

      {/* Problem Section */}
      <ScrollReveal>
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">The Challenge</h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  African Universities Face a Critical Gap
                </h3>
                <ul className="space-y-4">
                  {[
                    "Expensive lab equipment costs $50K+ per year",
                    "Limited lab access restricts hands-on learning",
                    "Safety risks with dangerous chemicals",
                    "Difficulty replacing consumable materials",
                    "Student outcomes suffer without practical experience",
                  ].map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-3 text-gray-700"
                    >
                      <span className="text-red-500 font-bold text-xl">✗</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-red-400 to-red-500 rounded-2xl p-12 text-white text-center"
              >
                <div className="text-6xl mb-4">💸</div>
                <p className="text-xl font-bold">Expensive, Limited, Risky</p>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Solution Section */}
      <ScrollReveal>
        <section>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Solution</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-400 to-green-500 rounded-2xl p-12 text-white text-center"
            >
              <div className="text-6xl mb-4">🥽</div>
              <p className="text-xl font-bold">Safe, Affordable, Scalable</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                LaboraVR: Virtual Reality Labs
              </h3>
              <ul className="space-y-4">
                {[
                  "Safe experiments without chemical risks",
                  "80% cost reduction compared to traditional labs",
                  "Unlimited experiments—students can repeat safely",
                  "Real-time feedback and performance tracking",
                  "Scalable to reach more students instantly",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-3 text-gray-700"
                  >
                    <span className="text-green-500 font-bold text-xl">✓</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* Features Section */}
      <ScrollReveal>
        <section>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Labs</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FlaskConical}
              title="Chemistry Lab"
              description="Mix chemicals safely, observe reactions instantly, understand reaction kinetics—all without the risks of real labs."
              index={0}
            />
            <FeatureCard
              icon={Zap}
              title="Physics Lab"
              description="Virtual apparatus for motion, forces, electricity, and more. Measure, predict, and verify physics principles safely."
              index={1}
            />
            <FeatureCard
              icon={Microscope}
              title="Biology Lab"
              description="Explore cell biology, dissections, and microscopy without harm. Learn at your own pace with unlimited access."
              index={2}
            />
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* How It Works */}
      <ScrollReveal>
        <section>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: 1, title: "Students Wear VR Headset", desc: "Meta Quest headsets provide immersive, realistic lab environments." },
              { num: 2, title: "Conduct Safe Experiments", desc: "Mix chemicals, measure forces, explore biology without real-world risks." },
              { num: 3, title: "Get Instant Feedback", desc: "Real-time feedback guides learning and tracks student progress automatically." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>

      {/* ROI Section */}
      <ScrollReveal>
        <section>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">The Financial Case</h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <p className="text-center mb-8 font-bold text-gray-700">
              Annual Cost Comparison: One Physics Lab
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-t-4 border-red-500 pt-6">
                <h4 className="font-bold text-gray-900 mb-2">Traditional Lab</h4>
                <div className="text-4xl font-bold text-red-500 mb-2">$50,000</div>
                <p className="text-gray-600 text-sm">Equipment, chemicals, maintenance, safety protocols</p>
              </div>

              <div className="border-t-4 border-green-500 pt-6">
                <h4 className="font-bold text-gray-900 mb-2">LaboraVR</h4>
                <div className="text-4xl font-bold text-green-500 mb-2">$1,500</div>
                <p className="text-gray-600 text-sm">Annual subscription for unlimited students</p>
              </div>
            </div>

            <p className="text-center mt-8 text-lg font-bold text-gray-900">
              <span className="text-green-600">97% Cost Reduction</span> while improving student engagement and safety
            </p>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <section>
        <div className="max-w-2xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Ready to Transform Science Education?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-8 opacity-90"
          >
            Join our pilot program and be among the first African universities using VR labs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="bg-amber-400 text-gray-900 px-10 py-4 rounded-lg font-bold hover:bg-amber-500 transition transform hover:scale-105 inline-block"
            >
              Join Our Pilot Program
            </Link>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>

      <Footer />
    </>
  );
}

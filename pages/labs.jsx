import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import { motion } from 'framer-motion';

export default function Labs() {
  const labDetails = [
    {
      title: "Chemistry Lab",
      icon: "⚗️",
      description: "Explore chemical reactions safely",
      features: [
        "Mix various chemicals without risk",
        "Observe color changes and reactions",
        "Learn about reaction kinetics",
        "Practice molecular structures",
        "Access all experiments unlimited",
      ],
      bgGradient: "from-pink-100 to-red-100"
    },
    {
      title: "Physics Lab",
      icon: "⚛️",
      description: "Master forces, motion, and energy",
      features: [
        "Virtual apparatus for experiments",
        "Measure forces and acceleration",
        "Explore electricity and magnetism",
        "Understand wave properties",
        "Real-time data collection",
      ],
      bgGradient: "from-blue-100 to-cyan-100"
    },
    {
      title: "Biology Lab",
      icon: "🔬",
      description: "Understand life at every scale",
      features: [
        "Cell biology exploration",
        "Safe virtual dissections",
        "Microscopy simulations",
        "Ecology simulations",
        "Genetics experiments",
      ],
      bgGradient: "from-green-100 to-emerald-100"
    },
  ];

  return (
    <>
      <Head>
        <title>Our Labs - LaboraVR</title>
        <meta name="description" content="Explore LaboraVR's chemistry, physics, and biology virtual labs." />
      </Head>

      <Navbar />

      <HeroSection
        title="Our Virtual Labs"
        subtitle="Each lab is carefully designed with educators to match your curriculum."
        primaryCTA={{ text: "Try a Demo", href: "/contact" }}
      />

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {labDetails.map((lab, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className={`bg-gradient-to-br ${lab.bgGradient} p-8 rounded-xl`}
              >
                <div className="text-5xl mb-4">{lab.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{lab.title}</h3>
                <p className="text-gray-700 mb-6">{lab.description}</p>
                <ul className="space-y-2">
                  {lab.features.map((feature, j) => (
                    <li key={j} className="flex gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Our Labs Work</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Designed by Educators", desc: "Every lab is built with input from university professors to match curriculum standards." },
              { title: "Research-Based", desc: "Backed by educational research on immersive learning and student engagement." },
              { title: "Performance Tracked", desc: "Built-in analytics show you exactly what each student learns and struggles with." },
              { title: "Constantly Updated", desc: "New experiments and improvements added regularly based on feedback." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow"
              >
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
    >
      <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
        <Icon size={28} className="text-blue-600" strokeWidth={1.75} />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}
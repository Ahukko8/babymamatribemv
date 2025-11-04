"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const values = [
    {
      title: "Quality First",
      description: "We meticulously select every product to ensure it meets the highest standards of quality and safety.",
      icon: "⭐",
    },
    {
      title: "Family Values",
      description: "We understand the importance of family and work to support parents in their journey.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Trust & Safety",
      description: "Your baby's safety is our top priority. All products are tested and certified safe.",
      icon: "🛡️",
    },
    {
      title: "Community",
      description: "We believe in building a community of parents who support and learn from each other.",
      icon: "🤝",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light via-white to-primary-light">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-light via-white to-primary-light py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary-brown mb-6">
              About Babymamatribemv
            </h1>
            <p className="text-lg md:text-xl text-primary-dark max-w-3xl mx-auto leading-relaxed">
              We are more than just a store – we are your partner in parenthood
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-primary-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-6">
                Our Story
              </h2>
              <p className="text-lg text-primary-dark mb-4 leading-relaxed">
                Babymamatribemv was born from a simple idea: every parent deserves access to
                the best products for their little ones. As parents ourselves, we understand
                the overwhelming choices and the need for trusted, quality baby items.
              </p>
              <p className="text-lg text-primary-dark mb-4 leading-relaxed">
                We started by carefully curating products that we would personally use for our
                own children. This commitment to quality and safety has remained at the heart
                of everything we do.
              </p>
              <p className="text-lg text-primary-dark leading-relaxed">
                Today, we serve families across Maldives, helping them find the perfect items
                for their babies while building a supportive community of parents.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/logo.jpg"
                alt="About Babymamatribemv"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
              Our Values
            </h2>
            <p className="text-lg text-primary-dark max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary-brown mb-3">
                  {value.title}
                </h3>
                <p className="text-primary-dark">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-6">
              Our Mission
            </h2>
            <p className="text-lg md:text-xl text-primary-dark leading-relaxed mb-6">
              To provide parents with premium, safe, and trusted baby products while fostering
              a community where families can connect, share, and grow together.
            </p>
            <p className="text-lg md:text-xl text-primary-dark leading-relaxed">
              We believe that parenthood is a journey best traveled together, and we are here
              to support you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

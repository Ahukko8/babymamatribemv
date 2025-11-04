"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-primary-light to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-brown mb-6">
                Welcome to Babymamatribemv
              </h1>
              <p className="text-lg md:text-xl text-primary-dark mb-8 leading-relaxed">
                Discover premium baby items curated with love and care. 
                Everything your little one needs, from essentials to special keepsakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-primary-brown text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="bg-white text-primary-brown border-2 border-primary-brown px-8 py-3 rounded-full font-semibold hover:bg-primary-light transition-all duration-300 text-center"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-96 w-96 lg:h-[500px] lg:w-[500px] mx-auto"
            >
              <Image
                src="/logo.jpg"
                alt="Babymamatribemv Logo"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-white via-primary-light to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-primary-dark max-w-2xl mx-auto">
              We are committed to providing the best for your baby and your family
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "All our products are carefully selected for quality and safety standards",
                icon: "✨",
              },
              {
                title: "Trusted Brands",
                description: "We work with reputable brands you can trust for your baby's needs",
                icon: "🏆",
              },
              {
                title: "Fast Delivery",
                description: "Quick and safe delivery right to your doorstep across Maldives",
                icon: "🚚",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-primary-light p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-primary-brown mb-3">
                  {feature.title}
                </h3>
                <p className="text-primary-dark">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-brown mb-6">
              Ready to Shop?
            </h2>
            <p className="text-lg text-primary-dark mb-8">
              Browse our collection of premium baby items and find everything you need
            </p>
            <Link
              href="/products"
              className="inline-block bg-primary-brown text-white px-10 py-4 rounded-full font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Products
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}


"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const mockProducts: Product[] = [
  // Clothing (6 items)
  {
    id: 1,
    name: "Organic Baby Onesies Pack (3-Pack)",
    price: 89.90,
    image: "https://images.unsplash.com/photo-1584839404047-5f4d0617015a?w=500",
    category: "Clothing",
    description: "Soft organic cotton onesies, perfect for everyday wear",
  },
  {
    id: 2,
    name: "Baby Romper Set (2-Pack)",
    price: 75.00,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500",
    category: "Clothing",
    description: "Adorable romper sets in assorted colors for your little one",
  },
  {
    id: 3,
    name: "Baby Pajamas with Feet",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
    category: "Clothing",
    description: "Cozy footed pajamas for comfortable sleep",
  },
  {
    id: 4,
    name: "Baby Hat and Mitten Set",
    price: 25.00,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500",
    category: "Clothing",
    description: "Warm and soft hat and mitten set for chilly days",
  },
  {
    id: 5,
    name: "Baby Sock Pack (6-Pairs)",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    category: "Clothing",
    description: "Soft non-slip socks in various cute designs",
  },
  {
    id: 6,
    name: "Baby Swaddle Blanket Set",
    price: 68.00,
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=500",
    category: "Clothing",
    description: "Breathable swaddle blankets for newborns",
  },
  // Feeding (6 items)
  {
    id: 7,
    name: "Premium Baby Bottle Set (4-Pack)",
    price: 65.00,
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
    category: "Feeding",
    description: "BPA-free silicone bottles with anti-colic design",
  },
  {
    id: 8,
    name: "Baby High Chair",
    price: 249.00,
    image: "https://images.unsplash.com/photo-1604384427987-4a95e20c85c2?w=500",
    category: "Feeding",
    description: "Adjustable high chair with safety straps and tray",
  },
  {
    id: 9,
    name: "Silicone Baby Bib Set (3-Pack)",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500",
    category: "Feeding",
    description: "Easy-to-clean silicone bibs with catch pocket",
  },
  {
    id: 10,
    name: "Baby Food Storage Containers",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=500",
    category: "Feeding",
    description: "BPA-free food storage containers with lids",
  },
  {
    id: 11,
    name: "Baby Feeding Spoon Set",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=500",
    category: "Feeding",
    description: "Soft-tip spoons perfect for first foods",
  },
  {
    id: 12,
    name: "Baby Pacifier Set (4-Pack)",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=500",
    category: "Feeding",
    description: "Orthodontic pacifiers in various colors",
  },
  // Travel (6 items)
  {
    id: 13,
    name: "Deluxe Stroller",
    price: 599.00,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
    category: "Travel",
    description: "Lightweight, foldable stroller with smooth maneuverability",
  },
  {
    id: 14,
    name: "Ergonomic Baby Carrier",
    price: 159.90,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500",
    category: "Travel",
    description: "Comfortable baby carrier for hands-free carrying",
  },
  {
    id: 15,
    name: "Baby Diaper Bag Backpack",
    price: 85.00,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
    category: "Travel",
    description: "Spacious and organized diaper bag with multiple compartments",
  },
  {
    id: 16,
    name: "Car Seat Protector Mat",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=500",
    category: "Travel",
    description: "Waterproof mat to protect your car seats",
  },
  {
    id: 17,
    name: "Travel Baby Changing Mat",
    price: 29.00,
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500",
    category: "Travel",
    description: "Portable changing mat with pockets for essentials",
  },
  {
    id: 18,
    name: "Baby Car Mirror",
    price: 24.00,
    image: "https://images.unsplash.com/photo-1599384266463-feb2421bd4d4?w=500",
    category: "Travel",
    description: "Safety mirror to keep an eye on your baby in the car",
  },
  // Sleep (6 items)
  {
    id: 19,
    name: "Baby Sleeping Bag",
    price: 75.50,
    image: "https://images.unsplash.com/photo-1548286978-f218023f8d18?w=500",
    category: "Sleep",
    description: "Comfortable and safe sleeping bag for peaceful nights",
  },
  {
    id: 20,
    name: "Organic Baby Blanket",
    price: 95.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Sleep",
    description: "Ultra-soft organic cotton blanket, perfect for snuggling",
  },
  {
    id: 21,
    name: "Baby Sleep Sound Machine",
    price: 49.00,
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=500",
    category: "Sleep",
    description: "White noise machine with soothing sounds for better sleep",
  },
  {
    id: 22,
    name: "Baby Crib Mobile",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=500",
    category: "Sleep",
    description: "Musical mobile with soft plush animals",
  },
  {
    id: 23,
    name: "Baby Sleep Sack (2-Pack)",
    price: 58.00,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500",
    category: "Sleep",
    description: "TOG-rated sleep sacks for different seasons",
  },
  {
    id: 24,
    name: "Nursery Night Light",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    category: "Sleep",
    description: "Soft glow night light with adjustable brightness",
  },
  // Toys (6 items)
  {
    id: 25,
    name: "Wooden Teething Toys Set",
    price: 45.00,
    image: "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=500",
    category: "Toys",
    description: "Natural wooden teething toys, safe and non-toxic",
  },
  {
    id: 26,
    name: "Baby Play Mat with Toys",
    price: 119.00,
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=500",
    category: "Toys",
    description: "Soft play mat with sensory activities for tummy time",
  },
  {
    id: 27,
    name: "Musical Mobile for Crib",
    price: 79.90,
    image: "https://images.unsplash.com/photo-1495908333425-29d1b1352f01?w=500",
    category: "Toys",
    description: "Soothing musical mobile for nursery with soft melodies",
  },
  {
    id: 28,
    name: "Baby Rattle Set (4-Pack)",
    price: 35.00,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500",
    category: "Toys",
    description: "Colorful rattles for sensory development",
  },
  {
    id: 29,
    name: "Soft Baby Blocks Set",
    price: 42.00,
    image: "https://images.unsplash.com/photo-1584839404047-5f4d0617015a?w=500",
    category: "Toys",
    description: "Soft fabric blocks with numbers and letters",
  },
  {
    id: 30,
    name: "Baby Activity Gym",
    price: 89.00,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500",
    category: "Toys",
    description: "Interactive play gym with hanging toys and mirrors",
  },
  // Bath (6 items)
  {
    id: 31,
    name: "Baby Bathtub with Support",
    price: 55.00,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500",
    category: "Bath",
    description: "Complete bath set with tub, toys, and accessories",
  },
  {
    id: 32,
    name: "Baby Hooded Towel Set (2-Pack)",
    price: 48.00,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    category: "Bath",
    description: "Super soft hooded towels for after bath time",
  },
  {
    id: 33,
    name: "Baby Bath Toys Set",
    price: 28.00,
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=500",
    category: "Bath",
    description: "Fun bath toys to make bath time enjoyable",
  },
  {
    id: 34,
    name: "Baby Bath Thermometer",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500",
    category: "Bath",
    description: "Digital thermometer to ensure perfect bath temperature",
  },
  {
    id: 35,
    name: "Organic Baby Shampoo & Body Wash",
    price: 32.00,
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500",
    category: "Bath",
    description: "Gentle, tear-free organic baby wash",
  },
  {
    id: 36,
    name: "Baby Bath Sponge Set",
    price: 22.00,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500",
    category: "Bath",
    description: "Soft natural sponges for gentle cleaning",
  },
];

const categories = ["All", "Clothing", "Feeding", "Travel", "Sleep", "Toys", "Bath"];
const PRODUCTS_PER_PAGE = 6;

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  // Reset to page 1 when category changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);

  const filteredProducts =
    selectedCategory === "All"
      ? mockProducts
      : mockProducts.filter((product) => product.category === selectedCategory);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light via-white to-primary-light py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primary-brown mb-4">
            Our Products
          </h1>
          <p className="text-lg text-primary-dark max-w-2xl mx-auto">
            Discover our curated collection of premium baby items
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${selectedCategory === category
                  ? "bg-primary-brown text-white shadow-lg"
                  : "bg-white text-primary-brown hover:bg-primary-light border border-primary-brown"
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12"
        >
          {currentProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={
                    product.image.startsWith("http")
                      ? product.image
                      : `/babymamatribemv/${product.image}`
                  }
                  alt={product.name}
                  className={`object-cover w-full h-full transition-transform duration-300 ${hoveredProduct === product.id ? "scale-110" : ""
                    }`}
                />
                <div className="absolute top-4 right-4 bg-accent-coral text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary-brown mb-2">
                  {product.name}
                </h3>
                <p className="text-primary-dark text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-brown">
                    RM {product.price.toFixed(2)}
                  </span>
                  <button className="bg-primary-brown text-white px-6 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-xl text-primary-dark">No products found in this category.</p>
          </motion.div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center items-center gap-2 mt-12"
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-primary-brown text-white hover:bg-primary-dark"
                }`}
            >
              Previous
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === page
                      ? "bg-primary-brown text-white shadow-lg"
                      : "bg-white text-primary-brown hover:bg-primary-light border border-primary-brown"
                    }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-primary-brown text-white hover:bg-primary-dark"
                }`}
            >
              Next
            </button>
          </motion.div>
        )}

        {/* Page Info */}
        {filteredProducts.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-6 text-primary-dark"
          >
            <p className="text-sm">
              Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

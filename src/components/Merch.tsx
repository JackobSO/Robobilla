import React, { useState } from "react";
import { Heart, Eye } from "lucide-react";

const Merch = () => {
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [wishlistItems, setWishlistItems] = useState<Set<string>>(new Set());

  const filterCategories = ["ALL", "MEN'S", "CREWNECK", "SWEATSHIRT", "HOODIE", "T-SHIRT", "JACKET"];

  const products = [
    {
      id: "1",
      name: "White Avinya Robotics T shirt",
      price: 399,
      originalPrice: null,
      category: "T-SHIRT",
      image: "https://ik.imagekit.io/t2pd1accwu/WhatsApp%20Image%202025-08-07%20at%2013.57.58_83cdb7f9.jpg?updatedAt=1754922199264",
      isNew: true,
      isHotPromo: false,
      inStock: true
    },
    {
      id: "2",
      name: "Black Avinya Robotics T shirt",
      price: 399,
      originalPrice: null,
      category: "T-SHIRT",
      image: "https://ik.imagekit.io/t2pd1accwu/WhatsApp%20Image%202025-08-07%20at%2013.57.58_5281d293.jpg?updatedAt=1754922199307",
      isNew: false,
      isHotPromo: true,
      inStock: true
    }
  ];

  const toggleWishlist = (productId: string) => {
    const newWishlist = new Set(wishlistItems);
    if (newWishlist.has(productId)) {
      newWishlist.delete(productId);
    } else {
      newWishlist.add(productId);
    }
    setWishlistItems(newWishlist);
  };

  const filteredProducts = activeFilter === "ALL" 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <section id="merch" className="bg-[#F5F5F5] py-16">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-10">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(28px,4vw,48px)] font-black leading-[1.1] tracking-[-0.02em] text-black uppercase mb-8">
            Merch
          </h2>
          
          {/* Filter Tabs */}
          <div className="flex justify-center mb-10">
            <div className="flex gap-3 overflow-x-auto px-5 pb-2">
              {filterCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2 rounded-[20px] border text-sm font-medium cursor-pointer transition-all duration-200 whitespace-nowrap ${
                    activeFilter === category
                      ? "bg-black text-white border-black"
                      : "border-[#CCCCCC] text-[#666666] hover:bg-[#F0F0F0] hover:border-[#999999]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Product Image Container */}
              <div className="relative aspect-square bg-[#F8F8F8] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Badges */}
                {product.isNew && (
                  <div className="absolute top-3 left-3 bg-white text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-[0.5px]">
                    NEW PRODUCT
                  </div>
                )}
                {product.isHotPromo && (
                  <div className="absolute top-3 right-3 bg-[#FF4444] text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-[0.5px]">
                    HOT PROMO
                  </div>
                )}
                
                {/* Wishlist Icon */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product.id);
                  }}
                  className="absolute top-3 right-3 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  <Heart
                    size={20}
                    className={`${
                      wishlistItems.has(product.id) 
                        ? "fill-red-500 text-red-500" 
                        : "text-[#666666]"
                    }`}
                  />
                </button>
                
                {/* Quick View Icon */}
                <button className="absolute bottom-3 right-3 w-9 h-9 bg-black/70 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Eye size={18} />
                </button>
              </div>
              
              {/* Product Content */}
              <div className="p-4 flex flex-col gap-1 min-h-[120px]">
                <span className="text-[11px] font-medium text-[#666666] uppercase tracking-[0.5px] mb-1">
                  {product.category}
                </span>
                <h3 className="text-sm font-semibold text-black leading-[1.3] mb-2 uppercase flex-grow">
                  {product.name}
                </h3>
                <div className="mt-auto">
                  <span className="text-base font-bold text-black">
                    Rs {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm font-medium text-[#999999] line-through ml-2">
                      Rs {product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-[#666666] text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Merch;

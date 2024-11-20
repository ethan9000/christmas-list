"use client";

import Image from "next/image";
import GiftCard from "@/components/giftCard";
import { api } from "../../convex/_generated/api";
import { useQuery } from "convex/react";
import { useState, useEffect } from "react";
export default function Home() {
  const gifts = useQuery(api.gifts.getGifts);
  const categories = useQuery(api.categories.getCategories);

  const [activeCategories, setActiveCategories] = useState([]);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    setActiveCategories(categories);
    setAllCategories(categories);
  }, [categories]);

  const handleCategoryClick = (category) => {
    setActiveCategories([category]);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-6xl lg:text-7xl text-[#5d1c34] font-bold text-center my-10 font-handwriting">
        Ethan's Wish List
      </h1>
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {categories?.map((category) => (
          <button
            key={category._id}
            className={`${
              activeCategories?.includes(category) ? "text-[#5d1c34]" : ""
            } `}
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </button>
        ))}
        <button onClick={() => setActiveCategories(allCategories)}>All</button>
      </div>
      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
        {activeCategories?.map((category) => (
          <div key={category._id}>
            <h2 className="text-4xl font-bold mb-6 font-handwriting ">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {gifts
                ?.filter((gift) => gift.category === category.name)
                .map((gift, index) => (
                  <GiftCard key={gift._id} gift={gift} index={index} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

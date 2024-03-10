"use client";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa6";

const HeartElement = () => {
  const { wishlist } = useWishlistStore();
  return (
    <div className="relative">
      <Link href="/wishlist">
        <FaHeart className="text-2xl text-black" />
        <span className="block w-6 h-6 font-bold bg-blue-600 text-white rounded-full flex justify-center items-center absolute top-[-17px] right-[-22px]">
          { wishlist.length }
        </span>
      </Link>
    </div>
  );
};

export default HeartElement;

"use client";
import { useWishlistStore } from "@/app/_zustand/wishlistStore";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FaHeartCrack } from "react-icons/fa6";

const WishItem = ({
  id,
  title,
  price,
  image,
  slug,
  stockAvailabillity,
}: ProductInWishlist) => {
  // getting from Zustand wishlist store
  const { removeFromWishlist } = useWishlistStore();
  const router = useRouter();

  const openProduct = (slug: string): void => {
    router.push(`/product/${slug}`);
  };
  return (
    <tr
      className="hover:bg-gray-100 cursor-pointer"

    >
      <th className="text-black text-sm text-center" onClick={() => openProduct(slug)}>{id}</th>
      <th>
        <div className="w-12 h-12 mx-auto" onClick={() => openProduct(slug)}>
          <Image
            src={`/${image}`}
            width={200}
            height={200}
            className="w-auto h-auto"
            alt={title}
          />
        </div>
      </th>
      <td className="text-black text-sm text-center" onClick={() => openProduct(slug)}>{title}</td>
      <td className="text-black text-sm text-center" onClick={() => openProduct(slug)}>
        {stockAvailabillity ? (
          <span className="text-success">In stock</span>
        ) : (
          <span className="text-error">Out of stock</span>
        )}
      </td>
      <td>
        <button className="btn btn-xs bg-blue-500 text-white hover:text-blue-500 border border-blue-500 hover:bg-white hover:text-blue-500 text-sm">
          <FaHeartCrack />
          <span
            className="max-sm:hidden"
            onClick={() => removeFromWishlist(id)}
          >
            remove from the wishlist
          </span>
        </button>
      </td>
    </tr>
  );
};

export default WishItem;

"use client";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DashboardProductTable = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Product</th>
            <th>Stock Availability</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products &&
            products.map((product) => (
              <tr key={nanoid()}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <Image
                          width={48}
                          height={48}
                          src={`/${product?.mainImage}`}
                          alt="Avatar Tailwind CSS Component"
                          className="w-auto h-auto"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{product?.title}</div>
                      <div className="text-sm opacity-50">
                        {product?.manufacturer}
                      </div>
                    </div>
                  </div>
                </td>

                <td>
                  25
                  <br />
                  <span className="badge badge-success text-white badge-sm">
                    In stock
                  </span>
                </td>
                <td>${product?.price}</td>
                <th>
                  <Link href={`/admin/products/${product.id}`} className="btn btn-ghost btn-xs">details</Link>
                </th>
              </tr>
            ))}
        </tbody>
        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Stock Availability</th>
            <th>Price</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DashboardProductTable;

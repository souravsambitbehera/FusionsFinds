import React, { useContext } from "react";
import myContext from "../context/data/myContext";
import './Shimmer.css'

const ProductsShimmer = () => {
  const { mode } = useContext(myContext);
  return (
    <tbody>
      {Array.from({ length: 5 }).map((_, index) => (
        <tr
          className="bg-gray-50 border-b dark:border-gray-70 "
          style={{
            backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
            color: mode === "dark" ? "white" : "",
          }}
          key={index}
        >
          <td className="px-6 py-4 text-black shimmer">Loading...</td>
          <th
            scope="row"
            className="px-6 py-4 font-medium text-black skeleton"
          ></th>
          <td className="px-6 py-4 text-black shimmer"></td>
          <td className="px-6 py-4 text-black shimmer"></td>
          <td className="px-6 py-4 text-black shimmer"></td>
          <td className="px-6 py-4 text-black shimmer"></td>
          <td className="px-6 py-4">
            <div className="flex gap-2">
              <div
                className="flex gap-2 cursor-pointer text-black shimmer"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* svg path */}
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    {/* svg path */}
                  </svg>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductsShimmer;

import React from "react";
import { useState } from "react";
import { ProductData as products } from "../data/ProductData";
import ProductsCard from "../components/ProductsCard";
const Shop = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [priceRangeFilter, setPriceRangeFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const checkPriceRange = (product, priceRange) => {
    const [min, max] = priceRange.split("-");
    const productPrice = product.price;
    return productPrice >= parseFloat(min) && productPrice <= parseFloat(max);
  };
  // Filter products based on filters
  const filteredProducts = products
    .filter(
      (product) => categoryFilter === "" || product.category === categoryFilter
    )
    .filter(
      (product) =>
        priceRangeFilter === "" || checkPriceRange(product, priceRangeFilter)
    )
    .filter(
      (product) =>
        ratingFilter === "" || product.rating >= parseFloat(ratingFilter)
    );

  const renderProducts = () => {
    if (filteredProducts.length === 0) {
      return <p>No products match your filters.</p>;
    }

    return (
      <div className="max-w-screen-xl w-4/5 mx-auto grid grid-cols-3 gap-10 py-10  max-[1050px]:grid-cols-2 max-[540px]:grid-cols-1">
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} product={product} />
        ))}
      </div>
    );
  };

  return (
    <div className="flex max-[870px]:flex-col">
      <div className="w-1/6 ml-2 mt-2 bg-gradient-to-r from-violet-400 to-fuchsia-300 h-full flex flex-col gap-4 sticky top-20 rounded-xl border-2 border-violet-700  max-[870px]:flex-row max-[870px]:w-full max-[870px]:space-between max-[870px]:static">
        <div className="flex flex-col ">
          <label>Category:</label>
          <div className="ml-4">
            <div className="flex w-4/5 justify-between">
              <label htmlFor="all">All</label>
              <input
                type="radio"
                name="all"
                value=""
                checked={categoryFilter === ""}
                onChange={() => setCategoryFilter("")}
              />
            </div>
            {["electronics", "clothing", "jewelery"].map((category) => (
              <React.Fragment key={category}>
                <div className="flex w-4/5 justify-between">
                  <label htmlFor={category}>{category}</label>
                  <input
                    type="radio"
                    name={category}
                    value={category}
                    checked={categoryFilter === category}
                    onChange={() => setCategoryFilter(category)}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="flex flex-col">
          <label>Price Range:</label>
          <div className="ml-4">
            <div className="flex w-4/5 justify-between">
              <label>All</label>
              <input
                type="radio"
                name="price"
                value=""
                checked={priceRangeFilter === ""}
                onChange={() => setPriceRangeFilter("")}
              />
            </div>
            {["0-49.99", "50-99.99", "100-199.99"].map((priceRange) => (
              <React.Fragment key={priceRange}>
                <div className="flex w-4/5 justify-between">
                  <label>{priceRange}</label>
                  <input
                    type="radio"
                    name="price"
                    value={priceRange}
                    checked={priceRangeFilter === priceRange}
                    onChange={() => setPriceRangeFilter(priceRange)}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label>Rating:</label>
          <div className="ml-4 flex gap-3 flex-col">
            <div className="flex w-4/5 justify-between text-sm mt-2" >
              <label>All</label>
              <input
                type="radio"
                name="rating"
                value=""
                checked={ratingFilter === ""}
                onChange={() => setRatingFilter("")}
              />
            </div>
            {[4, 3, 2, 1].map((rating) => (
              <React.Fragment key={rating}>
                <div className="flex w-4/5 justify-between">
                  <label className="text-sm">{rating} Stars and above</label>
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                    checked={ratingFilter === rating.toString()}
                    onChange={() => setRatingFilter(rating.toString())}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      {renderProducts()}
    </div>
  );
};

export default Shop;

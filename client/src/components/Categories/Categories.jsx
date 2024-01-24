import React from "react";
import "./Categories.scss";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.asos-media.com/products/topshop-kort-split-hem-co-ord-jeans-in-turquoise/201848051-1-turquoise?$n_640w$&wid=513&fit=constrain"
            alt="saleItems"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://content.asos-media.com/-/media/homepages/ww/2023/march/27-prime/ww_global_cool_casual_2_moment_870x1110.jpg"
            alt="womenItems"
          />
          <button>
            <Link className="link" to="/products/1">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.asos-media.com/products/reclaimed-vintage-unisex-canvas-tattoo-print-motocross-jacket-in-blue/204035320-1-mutli?$n_640w$&wid=513&fit=constrain"
            alt="newSeasonItems"
          />
          <button>
            <Link className="link" to="/products/1">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.asos-media.com/products/reclaimed-vintage-unisex-heritage-logo-t-shirt-in-white/204206719-1-white?$n_640w$&wid=513&fit=constrain"
                alt="menItems"
              />
              <button>
                <Link className="link" to="/products/1">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.asos-media.com/products/asos-design-lemon-rimless-glasses/201840451-1-yellow?$n_640w$&wid=513&fit=constrain"
                alt="accessoryItems"
              />
              <button>
                <Link className="link" to="/products/1">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://media.gucci.com/content/HeroRegularStandard_3200x1350/1679501757/HeroRegularStandard_6494790G0V01000_001_Default.jpg"
            alt="shoeItems"
          />
          <button>
            <Link className="link" to="/products/1">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;

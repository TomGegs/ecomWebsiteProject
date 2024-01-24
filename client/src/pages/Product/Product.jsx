import React, { useState } from "react";
import "./Product.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const Product = () => {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = useState(`img`);
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch()

  const { data, loading } = useFetch(`/products/${id}?populate=*`);

  return (
    <div className="product">
      {loading ? (
        "loading"
      ) : (
        <>
          <div className="left">
            <div className="images">
              <img
                src={
                  `${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img.data.attributes.url}`
                }
                alt="mainImage"
                onClick={(e) => setSelectedImage("img")}
              />
              <img
                src={
                  `${process.env.REACT_APP_UPLOAD_URL}${data?.attributes?.img2.data.attributes.url}`
                }
                alt="secondImage"
                onClick={(e) => setSelectedImage("img2")}
              />
            </div>
            <div className="mainImage">
              <img
                src={
                  `${process.env.REACT_APP_UPLOAD_URL}${
                  data?.attributes?.[selectedImage]?.data?.attributes?.url}`
                }
                alt="largeMainImage"
              />
            </div>
          </div>
          <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <span className="price">${data?.attributes?.price}</span>
            <p>{data?.attributes?.description}</p>
            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity((prev) => (prev === 1 ? 1 : prev - 1))
                }>
                -
              </button>
              {quantity}
              <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
              id: data?.id,
              img: data?.attributes?.img.data.attributes.url,
              title: data?.attributes?.title,
              desc: data?.attributes?.desc,
              price: data?.attributes?.price,
              quantity: quantity,
            }))}>
              <AddShoppingCartIcon /> ADD TO CART
            </button>
            <div className="links">
              <div className="item">
                <FavoriteBorderIcon />
                ADD TO WISHLIST
              </div>
              <div className="item">
                <BalanceIcon />
                COMPARE ITEM
              </div>
            </div>
            <div className="info">
              <span>Model wears size small.</span>
              <span>Fabrication: Linen</span>
              <span>
                * Fabric is made with a repeat print and every piece is slightly
                different and unique. No two pieces are the same.
              </span>
              <hr />
            </div>
            <div className="details">
              <span>DESCRIPTION</span>
              <hr />
              <span>ADDITIONAL INFORMATION</span>
              <hr />
              <span>FAQ</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;

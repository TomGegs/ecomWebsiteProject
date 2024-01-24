import "./Cart.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
    const products = useSelector((state) => state.cart.products);

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach((item) => (total += item.price * item.quantity));
        return total.toFixed(2);
    };

    const stripePK = process.env.REACT_APP_STRIPE_PK;
    const stripePromise = loadStripe(stripePK);
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makeRequest.post("/orders", {
                products,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="cart">
            <div className="cartItems">
                <h1>Your Cart</h1>
                {products.map((item) => (
                    <div className="item" key={item.id}>
                        <img
                            src={process.env.REACT_APP_UPLOAD_URL + item.img}
                            alt="cartImg"
                        />
                        <div className="details">
                            <div className="price" key={item.id + "-price"}>
                                <p>
                                    {item.quantity} x ${item.price}
                                </p>
                            </div>
                            <h1 key={item.id + "-title"}>{item.title}</h1>
                            <p key={item.id + "-desc"}>
                                {item.desc?.substring(0, 100)}
                            </p>
                            <span className="size" key={item.id + "-size"}>
                                SMALL
                            </span>
                        </div>
                        <DeleteOutlineIcon
                            className="delete"
                            onClick={() => dispatch(removeItem(item.id))}
                            key={item.id + "-delete"}
                        />
                    </div>
                ))}
            </div>
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice()}</span>
            </div>
            <div className="cartButtons">
                <button className="checkout" onClick={handlePayment}>
                    CHECKOUT
                </button>
                <span className="reset" onClick={() => dispatch(resetCart())}>
                    Clear all
                </span>
            </div>
        </div>
    );
};

export default Cart;

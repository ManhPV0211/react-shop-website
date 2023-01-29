import { Link } from "react-router-dom";
import Header from "../components/Header";

function CartScreen() {
    window.scrollTo(0, 0);
    return (
        <>
        <Header />
        {/* Cart */}
        <div className="container">
            {/* <div>
                Your cart is empty
                <Link to="/">SHOPING NOW</Link>
            </div> */}

            <div>
                Total Cart Products
                <Link to="/cart">(4)</Link>
            </div>
        </div>
        </>
    )
}
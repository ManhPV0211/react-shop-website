import { Link } from "react-router-dom";
import {FaFacebook, FaLinkedin, FaYoutube, FaPinterest, FaShoppingBag} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

function Header() {
    return (
        <div>
            <div className="announcement">
                <div className="container">
                    <div>
                        <p>(+84)-976-133-046</p>
                        <p>solidworks.icad@gmail.com</p>
                    </div>

                    <div className="socials">
                        <Link to=""><FaFacebook /></Link>
                        <Link to=""><AiFillInstagram /></Link>
                        <Link to=""><FaLinkedin /></Link>
                        <Link to=""><FaYoutube /></Link>
                        <Link to=""><FaPinterest /></Link>
                    </div>
                </div>
            </div>

            <div className="header">
                <div className="container">
                    {/* PC Header */}
                    <div className="pc-header">
                        <Link className="navbar-brand">
                            <h3>ManhPV-Shop</h3>
                        </Link>

                        <form className="input-group">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="search"
                            />
                            <button type="submit" className="search-btn">Search</button>
                        </form>

                        <div className="btn-group">
                            <button
                                type="button"
                                className="name-btn dropdown-toggle"
                            >
                                Hi, Admin MPV
                            </button>
                            <div className="dropdown-menu">
                                <Link to="/profile" className="dropdown-item">Profile</Link>
                                <Link to="#" className="dropdown-item">Logout</Link>
                            </div>
                        </div>

                        <Link to="/cart">
                            <i><FaShoppingBag /></i>
                            <span>4</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Header;
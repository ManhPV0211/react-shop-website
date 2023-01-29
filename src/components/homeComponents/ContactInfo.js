import {AiFillPhone} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md";
import {FaFax} from "react-icons/fa";

function ContactInfo() {
    return (
        <div className="contactInfo container">
            <article>
                <div className="info-icon"><AiFillPhone /></div>
                <h5>Call Us 24x7</h5>
                <p>0976 133 046</p>
            </article>

            <article>
                <div className="info-icon"><MdLocationOn /></div>
                <h5>Headquarter</h5>
                <p>Arusah Nijiro Pepsi</p>
            </article>

            <article>
                <div className="info-icon"><FaFax /></div>
                <h5>Fax</h5>
                <p>036 855 2761</p>
            </article>
        </div>
    )
};

export default ContactInfo;
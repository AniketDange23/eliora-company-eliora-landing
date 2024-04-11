import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const ContactSection = () => {
  return (
    <div className="container p-3 p-md-5" id="contact">
      <div className="row gx-0">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <h3 className="mb-2 text-black">Get In Touch</h3>
          <p>
            <IoLocationSharp className="text-black" />
            Opposite Bank of Baroda, Ward Number 3, Parsodi, Trimurtee Nagar, Nagpur, Maharashtra 440022
          </p>
          <p>
            <FaPhone className="text-black" />
            <a href="tel:+918668681466" className="text-black">
              +91 8668681466
            </a>
            ,{" "}
            <a href="tel:+918956101181" className="text-black">
              +91 8956101181
            </a>
          </p>
          <p>
            <IoMail className="text-black" />
            <a href="mailto:info@elioratechno.com" className="text-black">
              {" "}
              info@elioratechno.com
            </a>
          </p>

          <div className="d-flex gap-2">
            <a href="https://instagram.com/eliora_website?igshid=MzRlODBiNWFlZA==" className="text-decoration-none">
              <BsInstagram className="text-black" style={{ fontSize: "25px" }} />
            </a>
            <a href="https://www.facebook.com/elioraitservices?mibextid=ZbWKwL" className="text-decoration-none">
              <FaFacebook className="text-black" style={{ fontSize: "25px" }} />
            </a>
            <a href="https://www.linkedin.com/company/eliora-it-services/" className="text-decoration-none">
              <FaLinkedin className="text-black" style={{ fontSize: "25px" }} />
            </a>
          </div>
        </div>

        <div className="col-lg-6 mt-md-0 mt-4">
          <h3 className="mb-4">Contact Form</h3>
          <form className="d-flex flex-column gap-3" method="post">
            <input type="text" className="form-control shadow p-3" placeholder="Enter your Name" />
            <input type="email" className="form-control shadow p-3" placeholder="Enter Your Email" />
            <input type="tel" className="form-control shadow p-3" placeholder="Enter Your Contact Number" />
            <textarea className="form-control shadow p-3" rows="5" placeholder="Enter Your Message"></textarea>
            <button type="submit" className="btn btn-dark shadow p-3">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;

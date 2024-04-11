import { BiPhone } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosMail } from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg-dark text-white  p-0 ">
  
      <div className="container px-3">
        <a className="navbar-brand" href="#"> 
        <img src="/elioralogo.png" style={{ width: "150px" }} /> </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"> <GiHamburgerMenu className='text-white' /> </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 px-5">
            <li className="nav-item">
              <a className="nav-link text-white" href="tel:+918830826434"><BiPhone /> +91 8830826434</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="mailto:info@elioratechno.com"><IoIosMail /> info@elioratechno.com</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#"><FaLocationDot /> Trimurtee Nagar, Nagpur, Maharashtra 440022</a>
            </li>
          </ul>

          <a href="https://www.elioratechno.com/contact">
            <button className="shadow__btn">Contact</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;

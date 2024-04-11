import { TiPhone } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from "react";

const FixedButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixButton d-flex justify-content-end flex-column gap-3" style={{position: "fixed", bottom: "10px", right: "10px"}}>
      <button className="call mx-2 border rounded-5 p-2">
        <a href="tel:+918830826434">
          <TiPhone style={{fontSize: "40px"}} />
        </a>
      </button>
      <button className="whatsApp mx-2 border rounded-5 p-2">
        <a href="https://api.whatsapp.com/send?phone=+918956101181&text=Hello">
          <FaWhatsapp className="text-success" style={{fontSize: "40px"}}/>
        </a>
      </button>
      {isVisible && (
        <button className="arrowUp mx-2 border bg-black rounded-5 p-2" onClick={scrollToTop}>
          <AiOutlineArrowUp className="text-white " style={{fontSize: "40px"}} />
        </button>
      )}
    </div>
  );
};

export default FixedButton;

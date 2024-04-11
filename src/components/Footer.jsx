import { BiPhone } from 'react-icons/bi'
import { FaMapLocationDot } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'

const Footer = () => {
  return (
      <div className="container-fluid bg-black py-3 ">
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-lg-0 mb-3">
            <a href="tel:+918830826434" className='text-white d-flex align-items-center'>
              <BiPhone style={{ marginRight: '5px' }} /> +91 8830826434
            </a>
          </div>
          <div className="col-lg-4 col-md-12 mb-lg-0 mb-3">
            <a href="mailto:info@elioratechno.com" className='text-white d-flex align-items-center'>
              <IoIosMail style={{ marginRight: '5px' }} /> info@elioratechno.com
            </a>
          </div>
          <div className="col-lg-4 col-md-12">
            <p className='text-white d-flex align-items-center mb-0'>
              <FaMapLocationDot style={{ marginRight: '5px' }} /> Trimurtee Nagar, Nagpur, Maharashtra 440022
            </p>
          </div>
        </div>
      </div>

  )
}

export default Footer

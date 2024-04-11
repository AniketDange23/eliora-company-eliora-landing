const HomePage = () => {
  return (
    <div className="container-fluid  home  d-flex justify-content-center align-items-center">
      <div className="row m-5">
        <div className="col-lg-6">
          <div className="text-content">
            <h2>Create Your Website    
                   
</h2> <h1 className="zoom-in-out-box text-center zoom-in-out-box">₹6999</h1>
            <div className="offering">
              <h3 className="mt-3 mx-4">Offering</h3>
            <ul>
              <li>Domain</li>
              <li>Hosting</li>
              <li>SSL</li>
              <li>Business Email</li>
              <li>E-commerce Solutions</li>
              <li>Admin Panel</li>
              <li>SEO Friendly</li>
              <li>Responsive</li>
              <li>Custom Development</li>
            </ul>  </div>
          <a href="#contact">       
               <button className="shadow__btn mx-5" > Contact Us</button>
</a>
          </div>
        </div>
        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <img src="/img.png" alt="" className="img-fluid" style={{width: "500px", height: "auto" }} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

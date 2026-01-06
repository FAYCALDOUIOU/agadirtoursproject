import './Booking.css'
function Booking(){
    return(
        <section className="booking-info">
            <img src="https://3.bp.blogspot.com/-D5OMaJbcU10/VHH1ufr9IJI/AAAAAAAACRY/7hJ0JttfyYg/s1600/morocco_wallpaper_1080p.jpg" alt=" agadir city"  />

  <h1>Booking Infos</h1>

  <div className="form">
    <label>Full Name:</label>
    <input type="text" placeholder="Enter Your Name" />
  </div>

  <div className="form">
    <label>Phone Number:</label>
    <input type="tel" placeholder="Your Phone Number" />
  </div>

  <div className="form">
    <label>Email Address:</label>
    <input type="email" placeholder="Your Email Address" />
  </div>

  <div className="form">
    <label>Your Hotel or Residence Address:</label>
    <input type="text" placeholder="Your Hotel or Residence Address" />
  </div>

  <div className="form">
    <label>Room Number:</label>
    <input type="text" placeholder="Your Room Number" />
    <small>This information will be used to contact you for pick up</small>
  </div>

  <div className="form">
    <label>Pick up date:</label>
    <input type="date" />
  </div>

  <div className="form">
    <label>Pick up time:</label>
    <input type="time" defaultValue="08:30" />
  </div>

  <div className="form">
    <label>Persons number:</label>
    <input type="number" min="1" defaultValue="1" />
  </div>

  <div className="form-group total-price">
    <label>Total price :</label>
    <p>€ 10.00</p>
  </div>

  <div className="form">
    <label>Message:</label>
    <textarea placeholder="Your message"></textarea>
  </div>
  <button>Book Now</button>

</section>

    )
}
export default Booking
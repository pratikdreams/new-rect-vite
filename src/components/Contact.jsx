import React from 'react'
import './Contact.css'

export default function Contact() {
  return (
    <div>
       <section className="ccf">
        <div className="containercc">
         <div className='c-anim'>
         <h1 className="main-heading text-light">Get In Touch</h1>
         <p className="subtitlecc ps-md-3 pe-md-3 text-light" >We are here to help and answer any question you might have. We look forward to hearing from you.</p>
         </div>
          <div className="contact-infocc">
            <div className="email-section text-light " data-aos="fade-right">
              <h2 className="subcc text-light">Email Us</h2>
              <p className="contact-detailcc">support@jstemplate.net</p>
              <p className="contact-detailcc">info@jstemplate.net</p>
            </div>
            <div className="office-section text-light" data-aos="fade-left">
              <h2 className="subcc text-light">Office Location</h2>
              <p className="contact-detailcc">B-29/A Mailbagh Chowdhury Para, Dhaka-1219, Bangladesh</p>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-row ">
              <div className="form-group form-group-half" >
                <label htmlFor="name" className="form-labelcc text-light mt-1">Your Name</label>
                <input type="text" id="name" className="form-inputcc ip-con" placeholder="Your name" />
              </div>
              <div className="form-group form-group-half">
                <label htmlFor="email" className="form-labelcc fl-b text-light pt-2">Your Email</label>
                <input type="email" id="email" className="form-inputcc form-ll mt-2" placeholder="example@gmail.com" />
              </div>
            </div>
            <div className="form-group form-group-full">
              <label htmlFor="product" className="form-labelcc text-light">Product Name</label>
              <input type="text" id="product" className="form-inputcc ip-con" placeholder="Write product name" />
            </div>
            <div className="form-group form-group-full">
              <label htmlFor="message" className="form-labelcc text-light ">Your Message</label>
              <textarea id="message" className="form-textarea mt-2" placeholder="Write your message..." defaultValue={""} />
            </div>
            <button type="submit" className="submit-button-con">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  )
}

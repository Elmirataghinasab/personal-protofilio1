import React , {useRef} from 'react'
import "./client.css"
import emailjs from '@emailjs/browser'
import c1 from "../../assets/youtube.png"
import c2 from "../../assets/twitter.png"
import c3 from "../../assets/instagram.png"
import c4 from "../../assets/facebook-icon.png"


import c21 from "../../assets/adobe.png"
import c22 from "../../assets/facebook.png"
import c23 from "../../assets/microsoft.png"
import c24 from "../../assets/walmart.png"


const Client = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_elmira', 'template_kyrx6ib', form.current, {
        publicKey: 'pZa80CcKNRIhsVHX0',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert("email sent!");
          //to reset the boxes
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <section id="Clientandcontact">
      <div id="myClient">
        <h1 className="myclient">My Clients</h1>
        <p className="prgrf">description</p>
        <div className="clintimgs">
          <img src={c21} alt="" className="imgss" />
          <img src={c22} alt="" className="imgss" />
          <img src={c23} alt="" className="imgss" />
          <img src={c24} alt="" className="imgss" />
        </div>
      </div>


      
      <div id="contactme">
        <h2 className="ContactMe">
          Contact Me
        </h2>
        <p className="prgrfff">description</p>
        <form action="" className="contactform" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='YourName' name='from_name'/>
          <input type="email" className="email" placeholder='YourEmail' name='your_email' />
            <textarea 
            name="message" className="txtarea"
            rows="5" placeholder='YourMessage'>
            </textarea>
            <button type='submit' value="send" className="submitbutton">
              submit
            </button>
            <div className="links">
              <img src={c1} alt="" className="link" />
              <img src={c2} alt="" className="link" />
              <img src={c4} alt="" className="link" />
              <img src={c3} alt="" className="link" />
            </div>
        </form>
      </div>
    </section>
    
  )
}

export default Client
//dont forget to import images
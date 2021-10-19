import React from "react";
import s from "./footerDown.module.css";
import visa from '../imgFooter/visa.jpg';
import masterKard from '../imgFooter/masterKard.jpg';
import discover from '../imgFooter/discover.jpg';
import amx from '../imgFooter/amx.jpg';
import logoDarck from '../imgFooter/logoDarck.png';

const FooterDown = () => {
  const columnItems = [
    { href: ["F. A. Q.", "About us", "Beat my price", "Impact"] },
    { href: ["Contacts", "Testimonials", "Terms and Conditions", "Privacy Policy"] },
    { href: ["Facebook", "Instagram", "Youtube", "Linkedin"] },
    {
      href: [<img src={visa} alt="visa" />,
      <img src={masterKard} alt="masterKard" />,
      <img src={discover} alt="discover" />,
      <img src={amx} alt="amx" />]
    },
  ]


  return (
    <div className={s.footerDown}>
      <div className={s.fooDown1280}>
        <div className={s.fDown_column}>

          {
            columnItems.map(link => <nav className={s.___columnItems}>
              <a href="#">{link.href[0]}</a>
              <a href="#">{link.href[1]}</a>
              <a href="#">{link.href[2]}</a>
              <a href="#">{link.href[3]}</a>
            </nav>)
          }



        </div>

        <h6>*All the fares provided by Priority Flyers agents are provided are in USD and include all the applicable taxes, fees and other surcharges. That means that all the prices are per person, based on economy class weekday travel (Monday - Thursday) from the USA, and depend on the chosen class of service, departure city, airline and the routing. Kindly note that some airlines may impose additional baggage charges. The fares are subject to seat availability in the corresponding booking. As the seats are limited they may not be available on all flights and dates. The fares are non-refundable, non-exchangeable, and non-transferable. All fares are subject to change or withdrawal without notice. Likewise, other restrictions may be applied. Consider that the less restrictive fares are available at different rates. Please call Priority Flyers for the best ongoing prices and any guidance needed.
        </h6>

        <img className={s.fooDown1280IMG} src={logoDarck} alt="logoDarck" />

        <nav className={s.fooDown1280Nav}>
          <a>Customer Service</a>
          <a>Terms & Conditions</a>
          <a>Privacy Policy</a>
        </nav>
      </div>
    </div>
  );
};

export default FooterDown;





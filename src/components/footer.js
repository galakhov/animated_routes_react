import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from 'react-fa';

export default class Footer extends Component {
	render() {
		return (
     <footer className="footer">
       <div className="container d-flex justify-content-end ">
         <div className="mr-auto p-2 flex-sm-column">
           <nav>
             <ul className="d-flex flex-row">
               <li className="nav-item pr-2">
                 <NavLink className="nav-link" to="/contact">Kontakt</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/contact">Imressum</NavLink>
               </li>
             </ul>
           </nav>
         </div>
         <div className="p-2 flex-sm-column">
           <nav className="social">
             <ul className="d-flex flex-row">
               <li className="pr-1"><a href="#"><Icon name="youtube-play" /></a></li>
               <li className="pr-1"><a href="#"><Icon name="google-plus" /></a></li>
               <li className="pr-1"><a href="#"><Icon name="twitter" /></a></li>
               <li className="pr-1"><a href="#"><Icon name="facebook" /></a></li>
               <li><a href="#"><Icon name="instagram" /></a></li>
             </ul>
           </nav>
         </div>
         <div className="p-2 flex-sm-column">
           <nav>
             <ul className="d-flex flex-row">
               {
                 /*
                 <li className="pr-1"><a href="#"><span className="flag-icon flag-icon-de"></span></a></li>
                 <li className="pr-1"><a href="#"><span className="flag-icon flag-icon-gb"></span></a></li>
                 <li className="pr-1"><a href="#"><span className="flag-icon flag-icon-cn"></span></a></li>
                 <li className="pr-1"><a href="#"><span className="flag-icon flag-icon-ru"></span></a></li>
                 <li className="pr-1"><a href="#"><span className="flag-icon flag-icon-sa"></span></a></li>
                 <li><a href="#"><span className="flag-icon flag-icon-mq"></span></a></li>
                 */
               }
             </ul>
           </nav>
         </div>
       </div>
     </footer>
		)
	}
}

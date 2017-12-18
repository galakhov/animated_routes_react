import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from 'react-fa';

export default class Footer extends Component {
	render() {
		return (
     <footer className="footer">
       <div className="container d-flex justify-content-end">
         <div className="w-100 p-2 flex-sm-column">
           <nav className="w-100 footer-nav">
             <ul className="d-flex flex-row mx-auto">
               <li className="nav-item pr-2">
                 <NavLink className="nav-link" data-toggle="modal" to="#contact_form">Kontakt</NavLink>
               </li>
               <li className="nav-item">
                 <NavLink className="nav-link" to="/impressum">Imressum</NavLink>
               </li>
             </ul>
           </nav>
         </div>
         <div className="p-2 flex-sm-column">
           {
						 /*
						 <nav className="social">
	             <ul className="d-flex flex-row">
	               <li className="pr-1"><a href="#"><Icon name="youtube-play" /></a></li>
	               <li className="pr-1"><a href="#"><Icon name="google-plus" /></a></li>
	               <li className="pr-1"><a href="#"><Icon name="twitter" /></a></li>
	               <li className="pr-1"><a href="#"><Icon name="facebook" /></a></li>
	               <li><a href="#"><Icon name="instagram" /></a></li>
	             </ul>
	           </nav>
						 */
					 }
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

			 <div className="modal fade text-dark" id="contact_form">
				 <div className="modal-dialog">
					 <div className="modal-content">
						 <div className="modal-header bg-dark">
							 <h5 className="modal-title text-white" id="contactModalTitle" >
								 Kontakt Formular
							 </h5>
							 <button type="button" className="close text-white" data-dismiss="modal" aria-label="Close">
						 <span aria-hidden="true">&times;</span>
					 </button>
						 </div>
						 <div className="modal-body">
							 <form>
								 <div className="form-group">
									 <label htmlFor="name">Name</label>
									 <input type="text" className="form-control" />
								 </div>
								 <div className="form-group">
									 <label htmlFor="name">Vorname</label>
									 <input type="text" className="form-control" />
								 </div>
								 <div className="form-group">
									 <label htmlFor="email">E-mail</label>
									 <input type="email" className="form-control" />
								 </div>
								 <div className="form-group">
									 <label htmlFor="tel">Telephone</label>
									 <input type="tel" className="form-control" />
								 </div>
								 <div className="form-group">
										 <label htmlFor="cachricht">Nachricht</label>
										 <textarea className="form-control"></textarea>
								 </div>
							 </form>
						 </div>
						 <div className="modal-footer">
							 <button type="submit" className="btn btn-primary btn-block" value="Senden">Senden</button>
						 </div>
					 </div>
				 </div>
			 </div>
     </footer>
		)
	}
}

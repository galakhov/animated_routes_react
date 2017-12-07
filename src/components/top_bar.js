import React, { Component } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from "react-router-dom";

export default class TopBar extends Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: true
		};
	}
	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<div className="top-bar">
			<Navbar color="faded" fixed="right" light toggleable>
				<NavbarBrand className="pt-5" href="/"><img src="images/logo-rbu.png" alt="RBU Germany Logo" /></NavbarBrand>
				<Collapse isOpen={this.state.isOpen} navbar>
					<Nav vertical className="col col-sm-4 col-lg-9 col-sm-offset-1 navbar-expand-md fixed-top pl-5 pt-4 navbar-right" navbar>
						<div className="container">
							<NavItem>
								<NavLink exact to="/" className="nav-link js-scroll-trigger">Home</NavLink>
							</NavItem>
							{
								/*
								<NavItem>
									<NavLink className="nav-link" to="/projects">Leistungsspektrum</NavLink>
								</NavItem>
								*/
							}
							<NavItem>
								<NavLink className="nav-link" to="/rbu-thermo-lock">RBU Thermo-Lock</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/ultra-clean">Ultra Clean</NavLink>
							</NavItem>
							<NavItem>
								<NavLink className="nav-link" to="/unsere-klappen">Unsere Klappen</NavLink>
							</NavItem>
							{
								/*
								<NavItem>
									<NavLink className="nav-link" to="/contact" data-toggle="modal" href="#contact_form">Kontakt</NavLink>
								</NavItem>
								*/
							}
						</div>
					</Nav>
				</Collapse>
				<NavbarToggler right onClick={this.toggle} />
			</Navbar>
			{
			/*
			<nav className="navbar navbar-expand-md fixed-top pt-2">
				<div className="container">
					<NavLink exact className="navbar-brand" to="/"><img src="images/logo-rbu.png" alt="RBU Germany Logo" /></NavLink>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarCollapse">
								<ul className="navbar-nav ml-auto navbar-right">
									<li className="nav-item">
										<NavLink exact to="/" className="nav-link js-scroll-trigger">Home</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/projects">Leistungsspektrum</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/firm">Unternehmen</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/branchen">Branchen</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/downloads">Downloads</NavLink>
									</li>
									<li className="nav-item">
										<NavLink className="nav-link" to="/contact" data-toggle="modal" href="#contact_form">Kontakt</NavLink>
									</li>
								</ul>
							</div>
				</div>
			</nav>
			*/
			}
			</div>
		)
	}
}

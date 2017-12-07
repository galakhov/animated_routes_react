import React, { Component } from "react";
import PropTypes from 'prop-types';

class Impressum extends Component {
	componentDidMount() {
		// document.body.classList.toggle('subpage', this.props.isSet);
		document.body.classList.add('subpage4');
	}
	componentWillReceiveProps(nextProps) {
		// document.body.classList.toggle('subpage', nextProps.isSet);
	}
	componentWillUnmount() {
		document.body.classList.remove('subpage4');
	}

	render() {
		return (
			<div className="page text-center">
				<div className="container content h-100">
					<div className="content-top row h-50">
						<div className="col-md-12 mt-5 pt-4 pr-5 pl-0 product-showcase">
								<img className="responsive" width="480px" alt="Responsive image" src="/images/image2.png" alt="Produktbild" />
						</div>
						<div className="steigerung col-lg-5 pl-0">
							<div className="col-md-12 mt-1 text-left pl-3">
								<h3 className="title h5">Impressum</h3>
								<p><strong>RBU GmbH & Co. KG</strong><br />
								Hermann-Klammt Straße 7<br />
								D-41460 Neuss</p>
							 	<p>Tel.: +49 (0) 2131 / 3 68 40-0<br />
								Fax: +49 (0) 2131 / 3 68 40-29</p>
								<p><a href="mailto:info@rbu-germany.com">info@rbu-germany.com</a><br />
								<a href="http://schffstechnik.rbu-germany.com">schffstechnik.rbu-germany.com</a></p>
								<p>Verantwortlich für die Veröffentlichung der Inhalte auf dieser Website:
RBU GmbH & Co. KG, Hermann-Klammt-Straße 7, D–41460 Neuss,<br />Tel. : +49 (0) 2131 / 3 68 40-0</p>
								<p>Geschäftsführer: Dipl. Ing. Andreas Harmes<br />Eingetragen beim Registergericht Neuss,<br />KG: HRA 7016, GmbH: HRB 16028<br />USt-Id.Nr.: DE-154082864</p>
								<p>Die Nutzung sämtlicher Inhalte dieser Website bleibt ausschließlich der RBU GmbH & Co. KG vorbehalten.</p>
							</div>
						</div>
						<div className="col-sm-12 pl-0 pr-0 content-down text-center">
								<h1 className="title display-5">Impressum</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Impressum.propTypes = {
	isSet: PropTypes.bool,
}
Impressum.defaultProps = {
	isSet: false,
}

export default Impressum;

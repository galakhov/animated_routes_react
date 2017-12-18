import React, { Component } from "react";
import PropTypes from 'prop-types';

class ThermoLock extends Component {
	componentDidMount() {
		// document.body.classList.toggle('subpage', this.props.isSet);
		document.body.classList.add('subpage1');
	}
	componentWillReceiveProps(nextProps) {
		// document.body.classList.toggle('subpage', nextProps.isSet);
	}
	componentWillUnmount() {
		document.body.classList.remove('subpage1');
	}

	render() {
		return (
			<div className="page text-center">
				<div className="mt-0 pt-2 pl-0 product-showcase">
					<img className="responsive" width="480" alt="Responsive image" src="/images/image2.png" alt="image to be defined" />
				</div>
				<div className="container content h-50">
					<div className="row h-100 w-100">
						<div className="steigerung col-lg-6 pl-3">
							<div className="col-md-10 mt-1 ml-3 text-left pl-0 mb-2">
								<h3 className="title h5">Thermo Lock</h3>
								<p>RBU Klappen verhindern das schnelle Auskühlen von Kesselanlage und Hauptmaschine über den offenen Abgaskanal des Schiffsmotors. Sobald der Brenner stoppt und das Gebläse sich ausschaltet, schließt die Klappe automatisch und die Temperatur wird länger im System gehalten. Der Vorteil: eine signifikante Brennstoffersparnis!</p>
							</div>
						</div>
						<div className="col-sm-12 pl-0 pr-0 content-down text-center">
								<h1 className="title display-5">RBU THERMO-LOCK</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

ThermoLock.propTypes = {
	isSet: PropTypes.bool,
}
ThermoLock.defaultProps = {
	isSet: false,
}

export default ThermoLock;

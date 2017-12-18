import React, { Component } from "react";
import PropTypes from 'prop-types';

class Clean extends Component {
	componentDidMount() {
		// document.body.classList.toggle('subpage', this.props.isSet);
		document.body.classList.add('subpage3');
	}
	componentWillReceiveProps(nextProps) {
		// document.body.classList.toggle('subpage', nextProps.isSet);
	}
	componentWillUnmount() {
		document.body.classList.remove('subpage3');
	}

	render() {
		return (
			<div className="page text-center">
				<div className="mt-0 pt-2 pr-5 pl-0 product-showcase">
						<img className="responsive" alt="Responsive image" src="/images/image2.png" alt="image to be defined" />
				</div>
				<div className="container content h-50">
					<div className="row h-100 w-100">
						<div className="steigerung col-lg-12 pl-0">
							<div className="col-sm-12 col-md-4 mt-1 text-left pl-0 mb-2">
								<h3 className="title h5">Ultra Clean</h3>
								<p>Spezielle RBU Regel- und Absperrklappen sind in den Abgasreinigungsanlagen (Scrubber) auf Schiffen seit vielen Jahren erfolgreich im Einsatz und ermöglichen eine deutliche Unterschreitung der Emissionsgrenzwerte.</p>
							</div>
						</div>
						<div className="col-sm-12 pl-0 pr-0 content-down text-center">
								<h1 className="title display-5">Ultra Clean</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Clean.propTypes = {
	isSet: PropTypes.bool,
}
Clean.defaultProps = {
	isSet: false,
}

export default Clean;

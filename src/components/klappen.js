import React, { Component } from "react";
import PropTypes from 'prop-types';

class Klappen extends Component {
	componentDidMount() {
		// document.body.classList.toggle('subpage', this.props.isSet);
		document.body.classList.add('subpage');
	}
	componentWillReceiveProps(nextProps) {
		// document.body.classList.toggle('subpage', nextProps.isSet);
	}
	componentWillUnmount() {
		document.body.classList.remove('subpage');
	}

	render() {
		return (
			<div className="page text-center">
				<div className="container content h-100">
					<div className="content-top row h-100 w-100">
						<div className="steigerung col-lg-12 pl-0">
							<div className="col-md-12 mt-5 pt-4 pr-5 pl-0 product-showcase">
									<img className="responsive" width="480px" alt="Responsive image" src="/images/image2.png" alt="image to be defined" />
							</div>
							<div className="col-sm-12 col-md-8 mt-1 text-left pl-0">
								<h3 className="title h5">Ultra Clean</h3>
								<ul>
									<li>RBU Regelklappen: ein- oder mehrflügelig, nach Anforderung durchschlagend, für kontinuierliche Regelung oder mit Dichtleisten für hohe Dichtheit im geschlossenen Zustand</li>
									<li>RBU Sicherheitsklappen: mit selbstlösendem Gegengewicht im Störfall – unter allen Bedingungen sicheres Schließen/Öffnen der Klappe</li>
									<li>RBU Doppelabsperrklappen mit Sperrluftstation: Zwischenraum Warmluftbeaufschlagung für Überdruck – garantiert kein Austritt von Rauchgas (optional mit inertisierter Luft)</li>
								</ul>

								<p>RBU Klappen sind temperaturstabil bis 500 °C und zertifiziert nach Type Approval des DNV GL für den Einsatz auf Seeschiffen. Um stets die größtmögliche Sicherheit zu gewährleisten, öffnen und schließen die elektro-pneumatischen Klappen über einen Ebro-Antrieb (ebenfalls mit DNV GL-Zulassung) automatisch – im Notfall können sie aber auch per Handrad mit Positionsanzeige bedient werden.</p>
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

Klappen.propTypes = {
	isSet: PropTypes.bool,
}
Klappen.defaultProps = {
	isSet: false,
}

export default Klappen;

import React, { Component } from "react";
import PropTypes from 'prop-types';

class Firm extends Component {
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
					<div className="content-top row h-100">
						<div className="steigerung col-lg-5 my-auto pl-0">
							<div className="col-md-9 mt-1 text-left pl-0">
								<h3 className="title h5">STEIGERUNG ENERGIEEFFIZIENZ</h3>
								<p>Sprechen wir zunächst nicht über uns. Sprechen wir über Ihre Arbeit.
								Sie haben Aufgabenstellungen. Sie haben Vorstellungen. Sie brauchen Partner die komplexe Zusammenhänge verstehen, branchenübergreifend denken, fachspezifisch handeln und zielgerichtet das zu einem Produkt bringen, was der Markt fordert und Ihrem Unternehmen die Zukunft sichert.
								Der Anteil, den wir beitragen können. Seit 1963 sind wir in der Welt des Druckgusses zu Hause. Ausgehend vom Werkstoff Zinn, haben wir der technologischen Entwicklung folgend, den Schwerpunkt unserer Aktivitäten auf den Zukunftswerkstoff Aluminium gelegt.</p>

							 <p>Die Inhaberschaft garantiert die Stabilität der Geschäftspolitik und setzt die Leitlinien zur konsequenten Ausrichtung aller Aktivitäten auf die Bedürfnisse unserer Kunden. Für Entwicklungs- und Fertigungskompetenz stehen qualifizierte und motivierte Mitarbeiter, die mit Teamgeist und Flexibilität daran arbeiten, die Vorstellungen unserer Kunden umzusetzen.</p>
							</div>
						</div>
						<div className="col-md-5 mt-5 pt-4 pr-5 pl-0 product-showcase">
								<img className="responsive" width="480px" alt="Responsive image" src="/images/image2.png" alt="image to be defined" />
						</div>
						<div className="col-sm-12 pl-0 pr-5 content-down text-center">
								<h1 className="title display-5 mr-5 pr-5">RBU THERMO-LOCK</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Firm.propTypes = {
	isSet: PropTypes.bool,
}
Firm.defaultProps = {
	isSet: false,
}

export default Firm;

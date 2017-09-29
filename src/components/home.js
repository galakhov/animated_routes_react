import React, { Component } from "react";
import PropTypes from 'prop-types';

class Home extends Component {
	componentDidMount() {
		// document.body.classList.toggle('homepage', this.props.isSet);
		document.body.classList.add("homepage");
	}
	componentWillReceiveProps(nextProps) {
		// document.body.classList.toggle('homepage', nextProps.isSet);
	}
	componentWillUnmount() {
		document.body.classList.remove('homepage');
	}

	render() {
		return (
			<div className="page home text-center">
				<div className="showcase mx-auto" style={{width: '600px'}}>
					<div className="content__image rounded">
						<img className="img-fluid align-middle hidden-xs-down" alt="Responsive image" src="images/image1.png" alt="image to be defined" />
					</div>
					<div className="content sprechen">
						<p className="mx-auto col-sm-8">Sprechen wir zunächst nicht über uns. Sprechen wir über Ihre Arbeit.
		Sie haben Aufgabenstellungen. Sie haben Vorstellungen. Sie brauchen Partner die komplexe Zusammenhänge verstehen, branchenübergreifend</p>
					</div>
				</div>
				<div className="col-sm-12 pl-0 pr-5 content-down text-center">
					<h1 className="title display-5 mr-5 pr-5">BRANCHEN</h1>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	isSet: PropTypes.bool,
}
Home.defaultProps = {
	isSet: false,
}

export default Home;

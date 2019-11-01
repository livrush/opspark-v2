import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './layout/Header';
import Footer from './layout/Footer';

// Code-splitting is automated for routes
import Home from './pages/Home';

import About from './pages/About';
import Team from './pages/Team';

import Programs from './pages/Programs';
import AdultWorkForce from './pages/AdultWorkForce';
import HighSchool from './pages/HighSchool';
import AdultWorkforce from './pages/AdultWorkForce';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		if (!e.url.includes('/team?mate')) {
			window.scroll(0, 0);
		}
		this.currentUrl = e.url;
	};

	render() {
		document.title = 'Operation Spark';
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<About path="/about" />
					<Team path="/team" />
					<Programs path="/programs" />
					<AdultWorkforce path="/adult-workforce" />
					<HighSchool path="/high-school" />
				</Router>
				<Footer />
			</div>
		);
	}
}

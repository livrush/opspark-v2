import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './layout/Header';
import Footer from './layout/Footer';

// Code-splitting is automated for routes
import Home from './pages/Home';

import About from './pages/About';
import Team from './pages/Team';

import Programs from './pages/Programs';
import AdultWorkforce from './pages/AdultWorkforce';
import HighSchool from './pages/HighSchool';

import Contact from './pages/Contact';

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
					
					{/* About */}
					<About path="/about" />
					<Team path="/team" />
					
					{/* Programs */}
					<Programs path="/programs" />
					<AdultWorkforce path="/workforce" />
					<HighSchool path="/high-school" />

					{/* Contact */}
					<Contact path="/contact" />
				</Router>
				<Footer />
			</div>
		);
	}
}

import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './layout/Header';
import Footer from './layout/Footer';

// Code-splitting is automated for routes
import Home from './pages/Home';
import History from './pages/History';
import Team from './pages/Team';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		window.scroll(0, 0);
		this.currentUrl = e.url;
	};

	render() {
		document.title = 'Operation Spark';
		return (
			<div id="app">
				<Header />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Team path="/team" />
					<History path="/about" />
					<History path="/history" />
				</Router>
				<Footer />
			</div>
		);
	}
}

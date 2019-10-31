import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './layout/Header';
import Button from './components/Button';
import Footer from './layout/Footer';

// Code-splitting is automated for routes
import Home from './pages/Home';
import Team from './pages/Team';
import Profile from './pages/Profile';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
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
					{/* <Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" /> */}
				</Router>
				<Footer />
			</div>
		);
	}
}

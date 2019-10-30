import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './layout/Header';
import Button from './components/Button';

// Code-splitting is automated for routes
import Home from './pages/Home';
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
				<Button>Try me</Button>
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
				</Router>
			</div>
		);
	}
}

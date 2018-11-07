import React, {
	Component
} from 'react';
import './App.css';
import './components/Clock.css';
import './components/Greeting.css';
import Clock from './components/Clock.js';
import Greeting from './components/Greeting.js';

class App extends Component {
	overlay = false;
	enterFunction(event) {
		if (event.key === '?') {
			this.props.overlay = !this.props.overlay;
			console.log("this.props.overlay: " + this.props.overlay);
		}
	}

	componentDidMount() {
		document.title = "New Tab";
		document.addEventListener("keydown", this.enterFunction, false);
	}

	render() {
		if (!this.overlay) {
			return (
				<div className="App">
					<header className="App-header">
					<Clock />
					<Greeting />
					<h2>this.overlay: {this.overlay.toString()}</h2>
					</header>
				</div>
			)
		}
	}
}

export default App;

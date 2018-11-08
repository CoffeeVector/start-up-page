import React, {
	Component
} from 'react';
import './App.css';
import './components/Clock.css';
import './components/Greeting.css';
import './components/Schedule.css';
import Clock from './components/Clock.js';
import Greeting from './components/Greeting.js';
import Schedule from './components/Schedule.js';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		}
	}
	componentDidMount() {
		document.title = "New Tab";
		window.addEventListener('keydown', this.handleKey);
	}

	componentWillUnmount() {
		window.myDiv.removeEventListener('keydown', this.handleKey);
	}

	handleKey = e => {
		if (e.key === '?') {
			this.setState({
				show: !this.state.show
			});
		}
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					{this.state.show ? '':(<Clock />)}
					{this.state.show ? '':(<Greeting />)}
					{this.state.show ? (<Schedule />):''}
				</header>
			</div>
		)
	}
}

export default App;

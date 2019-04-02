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
		document.title = "New Tab"; window.addEventListener('keydown', this.handleKey);
	}

	componentWillUnmount() {
		window.myDiv.removeEventListener('keydown', this.handleKey);
	}

	handleKey = e => {
		if (e.key === '?') {
			this.setState({
				showSchedule: !this.state.showSchedule
			});
		} else if (e.key === '/') {
			this.setState({
				showDaySchedule: !this.state.showDaySchedule
			});
		}
	}

	render() {
		var d = new Date().getDay();
		return (
			<div className="App">
				{this.state.showSchedule ? '':<div className="ClockGreeting"><Clock/><Greeting/></div>}
				{!this.state.showSchedule && this.state.showDaySchedule && d >= 1 && d <= 5? <div className="Column"><Schedule day={d}/><Schedule day={(d === 7) ? 0: d + 1}/></div>: ''}
				{this.state.showSchedule ? (<Schedule/>) : ''}
			</div>
		);
	}
}

export default App;

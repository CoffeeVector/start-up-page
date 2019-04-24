import React, {
	Component
} from 'react';

class Greeting extends Component {

	constructor(props) {
		super(props);

		fetch("res/settings.json").then( (resp) => resp.json()).then( (jsonResp) => this.setState({name: jsonResp.name})).catch(error => {fetch("default-res/settings.json").then( (def_resp) => def_resp.json()).then( (def_jsonResp) => this.setState({name: def_jsonResp.name}))
		});
		this.state = {
			date: new Date(),
			name: ""
		}
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.setState =({
				date: new Date()
			}),
			1000
		);
	}

	render() {
		var d = this.state.date;
		if (7 < d.getHours() && d.getHours() < 11) {
			return (
				<div className="Greeting">
					Good Morning, {this.state.name}
				</div>
			)
		} else if(11 <= d.getHours() && d.getHours() < 17) {
			return (
				<div className="Greeting">
					Good Afternoon, {this.state.name}
				</div>
			);
		} else if(17 <= d.getHours() && d.getHours() < 21) {
			return (
				<div className="Greeting">
					Good Evening, {this.state.name}
				</div>
			);
		} else {
			return (
				<div className="Greeting">
					Good Night, {this.state.name}
				</div>
			);
		}
	}
}

export default Greeting;

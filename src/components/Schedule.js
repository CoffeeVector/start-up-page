import React, {
	Component
} from 'react';

class Schedule extends Component {
	constructor(props) {
		super(props)
		var c = []
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", "res/courses.csv", false);
		rawFile.onreadystatechange = function () {
			if(rawFile.readyState === 4) {
				if(rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					var lines = allText.split("\n");
					lines.pop();
					for(var i = 0; i < lines.length; i++) {
						var cells = lines[i].split(",");
						c.push(cells)
					}
				}
			}
		}
		rawFile.send(null);
		this.state = {
			courses: c
		}
	}

	render() {
		const todayStyle = {
			color: '#f92672',
		};
		const notTodayStyle = {
			color: '#66d9ef',
		};
		var day = new Date().getDay();
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
		this.daySchedule = [];
		this.daySchedule[6] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Saturday</div>
				<div className="Red">Free</div>
			</div>
		);
		this.daySchedule[0] = (
			<div className="DaySchedule">
				<div className="Day" style={day === 1 ? todayStyle:notTodayStyle}>Sunday</div>
				<div className="Red">Free</div>
			</div>
		);
		var key = 0;
		for (var i = 0; i < this.state.courses.length; i++){
			var dc = []
			for (var j = 0; j < this.state.courses[i].length; j+=5) {
				dc.push(
					<div className={this.state.courses[i][j + 1]} key={key++}><big>{this.state.courses[i][j]}</big><br/><span className="Course">{this.state.courses[i][j + 3]}</span><span className="Classroom">{this.state.courses[i][j + 2]}</span><br/><big>{this.state.courses[i][j + 4]}</big></div>
				);
			}
			this.daySchedule[i + 1] = (
				<div className="DaySchedule">
					<div className="Day" style={day === (i + 1) ? todayStyle:notTodayStyle}>{days[i + 1]}</div>
					{dc}
				</div>
			);
		}

		this.sch = (
			<div className="FullSchedule">
				<div>{this.daySchedule[1]}</div>
				<div>{this.daySchedule[2]}</div>
				<div>{this.daySchedule[3]}</div>
				<div>{this.daySchedule[4]}</div>
				<div>{this.daySchedule[5]}</div>
			</div>
		);
		if (this.props.day === undefined) {
			return this.sch;
		} else {
			if(this.props.day <= 5 && this.props.day >=1){
				return this.daySchedule[this.props.day];
			} else {
				return (<div></div>);
			}
		}
	}
}
export default Schedule;

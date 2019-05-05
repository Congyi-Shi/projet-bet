import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Timezone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startTime: null,
            endTime: null,
            duration: null,
        }
    }

    startLearn() {
        console.log(66666);
        const time = new Date();
        this.setState({
            startTime: time.getTime(),
            endTime: null,
            duration: this.state.duration,
        });
    }

    endLearn() {
        const time = new Date();
        this.setState({
            startTime: this.state.startTime,
            endTime: time.getTime(),
            duration: this.state.duration + time.getTime() - this.state.startTime,
        });
    }

    render() {
        return (
            <div>
                <h2 className="title">
                    夏可爱现在是{this.props.date.toLocaleTimeString()}.
                </h2>
                <h3>
                    {this.state.duration? "夏可爱已经学习了" + this.state.duration/1000 + "秒":"夏可（傻）爱（瓜）还没开始学习"}
                </h3>
                <div>
                    <StartButton onClick={
                        () => {
                            this.startLearn()
                        }
                    }/>
                    <EndButton onClick={() => {this.endLearn()}}/>
                </div>
            </div>
        );
    }
}

function StartButton(props){
    return (
        <button className="buttonToClick" onClick={props.onClick}>
            Start Learning
        </button>
    );
}

function EndButton(props){
    return (
        <button className="buttonToClick" onClick={props.onClick}>
            End Learning
        </button>
    );
}

function tick() {
    ReactDOM.render(
      <Timezone date={new Date()} />,
      document.getElementById('root')
    );
  }
setInterval(tick, 1000);
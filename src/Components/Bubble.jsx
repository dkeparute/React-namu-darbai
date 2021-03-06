import { Component } from "react";

class Bubble extends Component {
    constructor({text}) {
        super();
        this.text = text;
        this.state = {
            pop: false,
            color: '#' + Math.floor(Math.random() * 16777215).toString(16),
            number: this.number,
            text:this.text
        }
    }

    componentDidMount() {
    }


    click = () => {
        if (this.state.pop === false) {
            this.setState({
                pop: true,
            });
            this.props.score();
        }

    }

    render() {
        if (this.state.pop === false) {
            return (
                <div className='bubble' onClick={this.click} style={{ backgroundColor: this.state.color, number: this.number }}>
                    <div className='text-design'>{this.state.text}</div>
                </div>
            )
        } else {
            return (
                <div onClick={this.click}></div>
            )
        }
    }

}

export default Bubble;
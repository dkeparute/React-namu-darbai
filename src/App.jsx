import { Component } from "react";
import Bubble from "./Components/Bubble";

class App extends Component {
    constructor(props) {
        super();
        this.state= {
            count: 0
        };
    }

    score = () => {
        this.setState ({
            count: this.state.count +1
        });
    };

    render() {
        return (
            <div>
                <h1>Suma:{this.state.count}</h1>
                <Bubble score={this.score} text={'1'}/>
                <Bubble score={this.score} text={'2'}/>
                <Bubble score={this.score} text={'3'}/>
                <Bubble score={this.score} text={'4'}/>
                <Bubble score={this.score} text={'5'}/>
                <Bubble score={this.score} text={'6'}/>
                <Bubble score={this.score} text={'7'}/>
                <Bubble score={this.score} text={'8'}/>
                <Bubble score={this.score} text={'9'}/>
                <Bubble score={this.score} text={'10'}/>
            </div>
        );
    }
}
export default App;
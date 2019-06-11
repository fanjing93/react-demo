/**
 *   Created by fanjing on 2019-06-11
 */
/*const element = <h1>Hello, 世界!</h1>;
ReactDOM.render(element, document.getElementById('root'));*/

/*function tick() {
    const element = (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {
                new Date().toLocaleTimeString()
            }.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);*/


/*function Clock(props) {
    return (
        <div>
            <h1>Hello, World!</h1>
            <h2>It is {
                props.date.toLocaleTimeString()
            }.</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}/>,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);*/

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount () {
        this.timerID = setInterval( () => this.tick(), 1000);
    }

    componentWillMount () {
        clearInterval(this.timerID);
    }

    tick () {
        this.setState({
            date: new Date()
        })
    }

    render(){
        return (
            <div>
                <h1>Hello, World!</h1>
                <h2>It is {
                    this.state.date.toLocaleTimeString()
                }.</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <Clock/>,
    document.getElementById('root')
)























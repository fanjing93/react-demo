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

/*
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
);
*/

/*

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Sara" />
            <Welcome name="Cahal" />
            <Welcome name="Edite" />
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
*/

/*function formatDate(date) {
    return date.toLocaleTimeString();
}

function Comment(props) {
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img className="Avatar" src={props.author['avatarUrl']} alt={props.author.name}/>
                <div className="UserInfo-name">{props.author.name}</div>
            </div>
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello, Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Comment
        date={ comment.date}
        text={comment.text}
        author={comment.author}/>,
    document.getElementById('root')
);*/


function Avatar(props) {
    return (
        <img className="Avatar" src={props['user']['avatarUrl']} alt={props['user'].name}/>
    );
}

function formatDate(date) {
    return date.toLocaleTimeString();
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user={props['user']}/>
            <div className="UserInfo-name">{props['user'].name}</div>
        </div>
    );
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{formatDate(props.date)}</div>
        </div>
    );
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React !!!!',
    author: {
        name: 'Hello, Kitty',
        avatarUrl: 'https://placekitten.com/g/64/64'
    }
};

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}/>,
    document.getElementById('root')
);












/* 
    STATE AND LIFECYCLE

    - Each component in React has a lifecycle which you can monitor and manipulate
     during its three main phases.

    - The three phases are: Mounting, Updating, and Unmounting.

*/

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  componentDidMount() {
    console.log("Did Mount");
    this.setState({ counter: 10 });
  }

  componentDidUpdate() {
    console.log("Did Update");
    this.setState({ counter: 15 });
  }

  componentWillUnmount() {
    console.log("Will Unmount");
    this.setState({ counter: 20 });
  }

  render() {
    return <h1>Counter {this.state.counter}</h1>; // 20
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

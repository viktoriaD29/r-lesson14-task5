import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './Clock.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        <div>
          {this.state.visible && <Clock location={'New York'} offset={3} />}
          {this.state.visible && <Clock location={'London'} offset={-5} />}
          {this.state.visible && <Clock location={'Kyiv'} offset={11} />}
        </div>
      </>
    );
  }
}

export default App;

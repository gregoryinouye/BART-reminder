import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return <div>THIS IS THE APP</div>
  };
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;

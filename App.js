import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){

    return(
      <div className="app">
        <h3>This is a React Component</h3>
        <p>And it's working {this.props.user}!!!</p>
        <ul>
            {this.props.list.map(item => <li>{item}</li>)}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  user: React.PropTypes.string,
  list: React.PropTypes.array
}

App.defaultProps = {
  user: "Johnson",
  list: []
}


// con props
let user = "Alfredo";
let list = ["Item 1","Item 2","Item 3","Another item"];
ReactDOM.render(<App user={user} list={list}/>,document.getElementById('app'));

// sin props
ReactDOM.render(<App />,document.getElementById('app2'));

export default App;

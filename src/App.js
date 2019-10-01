import React,{Component} from 'react';
import './App.css';
import Result from './components/Result';
import Form from './components/Form';

class App extends Component {

  state = {
    value: 'kas',
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    console.log("Wysłany formularz");
    console.log(e);

  }

  render() {
    return (
      <div className="App">
        <Form
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result out={this.state.value}/>
      </div>
    );
  };
};

export default App;

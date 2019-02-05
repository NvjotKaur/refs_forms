import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
      state={
        name:'',
        age:'',
        city:'',
        studentArray:[]
      }





  render() {
    return (
      <div className="App">
       
        <form>
        <br/>
          Name:
          <input ref={(input) => {this.name=input}} type="text"  onChange={this.studentName}/>

          <br/> <br/>
          Age:
          <input ref={(input) => {this.age=input} } type="text" onChange={this.studentAge} />

          <br/> <br/>
          City:
          <input ref={(input)=> {this.city=input}} type="text" onChange={this.studentCity} />

          <br/> <br/>
          <button onClick={this.addMe}> addStudent </button>
         </form>

      </div>
    );
  }
}

export default App;

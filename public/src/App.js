import './App.css';

import React, { Component } from 'react'
import Navbar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

// introduction to classes in reactjs
export default class App extends Component {
  pageSize=8;
  state={
    progress:0
  }

setProgress=(progress)=>{
  this.setState({progress:progress})
}

  render() {
    return (
      <div>
        <Navbar/>
      <LoadingBar
      height={3}
        color='#f11946'
        progress={this.state.progress}/>
        <News setProgress={this.setProgress} pageSize={this.pageSize} country='us' category="play"/>

      </div>
    )
  }
}

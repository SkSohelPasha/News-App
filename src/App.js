import './App.css';
import React, { Component } from 'react';
import Navbar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import NewsItem from './components/NewsItem';

export default class App extends Component {
  pageSize = 8;

  state = {
    progress: 0
  };

  // Function to update progress bar
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  render() {
    return (
      <div>
        {/* Navbar Component */}
        <Navbar />

        {/* Top Loading Bar */}
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />

        {/* News Component */}
        <News
          setProgress={this.setProgress}
          pageSize={this.pageSize}
          country="us"
          category="general" // change 'general' to any other category like 'sports', 'business', etc.
        />
      </div>
    );
  }
}

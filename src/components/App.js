import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';

export default class App extends React.Component {
  render() { 
    return (
      <div>
        <Header />
        <div style={{minHeight:"88.8%", display:"flex", flexDirection:"column", justifyContent:"space-between"}}>
          <div className="container">
            {this.props.children}
        </div>
          <Footer />
        </div>
      </div>
    )
  }
}
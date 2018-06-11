import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import ProductComponent from './components/ProductComponent';

class App extends Component {
 state = { products: [] };

  componentWillMount(){
         var url ="http://lcboapi.com/products?q=Beaus&where=is_seasonal&per_page=50&access_key=MDphYmE5MDgwZS02ODMzLTExZTgtOTQ5Yi00MzQ4YTIzOGNmMDc6UHN3NndjRGFqQUMyOHA0dFZISmQwa21QWHJOWlk1ZVZCVkpk";
     fetch(url)
      .then(response => response.json())
      .then(r => {
            this.setState({products: r.result});
      })
     .catch(err => console.log('Something went wrong!: ', err))
   }
   
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Beau's All Natural Brewing</h1>
          </header>
          <h2 className="App-intro">
                            Beau's collection of Seasonal beverages
        </h2>
                </div>
      {this.state.products.map(function(product, index){
            console.log(product.name)
            return ( 
            <ProductComponent product={product}/>
            )
       })}
      </div>
       
      
    );
  }
}

export default App;
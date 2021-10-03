import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 12, unit: 'x' }
      ]
    };
    //this.addSomeCarrots = this.addSomeCarrots.bind(this);
  }
      addSomething = (stuff, quantity, unit) => {
        return () => {
          const searchItem = this.state.items.findIndex((element, index, array) => {
            if(element.value === stuff) {
              return true;
            }
            else {
              return false;
            }
          });

          if(searchItem !== -1){let newItems = [...this.state.items];newItems[searchItem].qty += quantity;
            this.setState({ items: newItems });
          }
            else{
              this.setState({items:[...this.state.items,{id:this.state.items.length + 1 , value: stuff, qty: quantity, unit: 'x'}]});
            }
        }
      }
          



  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addSomething('Carrots', 4)}>Add carrots</button>
      <button onClick={this.addSomething('Strawberries', 10)}>Add strawberries</button>
      <button onClick={this.addSomething('Yogurts', 2)}>Add yogurts</button>
      <button onClick={this.addSomething('Beers', 24)}>Add beers</button>
    </div>
  }
}

export default App;
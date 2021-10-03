import React from 'react';
import data from './data.json'
import SearchBar from './components/SearchBar';




class App extends React.Component {
    constructor(props)
    {
      super(props);
      this.state = {
        items: data.items,
        productSearchString: "",
        itemPriceOver200: false ,
        itemPriceLess200: false
      }
    }

    onSearchFieldChange = (event) => {

        console.log('Keyboard event');
        console.log(event.target.value);
        this.setState({ productSearchString: event.target.value });
      }

    render()
  {
     
    let output =
      <>
        <div>
          Search with name <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
        <button onClick={() => this.setState({itemPriceLess200: !this.state.itemPriceLess200})}>Under €200</button>
        <button onClick={() => this.setState({itemPriceOver200: !this.state.itemPriceOver200})}>Over €200</button>
        </div>
        <SearchBar
          items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) }
          />
        
      </>


    if (this.state.itemPriceLess200) {
    output = <>
              <button onClick={() => window.location.reload()}>Cancel</button>
              <SearchBar items={ this.state.items.filter((item) => item.price < 200)}/>
             </>
    }
    if (this.state.itemPriceOver200) {
        output = <>
                  <button onClick={() => window.location.reload()}>Cancel</button>
                  <SearchBar items={ this.state.items.filter((item) => item.price > 200)}/>
                 </>
        }


    return (
      <>
        { output }
      </>
    )
  }
}

export default App;

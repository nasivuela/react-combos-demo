import React, { Component } from "react";
import Combos from "./Combos";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIngredients: [],
      availableIngredients: [],
    };

    this.addAvailableIngredients = this.addAvailableIngredients.bind(this);
    this.handleCombosChange = this.handleCombosChange.bind(this);
  }

  componentDidMount() {
    setTimeout(this.addAvailableIngredients, 1000);
  }

  addAvailableIngredients() {
    const ingredients = [
      "lettuce",
      "tomato",
      "cucumber",
      "carrot",
      "onion",
      "avocado",
      "olive"
    ];

    this.setState({
      selectedIngredients: [ingredients[0]],
      availableIngredients: [...ingredients],
    });
  }

  handleCombosChange(newSelection) {
    this.setState({
      selectedIngredients: newSelection,
    });
  }

  render() {
    const { selectedIngredients, availableIngredients } = this.state;

    console.log(selectedIngredients);
    return (
      <div>
        {!availableIngredients.length ? (
          "Loading ingredients"
        ) : (
            <Combos
              name="ingredients-combo"
              options={availableIngredients}
              selection={selectedIngredients}
              onCombosChange={this.handleCombosChange}
            />
          )}
      </div>
    );
  }
}

export default App;

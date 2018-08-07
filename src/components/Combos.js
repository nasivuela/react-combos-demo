import React, { Component } from "react";
import PropTypes from "prop-types";
import Select from "./Select";

const onlyOneItemInArr = arr => arr.length === 1;
const isLastItemInArr = (ind, arr) => ind === arr.length - 1;
const hasMaxLen = (arr, max) => max === arr.length;

class Combos extends Component {
  constructor(props) {
    super(props);

    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  addItem(e) {
    const { selection, options, onCombosChange } = this.props;
    onCombosChange([
      ...selection,
      options.find(item => selection.indexOf(item) === -1)
    ]);
  }

  removeItem(e) {
    const { selection, onCombosChange } = this.props;
    const itemToRemove = e.target.value;
    const newSelection = selection.filter(item => item !== itemToRemove);

    onCombosChange(newSelection);
  }

  updateItem(indToUpdate) {
    return event => {
      const { value } = event.target;
      const { selection, onCombosChange } = this.props;
      const newSelection = selection.map((item, ind) => {
        return ind === indToUpdate ? value : item;
      });
      onCombosChange(newSelection);
    };
  }

  render() {
    const { name, max, selection, options } = this.props;
    return (
      <div>
        {selection.map((item, ind, arr) => {
          const isAddButton =
            onlyOneItemInArr(arr) ||
            (isLastItemInArr(ind, arr) && !hasMaxLen(arr, max));

          return (
            <div key={ind}>
              <Select
                options={options}
                selected={item}
                id={`${name}-ind`}
                name={`${name}-ind`}
                onChange={this.updateItem(ind)}
                optionsDisabled={arr}
              />
              <button
                onClick={isAddButton ? this.addItem : this.removeItem}
                value={item}
              >
                {isAddButton ? "+" : "-"}
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

Combos.propTypes = {
  name: PropTypes.string.isRequired,
  max: PropTypes.number,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCombosChange: PropTypes.func.isRequired
};

Combos.defaultProps = {
  max: 5
};

export default Combos;

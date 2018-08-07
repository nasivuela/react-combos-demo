import React, { Component } from "react";
import PropTypes from "prop-types";

class Select extends Component {
  render() {
    const {
      options,
      optionsDisabled,
      selected,
      onChange,
      id,
      name,
      ind,
    } = this.props;
    return (
      <select
        value={selected}
        name={name}
        id={id}
        data-ind={ind}
        onChange={onChange}
      >
        {options.map(option => (
          <option
            disabled={optionsDisabled.indexOf(option) !== -1}
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionsDisabled: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  ind: PropTypes.number.isRequired,
};

Select.defaultProps = {
  optionsDisabled: [],
};

export default Select;

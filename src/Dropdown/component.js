import React, { Component } from 'react';

class Dropdown extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  handleOnChange() {
    const val = this.select.value;
    this.props.onChange(val);
  }
  render() {
    const { options, defaultValue } = this.props;
    return (
      <select 
        ref={(input)=> this.select = input}
        defaultValue={defaultValue}
        onChange={this.handleOnChange} 
      >
        {options.map((optionString, i) => {
          return <option key={i} value={optionString}>{optionString}</option>
        })}
      </select>
    )
  }
}

Dropdown.PropTypes = {
  options: React.PropTypes.array.isRequired,
  defaultValue: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export default Dropdown;

import React, { useState, useEffect } from 'react';
import Loading from '../util/Loading'
import Error from '../util/Error'

type Change = (chosen) => void;

type Props = {
  onChange: Change;
  options: any[]
};

export default (props: Props) => {
  console.log('TimeRangeDropdown.props:', props)
  const { onChange, options, defaultValue } = props;

  const [value, setValue] = React.useState(defaultValue);
  useEffect(() => handleChange(defaultValue.name), [defaultValue])

  const handleChange = (newValue) => {
    console.log('TimeRangeDropdown.newValue:', newValue)
    const option = options.find(o => o.name == newValue)
    console.log('TimeRangeDropdown.option:', newValue)
    setValue(option);
    onChange(option)
  };

  return (
    <div>
      <label>
        <select value={value.name} onChange={e => { handleChange(e.target.value)}}>
          {options.map((option, i) => (
            <option key={i} value={option.name}>{option.name}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
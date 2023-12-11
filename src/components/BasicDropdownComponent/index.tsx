import React, { useState, useEffect } from 'react';
import Loading from '../util/Loading'
import Error from '../util/Error'

type Change = (chosen) => void;

type Props = {
  defaultValue: string;
  title: string;
  onChange: Change;
  values: Dimension; // { name, title }
  results: DataResponse; // { isLoading, error, data: [{ <name>: <value>, ... }] }
};

export default (props: Props) => {
  console.log('BasicDropdown.props:', props)
  const { defaultValue, title, onChange, results, labels, values } = props;
  const { isLoading, data, error } = results;

  if(isLoading) {
    return <Loading />
  }
  if(error) {
    return <Error msg={error}/>;
  }

  const NO_VALUE = 'NO_VALUE';

  const [value, setValue] = React.useState(defaultValue);
  useEffect(() => handleChange(defaultValue), [defaultValue])

  const handleChange = (newValue) => {
    console.log('BasicDropdown.newValue:', newValue)
    setValue(newValue);
    onChange(newValue == NO_VALUE ? null : newValue)
  };

  return (
    <div>
      <label>
        {title}
        <select value={value} onChange={e => { handleChange(e.target.value)}}>
            <option value={NO_VALUE}>--no value--</option>
          {data.map((option, i) => (
            <option key={i} value={option[values.name]}>{option[values.name]}</option>
          ))}
        </select>
      </label>
    </div>
  );
}
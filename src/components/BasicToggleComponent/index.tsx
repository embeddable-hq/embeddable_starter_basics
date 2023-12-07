import React, { useState, useEffect } from 'react';

type Change = (boolean) => void;

type Props = {
  defaultValue: boolean;
  label: string;
  onChange: Change;
};

export default (props: Props) => {
  const { defaultValue, label, onChange } = props;
  const [checked, setChecked] = useState(defaultValue)
  useEffect(() => setChecked(defaultValue), [defaultValue])

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  }

  return (
      <label className='basic-toggle-component'>
        <input 
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          />
          {label}
      </label>
    )
}
import React, { useState } from 'react';

type Change = (boolean) => void;

type Props = {
  defaultValue: boolean;
  label: string;
  onChange: Change;
};

export default (props: Props) => {
  const { defaultValue, label, onChange } = props;
  const [checked, setChecked] = useState(defaultValue)

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  }

  return (
      <label>
        <input 
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          />
          {label}
      </label>
    )
}
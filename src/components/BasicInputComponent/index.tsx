import React, { useState } from 'react';

type Change = (text: string) => void;

let timeout: any = null;

type Props = {
  label: string;
  defaultValue: string;
  onChange: Change;
};

export default (props: Props) => {
  const { label, onChange } = props;
  const [value, setValue] = useState('')

  const handleChange = newValue => {
    setValue(newValue);
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      onChange(newValue);
    }, 500);
  }

  return (
      <div className='basic-text-input-component'>
        <label>{label}
          <input
            type="text" 
            value={value}
            onChange={(e) => handleChange(e.target.value)}
          />
        </label>
      </div>
    )
}
import React, { useState, useEffect } from 'react';

type Change = (boolean) => void;

type Props = {
  defaultValue: boolean;
  label: string;
  onChange: Change;
};

export default (props: Props) => {
  console.log('BasicToggleComponent.props', props); 
  const { defaultValue, label, onChange } = props;
  const [checked, setChecked] = useState(defaultValue)
  useEffect(() => setChecked(defaultValue), [defaultValue])

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  }

  return (
      <div className='basic-toggle-container'>
        <button className={checked ? 'on' : 'off'} onClick={handleChange}>
          <span className="pin" />
        </button>
        <label>{label}</label>
      </div>
    )
}
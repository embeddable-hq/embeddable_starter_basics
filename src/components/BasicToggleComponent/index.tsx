import React, { useState, useEffect } from 'react';

type Change = (boolean) => void;

type Props = {
  defaultValue: boolean;
  label: string;
  onChange: Change;
  color: { r: number, g: number, b: number };
};

export default (props: Props) => {
  console.log('BasicToggleComponent.props', props); 
  const { defaultValue, label, onChange, color } = props;
  const [checked, setChecked] = useState(defaultValue)
  useEffect(() => setChecked(defaultValue), [defaultValue])

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange?.(newValue);
  }

  return (
      <div className='basic-toggle-container'>
        <button 
          className={checked ? 'on' : 'off'} 
          style={{ 
            backgroundColor: checked ? `rgb(${color.r}, ${color.g}, ${color.b})` : null }} 
          onClick={handleChange}>
          <span className="pin" />
        </button>
        <label>{label}</label>
      </div>
    )
}
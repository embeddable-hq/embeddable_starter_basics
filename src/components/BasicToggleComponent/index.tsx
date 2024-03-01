import React, { useState, useEffect } from 'react';

type Change = (boolean) => void;

type Props = {
  defaultValue: boolean;
  label: string;
  onChange: Change;
  onColor: { r: number, g: number, b: number },
  offColor: { r: number, g: number, b: number }
};

export default (props: Props) => {
  console.log('BasicToggleComponent.props', props); 
  const { defaultValue, label, onChange, onColor, offColor } = props;
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
          style={{ backgroundColor: checked
            ? `rgb(${onColor.r}, ${onColor.g}, ${onColor.b})`
            : `rgb(${offColor.r}, ${offColor.g}, ${offColor.b})` 
          }} 
          onClick={handleChange}>
          <span className="pin" />
        </button>
        <label>{label}</label>
      </div>
    )
}
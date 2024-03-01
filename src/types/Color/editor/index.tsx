import React, { useState, useEffect } from 'react';

type Color = {r: number, g: number, b: number };
type Change = (color: Color) => void;

type Props = {
  value: Color;
  onChange: Change;
};

export default (props: Props) => {
  const { onChange, value } = props;
  const [color, setColor] = useState(value || { r: 0, g: 0, b: 0 })
  useEffect(() => onChange(color), [color])

  const handleChange = (newValue, component) => {
    let numericValue = Number.parseInt(newValue) || 0;
    if(numericValue > 256) {
      numericValue = 256;
    } else if(numericValue < 0) {
      numericValue = 0;
    }
    const updated = { ...value, [component]: numericValue }
    updated.name = `${updated.r},${updated.g},${updated.b}`;
    setColor(updated);
  }

  return (
      <div>
          <label>R:
            <input
              type="number" 
              min='0'
              max='256'
              value={color.r}
              onChange={(e) => handleChange(e.target.value, 'r')}
            />
          </label>
          <label>G:
            <input
              type="number" 
              min='0'
              max='256'
              value={color.g}
              onChange={(e) => handleChange(e.target.value, 'g')}
            />
          </label>
          <label>B:
            <input
              type="number" 
              min='0'
              max='256'
              value={color.b}
              onChange={(e) => handleChange(e.target.value, 'b')}
            />
          </label>
      </div>
    )
}
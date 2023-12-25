import React, { useState } from 'react';

type Change = (selected: string[]) => void;

type Props = {
  options: string[];
  onChange: Change;
};

export default (props: Props) => {
    const { options, onChange } = props;
    const [selected, setSelected] = useState<string[]>([])

    const handleChange = (option) => {
        const updated = selected.includes(option) 
            ? selected.filter(el => el !== option) 
            : [...selected, option]
        setSelected(updated);
        onChange(updated);
    }

    return (
        <div className='basic-multi-select-component'>
        {options.map((option, i) => (
            <div key={i}>
                <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={e => handleChange(option)}
                />
                {option}
            </div>
            ))}
        </div>
    )
}
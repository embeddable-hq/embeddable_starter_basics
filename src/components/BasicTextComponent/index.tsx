import React from 'react';

type Props = {
  title: string;
  body: string;
};

export default (props: Props) => {
  return (
      <div className='basic-text-component'>
        <h1>{props.title}</h1>
        <div>{props.body}</div>
      </div>
    )
}
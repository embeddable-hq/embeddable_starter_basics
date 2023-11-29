import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  title: string;
  body: string;
};

export default (props: Props) => {
  return (
      <div>
        <h1>{props.title}</h1>
        <div>{props.body}</div>
      </div>
    )
}
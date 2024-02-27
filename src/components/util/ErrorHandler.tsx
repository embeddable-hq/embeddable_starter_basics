import Error from './Error';

import React from 'react';

export default function ErrorHandler({ error }) {
  return <Error msg={error?.message} />;
}

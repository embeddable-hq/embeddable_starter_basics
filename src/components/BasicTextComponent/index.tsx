import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  h1: string;
  h2: string;
};

export default (props: Props) => {
	return (
			<div>
				<h1>{props.h1}</h1>
				<span>{props.h2}</span>
			</div>
		)
}
import React from 'react';

// Define and import types
type DividerProps = {};

const Divider = ({}: DividerProps) => {
	return (
		<div className="w-full h-[1px] border-b border-border border-dashed"></div>
	);
};

export default Divider;

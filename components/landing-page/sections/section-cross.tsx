import React from 'react';

const SectionCross = async () => {
	return (
		<div className={`w-10 h-10 absolute z-40 -top-5 -right-5`}>
			<div className="w-full h-[1px] absolute top-1/2 left-0 bg-accent" />
			<div className="w-[1px] h-full absolute left-1/2 top-0 bg-accent" />
		</div>
	);
};

export default SectionCross;

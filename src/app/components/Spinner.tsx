import Image from 'next/image';
import React from 'react';
import spinner from '../public/spinner.gif';

const Spinner = () => {
	return (
		<>
			<Image
				className="m-auto block w-[200px]"
				src={spinner}
				alt="loading..."
			/>
		</>
	);
};

export default Spinner;

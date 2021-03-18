import React from 'react';

const InputButton = () => {
	return (
		<div class='input-group mb-3'>
			<input
				type='text'
				className='form-control'
				placeholder="Search for any IP address or domain"
				aria-describedby='basic-addon2'
			/>
			<div class='input-group-append'>
				<button className='btn btn-outline-secondary' type='button'>
					Button
				</button>
			</div>
		</div>
	);
};

export default InputButton;

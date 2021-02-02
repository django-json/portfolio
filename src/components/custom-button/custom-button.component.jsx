import React from "react";

import "./custom-button.styles.css";

const CustomButton = ({ className, children, handleClick }) => (
	<button
		className={`btn ${className}`}
		onClick={() => handleClick(children)}
	>
		{children}
	</button>
);

export default CustomButton;

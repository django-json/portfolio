import React from "react";

import "./progress-bar.styles.css";

const ProgressBar = ({ percentage }) => (
	<div className="progress-bar">
		<div
			className="progress-bar__filler"
			style={{ width: `${percentage}%` }}
		/>
	</div>
);

export default ProgressBar;

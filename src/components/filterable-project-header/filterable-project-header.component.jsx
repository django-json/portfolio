import React from "react";

import "./filterable-project-header.styles.css";

import CustomButton from "../../components/custom-button/custom-button.component";

const FilterableProjectHeader = ({ projectTags, handleFilterClick }) => (
	<article className="filterable-project-header container">
		<h1 className="filterable-project-header__heading">{`Projects (${projectTags.length})`}</h1>
		{projectTags.map((tag, index) => (
			<CustomButton
				key={index}
				className="btn--small btn--hover-blue btn--focus-blue btn--type-outline-black btn--text-sm"
				handleClick={handleFilterClick}
			>
				{tag}
			</CustomButton>
		))}
	</article>
);

export default FilterableProjectHeader;

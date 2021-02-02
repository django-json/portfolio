import React from "react";

import "./skills.styles.css";

import ProgressBar from "../progress-bar/progress-bar.component";

const Skills = ({ skills }) => (
	<article className="skills container box-shadow">
		<h2 className="skills__category">{skills.category}</h2>
		<div className="skills__container">
			{skills.details.map((detail, index) => (
				<section key={index} className="skills__item">
					<p className="skills__title">{detail.title}</p>
					<ProgressBar percentage={detail.percentage} />
				</section>
			))}
		</div>
	</article>
);

export default Skills;

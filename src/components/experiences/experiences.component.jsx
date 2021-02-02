import React from "react";

import "./experiences.styles.css";

const Experiences = ({ experiences }) => (
	<article className="experiences container box-shadow">
		<h1 className="experiences__title">Experiences</h1>
		<div className="experiences__container">
			{experiences.map((experience, index) => (
				<section key={index} className="experiences__item">
					<img
						className="experiences__logo"
						src={
							require(`../../assets/${experience.company_logo}`)
								.default
						}
						alt={`${experience.company_name} logo`}
					/>
					<div className="experiences__details">
						<p className="experiences__working-year">
							{experience.working_year}
						</p>
						<h2 className="experiences__job-title">
							{experience.job_title}
						</h2>
						<p className="experiences__job-description">
							{experience.job_description}
						</p>
					</div>
				</section>
			))}
		</div>
	</article>
);

export default Experiences;

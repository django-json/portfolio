import React from "react";

import "./project.styles.css";

const Project = ({ project }) => (
	<article className="project container box-shadow">
		<section className="project__image-container">
			<img
				className="project__image"
				src={require(`../../assets/${project.image}`).default}
				alt={project.title}
			/>
		</section>
		<section className="project__details-container project__details-layout">
			<div className="project__tags">
				{project.tags.map((tag, index) => (
					<p key={index} className="project__tag">
						#{tag}
					</p>
				))}
			</div>
			<div className="project__details">
				<h1 className="project__title">{project.title}</h1>
				<p className="project__description">
					In this project, I work with HTML and CSS to create a
					responsive page. This page is similiar with a page. The
					design is from devchallenge.io
				</p>
			</div>
			<div className="project__btns-wrapper">
				<a className="project__demo" href={project.demo_link}>
					Demo
				</a>
				<a className="project__code" href={project.code_link}>
					Code
				</a>
			</div>
		</section>
	</article>
);

export default Project;

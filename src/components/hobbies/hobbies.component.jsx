import React from "react";

import "./hobbies.styles.css";

const Hobbies = ({ hobbies }) => (
	<article className="hobbies container box-shadow">
		<h1 className="hobbies__heading">Hobbies</h1>
		<div className="hobbies__container">
			{hobbies.map((hobby, index) => (
				<section key={index} className="hobbies__item">
					<div className="hobbies__image-container">
						<img
							className="hobbies__image"
							src={require(`../../assets/${hobby.image}`).default}
							alt={hobby.title}
						/>
					</div>
					<h2 className="hobbies__title">{hobby.title}</h2>
					<p className="hobbies__about">{hobby.about}</p>
				</section>
			))}
		</div>
	</article>
);

export default Hobbies;

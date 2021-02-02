import React from "react";

import "./personal-details.styles.css";

const PersonalDetails = ({ personal_details }) => (
	<article className="personal-details container box-shadow">
		<section className="personal-details__image-container">
			<img
				className="personal-details__photo"
				src={require(`../../assets/${personal_details.image}`).default}
				alt="employee"
			/>
		</section>
		<section className="personal-details__container">
			<div className="personal-details__details">
				<div className="personal-details__column">
					<h1 className="personal-details__name">
						{personal_details.name}
					</h1>
					<p className="personal-details__profession">
						{personal_details.profession}
					</p>
				</div>
				<div className="personal-details__column">
					<div className="personal-details__row">
						<i className="material-icons">email</i>
						<p className="personal-details__email">
							{personal_details.email}
						</p>
					</div>
					<div className="personal-details__row">
						<i className="material-icons">phone</i>
						<p className="personal-details__phone">
							{personal_details.phone}
						</p>
					</div>
				</div>
			</div>
			<div className="personal-details__about-container">
				<p className="personal-details__about">
					{personal_details.about}
				</p>
				<p className="personal-details__about">
					{personal_details.about_more}
				</p>
			</div>
		</section>
	</article>
);

export default PersonalDetails;

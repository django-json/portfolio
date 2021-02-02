import React from "react";

import "./blog.styles.css";

const Blog = ({ blog }) => (
	<article className="blog container box-shadow">
		<header className="blog__header">
			<h1 className="blog__logo">Blog</h1>
		</header>
		<main className="blog__content">
			<section className="blog__info">
				<h1 className="blog__title">{blog.title}</h1>
				<div className="blog__description-container">
					<p className="blog__description">
						{blog.description.paragraph1}
					</p>
					<p className="blog__description">
						{blog.description.paragraph2}
					</p>
				</div>
			</section>
			<section className="blog__image-container">
				<img
					className="blog__image"
					src={require(`../../assets/${blog.image}`).default}
					alt="css blog"
				/>
			</section>
		</main>
		<footer className="blog__footer">
			<a className="blog__website" href={blog.website.link}>
				{blog.website.name}
			</a>
		</footer>
	</article>
);

export default Blog;

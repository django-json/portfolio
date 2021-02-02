import React, { Component } from "react";

import "./projectlist.styles.css";

import ProjectList from "./projectlist.component";

class ProjectListContainer extends Component {
	constructor(props) {
		super(props);

		this.handlePageClick = this.handlePageClick.bind(this);
		this.handleFilterClick = this.handleFilterClick.bind(this);
		this.setCurrentPage = this.setCurrentPage.bind(this);
		this.setFilteredData = this.setFilteredData.bind(this);
		this.getUniqueProjectTags = this.getUniqueProjectTags.bind(this);

		this.state = {
			currentPage: 0,
			data: [],
		};
	}

	componentDidMount() {
		const { projects } = this.props;
		this.setState({ data: projects });
	}

	setCurrentPage(currentPage) {
		this.setState({ currentPage });
	}

	setFilteredData(filteredData) {
		this.setState({ data: filteredData });
	}

	getUniqueProjectTags() {
		const { data } = this.state;
		const uniqueProjectTags = new Set();
		data.forEach((project) => {
			for (let tag of project.tags) {
				uniqueProjectTags.add(tag);
			}
		});
		return uniqueProjectTags ? Array.from(uniqueProjectTags).sort() : null;
	}

	handlePageClick({ selected: selectedPage }) {
		this.setCurrentPage(selectedPage);
	}

	handleFilterClick(value) {
		const { projects } = this.props;
		const filteredData = projects.filter((project) =>
			project.tags.includes(value.toLowerCase())
		);
		this.setFilteredData(filteredData);
	}

	render() {
		const { perPage } = this.props;
		const { currentPage, data } = this.state;
		const offset = currentPage * perPage;
		const currentPageData = data.slice(offset, offset + perPage);
		const pageCount = Math.ceil(data.length / perPage);

		return (
			<ProjectList
				projectNodes={currentPageData}
				pageCount={pageCount}
				projectTags={this.getUniqueProjectTags()}
				handlePageClick={this.handlePageClick}
				handleFilterClick={this.handleFilterClick}
			/>
		);
	}
}

export default ProjectListContainer;

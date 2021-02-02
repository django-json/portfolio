import React, { Fragment } from "react";
import ReactPaginate from "react-paginate";

import "./projectlist.styles.css";

import Project from "../project/project.component";
import FilterableProjectHeader from "../filterable-project-header/filterable-project-header.component";

const ProjectList = ({
	projectNodes,
	pageCount,
	projectTags,
	handlePageClick,
	handleFilterClick,
}) => (
	<Fragment>
		<FilterableProjectHeader
			projectTags={projectTags}
			handleFilterClick={handleFilterClick}
		/>
		<article className="projectlist">
			{projectNodes.map((project, index) => (
				<Project key={index} project={project} />
			))}
		</article>
		<ReactPaginate
			previousLabel={"<"}
			nextLabel={">"}
			pageCount={pageCount}
			pageRangeDisplayed={2}
			marginPagesDisplayed={1}
			onPageChange={handlePageClick}
			containerClassName={"pagination"}
			previousLinkClassName={"pagination__link"}
			nextLinkClassName={"pagination__link"}
			disabledClassName={"pagination__link--disabled"}
			activeClassName={"pagination__link--active"}
		/>
	</Fragment>
);

export default ProjectList;

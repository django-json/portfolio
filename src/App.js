import "./App.css";

import PersonalDetails from "./components/personal-details/personal-details.component";
import Skills from "./components/skills/skills.component";
import Blog from "./components/blog/blog.component";
import Experiences from "./components/experiences/experiences.component";
import Hobbies from "./components/hobbies/hobbies.component";
import Footer from "./components/footer/footer.component";

import ProjectListContainer from "./components/projectlist/projectlist.container";

import { data } from "./data";

function App() {
	return (
		<div className="App">
			<PersonalDetails personal_details={data.personal_details} />
			<Skills skills={data.skills[0]} />
			<Blog blog={data.blogs[0]} />
			<Experiences experiences={data.experiences} />
			<Hobbies hobbies={data.hobbies} />
			<ProjectListContainer projects={data.projects} perPage={3} />
			<Footer />
		</div>
	);
}

export default App;

import React from 'react';
import projectsList from './projects_list'

const getProject = (id) => projectsList.find(project => project.id === id)


const Projects = (props) => {
	const project = getProject(props.id)
	if (!project) {
		return <p>No Project Found</p>
	}
	return (<div>
				<div>{project.name}</div>
				<iframe title={project.name} src={project.url} />
			</div>)
		
}

export default Projects;

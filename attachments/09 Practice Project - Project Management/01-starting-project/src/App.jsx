import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import {useState} from "react";
import SelectedProjects from "./components/SelectedProjects.jsx";

function App() {

    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: []
    });

    function handleSelectProject(id) {
        setProjectsState(prevProjectState => {
            return {
                ...prevProjectState,
                selectedProjectId: id
            }
        });
    }

    function handleStartAddProject() {
        setProjectsState(prevProjectState => {
            return {
                ...prevProjectState,
                selectedProjectId: null
            }
        });
    }

    function handleCancelAddProject() {
        setProjectsState(prevProjectState => {
            return {
                ...prevProjectState,
                selectedProjectId: undefined
            }
        });
    }

    function handleAddProject(projectData) {
        setProjectsState(prevProjectState => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId
            }

            return {
                ...prevProjectState,
                selectedProjectId: undefined,
                projects: [...prevProjectState.projects, newProject]
            }
        })
    }

    function handleDeleteProject() {
        setProjectsState(prevProjectState => {
            return {
                ...prevProjectState,
                selectedProjectId: undefined,
                projects: prevProjectState.projects.filter((project) => project.id !== prevProjectState.selectedProjectId)
            }
        });
    }

    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

    let content = <SelectedProjects project={selectedProject} onDeleteProject={handleDeleteProject}/>;

    if (projectsState.selectedProjectId === null) {
        content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
    } else if (projectsState.selectedProjectId === undefined) {
        content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
    }

    return (
        <main className="h-screen my-8 flex gap-8">
            <ProjectsSidebar onStartAddProject={handleStartAddProject} onSelectProject={handleSelectProject} projects={projectsState.projects}/>
            {content}
        </main>
    );
}

export default App;

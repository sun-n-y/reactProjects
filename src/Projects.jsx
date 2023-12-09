import useFetchProjects from './fetchProjects';

const Projects = () => {
  const { projects, loading } = useFetchProjects();

  if (loading) {
    return <div className="loading"></div>;
  }

  return <div>Projects</div>;
};
export default Projects;

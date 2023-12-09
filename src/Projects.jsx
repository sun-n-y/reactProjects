import useFetchProjects from './fetchProjects';
import { FaGithub } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';

const Projects = () => {
  const { projects, loading } = useFetchProjects();

  if (loading) {
    return (
      <section className="projects">
        <div className="loading"></div>;
      </section>
    );
  }

  return (
    <section className="projects">
      <div className="projects-center">
        {projects.map((item) => {
          const { id, url, img, title, repo } = item;
          return (
            <div key={id} className="project">
              <a href={url} target="_blank" rel="noreferrer">
                <img src={img} alt={title} className="project-img" />
                <h5>{title}</h5>
              </a>
              <a href={repo} target="_blank" rel="noreferrer">
                <FaGithub className="repo-link" />
              </a>
              <a href={url} target="_blank" rel="noreferrer">
                <TbWorldWww className="site-link" />
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Projects;

import { FaGithubSquare } from 'react-icons/fa';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import { TbWorldWww } from 'react-icons/tb';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-center">
        <a
          href="https://github.com/sun-n-y/reactProjects"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <FaGithubSquare className="icon" />
          Source code
        </a>
        <a
          href="https://sunnykp-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          <TbWorldWww className="icon" />
          My Portfolio
        </a>

        <a href="#hero" className="top-btn">
          <BsArrowUpSquareFill className="icon" />
        </a>
      </div>
    </footer>
  );
};
export default Footer;

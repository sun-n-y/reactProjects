import ThemeToggle from './ThemeToggle';
import reactImg from './assets/reactIcon.svg';
import viteImg from './assets/viteIcon.svg';

const Hero = () => {
  return (
    <>
      <section className="hero" id="hero">
        <ThemeToggle />
        <div className="hero-center">
          <div className="hero-title">
            <h1>React Projects</h1>
          </div>
          <div className="img-container">
            <img src={reactImg} className="img" />
            <span>+</span>
            <img src={viteImg} className="img" />
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;

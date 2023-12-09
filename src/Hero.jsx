import heroImg from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>React Projects</h1>
        </div>
        <div className="img-container">
          <img src={heroImg} className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;

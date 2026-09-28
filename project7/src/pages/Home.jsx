function Home() {
  return (
    <div className="home-page">
      <div className="hero-content">
        <p className="welcome">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Manju Priya</span>
        </h1>

        <h2>Computer Science Engineering Student</h2>

        <p className="intro">
          I am a passionate CSE student interested in Artificial Intelligence,
          Data Science, and Software Development. I enjoy learning new
          technologies and building useful projects.
        </p>

        <div className="hero-buttons">
          <a href="#skills">My Skills</a>
          <a href="#about">About Me</a>
        </div>
      </div>

      <div className="hero-card">
        <div className="circle">MP</div>
        <h2>Manju Priya</h2>
        <p>Aspiring Software Engineer</p>
      </div>
    </div>
  );
}

export default Home;
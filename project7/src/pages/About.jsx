// ================================
// src/pages/About.jsx
// ================================

function About() {
  return (
    <div className="about-page" id="about">
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h1>About Me</h1>
      </div>

      <div className="about-container">
        <div className="about-text">
          <h2>I'm Manju Priya</h2>

          <p>
            I am a Computer Science Engineering student who is passionate
            about technology and software development.
          </p>

          <p>
            I am currently developing my programming and problem-solving
            skills while exploring Artificial Intelligence and Data Science.
          </p>

          <p>
            My goal is to become a skilled software engineer and work on
            innovative technology that can solve real-world problems.
          </p>
        </div>

        <div className="about-details">
          <div className="detail-box">
            <h3>Education</h3>
            <p>B.E. Computer Science Engineering</p>
          </div>

          <div className="detail-box">
            <h3>Interests</h3>
            <p>AI • Data Science • Python • Software Development</p>
          </div>

          <div className="detail-box">
            <h3>Goal</h3>
            <p>Become an Aspiring Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
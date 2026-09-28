import React from "react";
import "./Hobbies.css";

import musicImg from "./assets/music.jpg";
import moviesImg from "./assets/movies.jpg";
import travelImg from "./assets/travel.jpg";
import booksImg from "./assets/books.jpg";
import cookingImg from "./assets/Cooking.jpg";
import technologyImg from "./assets/Technology.jpg";

const hobbies = [
  {
    id: 1,
    image: musicImg,
    title: "Listening to Music",
    description: "Helps me relax, stay positive, and focus.",
  },
  {
    id: 2,
    image: moviesImg,
    title: "Watching Movies",
    description: "I enjoy exploring different stories and characters.",
  },
  {
    id: 3,
    image: travelImg,
    title: "Traveling",
    description: "I love discovering new places and cultures.",
  },
  {
    id: 4,
    image: booksImg,
    title: "Reading Books",
    description: "Reading expands my knowledge and imagination.",
  },
  {
    id: 5,
    image: cookingImg,
    title: "Cooking",
    description:
      "I enjoy cooking new recipes and experimenting with different flavors and cuisines.",
  },
  {
    id: 6,
    image: technologyImg,
    title: "Learning New Technologies",
    description:
      "I enjoy exploring web development, AI tools, and programming.",
  },
];

function Hobbies() {
  return (
    <section className="hobbies-section">
      <h2 className="hobbies-heading">My Hobbies</h2>

      <div className="hobbies-grid">
        {hobbies.map((hobby, index) => (
          <div
            key={hobby.id}
            className="hobby-card"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="hobby-image-wrapper">
              <img
                src={hobby.image}
                alt={hobby.title}
                className="hobby-image"
              />
            </div>

            <h3 className="hobby-title">{hobby.title}</h3>

            <p className="hobby-description">
              {hobby.description}
            </p>

            <div className="hobby-accent-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hobbies;
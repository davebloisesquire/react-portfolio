import React from 'react';

function Project({ title, body, image, deployedLink, githubLink }) {
  return (
    <div className="project-card">
      <img src={image} alt={title}/>
      <h2>{title}</h2>
      <p>{body}</p>
      <a href={githubLink}>See on GitHub</a><br/>
      <a href={deployedLink}>See in the wild</a>
    </div>
  );
}

export default Project;

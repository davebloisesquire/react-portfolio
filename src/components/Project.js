import React from 'react';

function Project({ title, body, image, deployedLink, githubLink }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

export default Project;

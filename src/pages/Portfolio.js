import React from 'react';
import Project from '../components/Project';

export default function Portfolio() {
  return (
    <div>
      Portfolio
      <Project
        title="Workout Tracker"
        body="A little tracker app for making sure you can easily quantize your workouts. It uses MongoDB with Mongoose."
        image="https://raw.githubusercontent.com/davebloisesquire/TeamProfileGen/master/assets/preview.png"
        deployedLink="https://workout-tracker-davebloisesq.herokuapp.com/"
        githubLink="https://github.com/davebloisesquire/workout-tracker"
      />
      <Project
        title="Weather App"
        body="Just a simple weather app to show you the weather and 5 day forecast in any city you search."
        image="https://raw.githubusercontent.com/davebloisesquire/weather-man/master/assets/desktop-screenshot.png"
        deployedLink="https://davebloisesquire.github.io/weather-man/"
        githubLink="https://github.com/davebloisesquire/weather-man"
      />
      <Project
        title="Note Taker"
        body="Body text goes here, in this particular spot."
        image="https://raw.githubusercontent.com/davebloisesquire/note-taker/master/Assets/AppWorking.png"
        deployedLink="https://note-taker-davebloisesquire.herokuapp.com/"
        githubLink="https://github.com/davebloisesquire/note-taker"
      />
      <Project
        title="TechBlog"
        body="Body text goes here, in this particular spot."
        image="https://raw.githubusercontent.com/davebloisesquire/TeamProfileGen/master/assets/preview.png"
        deployedLink="https://tech-blog-davebloisesq.herokuapp.com/"
        githubLink=""
      />
    </div>
  );
}

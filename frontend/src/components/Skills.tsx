import mongoDb from "../media/mongodb.png";
import reactJs from "../media/react-js.png";
import html5 from "../media/html-5.png";
import expressJS from "../media/express.png";
import nodeJS from "../media/node-js.png";
import javascript from "../media/javascript-1.png";
import python from "../media/python.png";
import java from "../media/java1.png";
import c from "../media/c.jpg"; 
import next from "../media/next-js.png";
import cssImage from "../media/css-3.png";
import git from "../media/git.png";
import english from "../media/lang-en.png";
import github from "../media/github.png";
import sql from "../media/sql.jpeg";
import pandas from "../media/pandas.png";
import numpy from "../media/numpy.png";
import keras from "../media/keras.png";
import plotly from "../media/plotly.png";
import matplotlib from "../media/matplotlib.png";
import scikit from "../media/scikit.png";


const programmingSkills= [ {
    name: "Python",
    image: python
},
{
    name: "Java",
    image: java
},
{
    name: "Javascript",
    image: javascript
},
{
    name: "C",
    image: c
},
{
    name: "SQL",
    image: sql
}
];

const dataScience = [
  {
    name: "Numpy",
    image: numpy
},
{
    name: "Pandas",
    image: pandas
},
{
    name: "Scikit-learn",
    image: scikit
},
{
    name: "Keras",
    image: keras
},
{
    name: "Plotly",
    image: plotly
},
{
  name: "Matplotlib",
  image: matplotlib
},
{
  name: "Mongo DB",
  image: mongoDb
},
]

const webDevelopment = [ 
  {
    name: "HTML 5",
    image: html5
},
{
  name: "CSS",
  image: cssImage
},
{
  name: "React JS",
  image: reactJs
},
{
  name: "Javacript",
  image: javascript
},
{
  name: "Node JS",
  image: nodeJS
},
{
  name: "Next JS",
  image: next
},
{
  name: "Express",
  image: expressJS
},
{
  name: "Django",
  image: cssImage
},
]

const tools = [
  {
    name: "Git",
    image: git
},
{
  name: "Github",
  image: github
},
{
  name: "English",
  image: english
},

]
function Skills(){
  return (
    <div>
      <h2>
        Skills
      </h2>
      <div>
        <h2>Programming Skills</h2>
        <div className="skills-grid">
          {programmingSkills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image}></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2>ML and Data Science Skills</h2>
        <div className="skills-grid">
          {dataScience.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image}></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2>Web Development Skills</h2>
        <div className="skills-grid">
          {webDevelopment.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image}></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
        <h2>Tools and other Skills</h2>
        <div className="skills-grid">
          {tools.map((skill, index) => (
            <div className="skill-card" key={index}>
              <img src={skill.image}></img>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
    </div>
      <style>{`
        .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
        gap: 16px;
        }

        .skill-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px;
        border: 1px solid #ddd;
        border-radius: 8px;
        }

        .skill-card img{
        width: 60px;
        height: 60px;
        object-fit: contain
        };
        `}
      </style>
    </div>
    
)}



export default Skills;



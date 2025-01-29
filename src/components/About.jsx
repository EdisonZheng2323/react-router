import { Link } from "react-router-dom";
const About = () => {
  return(
    <div>
      <h1> About Me </h1>
      <p> I am a student!</p>
      <Link to = "/"> Go back to the home page!</Link>
    </div>
  )
}

export default About;
import coverImage from "../../assets/cover/cover-image.jpg";

const styles = {
  cover: {
    width: "100%"
  }
}

const About = () => {
  return (
    <section>
      <h1 id="about">Who am I?</h1>
      <img 
        src={coverImage} 
        alt="Cover" 
        className="my-2" 
        style={styles.cover} />
    </section>
  )
}

export default About;
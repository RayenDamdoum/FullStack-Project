import Navbar from "../../../frontend/src/components/navbar";


const Home = () => {
    return (
      <div>
        <Navbar />
        <div className="video">
          <video autoPlay loop muted playsInline id="myVideo">
              <source src="/img/video2.mp4" type="video/mp4" />
             Your browser does not support the video tag.
            </video>
        <h1>Road Owners</h1>
        <p>
            Dominate the road with our unrivaled superbikes—pure power <br />
            precision, and speed for those who demand the extraordinary.
            <br /> Ride to rule.
        </p>
          </div>
      </div>
    )
  }
  export default Home
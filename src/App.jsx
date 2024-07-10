import "./App.css";
import video from "./assets/bg_video.mp4";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Prediction from "./Components/Prediction/Prediction";

function App() {
  return (
    <>
      <div className="vid-wrapper">
        <video autoPlay loop muted playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <Header />
      <div className="prediction">
        <Prediction />
      </div>
      <Footer />
    </>
  );
}

export default App;

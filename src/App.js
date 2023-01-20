import "./styles.css";
import Form from "./Form";
import WeatherContainer from "./WeatherContainer";
import WeatherForecast from "./WeatherForecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="WeatherAppWrapper">
      <div className="WeatherApp">
        <Form />
        <br />
        <WeatherContainer />
        <br />
        <WeatherForecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;

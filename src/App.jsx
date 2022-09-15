import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherForm from "./components/WeatherForm";
import DataCard from "./components/DataCard";

function App() {
  return (
    <>
      <main className=" container my-5">
        <WeatherForm></WeatherForm>
        <DataCard></DataCard>
      </main>
      <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;

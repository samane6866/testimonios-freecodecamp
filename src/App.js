import Testimonio from "./componentes/Testimonio";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1 className="">Esto es lo que dicen nuestro alumnos: </h1>
        <Testimonio
          nombre="Emaa Bostia"
          pais="Suecia"
          imagen="Untitled1"
          cargo=" Softwer developer"
          empresa="Spotify"
          testimonio="Siempre he tenido problemas para aprender JavaScript con cursos de freeCodeCamp he podido aprender mucho."
        />
        <Testimonio
          nombre="Show Wang"
          pais="Singapur"
          imagen="Untitled2"
          cargo="Ingeniero de Software"
          empresa="Amazon"
          testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
        />
        <Testimonio
          nombre="Sarah"
          pais="Nigeria"
          imagen="Sarah"
          cargo=" Ingienera de software"
          empresa="Spotify"
          testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
        />
      </div>
    </div>
  );
}

export default App;

import reaact from "react";

function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require("../imagenes/Untitled1.jpeg")}
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Emma Bostian en Suecia</p>
        <p className="cargo-testimonio">Ingenero de software</p>
        <p className="texto-testimonio">
          siempre he tenido problemas en aprender javascript
        </p>
      </div>
    </div>
  );
}
export default Testimonio;

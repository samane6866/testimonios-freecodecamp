import react from "react";
import "/home/samane/PIMEC2023/proyectos-free-code-camp/testimonios-freecodecamp/src/hojas-de-estilo/Testimonio.css";
function Testimonio(props) {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src={require(`../imagenes/${props.imagen}.jpeg`)}
        alt="foto de Ema"
      />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong> {props.nombre}</strong> en {props.pais}
        </p>
        <p className="cargo-testimonio">
          {props.cargo} en <strong>{props.empresa}</strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;

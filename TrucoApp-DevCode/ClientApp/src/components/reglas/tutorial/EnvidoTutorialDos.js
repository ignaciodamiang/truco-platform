import React, { useState } from "react";
import "./envidoTutorial.css";
import "./globoDialogo.css";
import {
  barajarCartasParaEnvidoJugador,
  barajarCartasParaEnvidoMaquina,
} from "./CartasTutorial";
import Swal from "sweetalert2";

const EnvidoTutorialDos = () => {
  let cartasJugador = barajarCartasParaEnvidoJugador();
  let cartasMaquina = barajarCartasParaEnvidoMaquina();

  const [ejemploUno, setEjemploUno] = useState(cartasJugador[1]);
  const [manoMaquina, setManoMaquina] = useState(cartasMaquina[1]);
  const [comenzo, setComenzo] = useState(false);
  const [mensajeJugador, setMensajeJugador] = useState("");
  const [mensajeMaquina, setMensajeMaquina] = useState("");

  const comenzar = () => {
    setComenzo(true);
    Swal.fire({
      title: "<h1>Ejemplo Dos - Envido</h1>",
      html:
        "¡Bienvenido! Soy yo de nuevo <br><b>¿creiste que era todo?</b><br>" +
        "Puede pasar que el otro jugador te cante <b>Envido</b> a vos.",
      confirmButtonText: "¡Vamos!",
      width: "700",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
      position: "center-right",
    }).then((value) => {
      Swal.fire({
        title: "<h1>Ejemplo Dos - Envido</h1>",

        html:
          "Nuevamente sos el jugador de abajo. <br> " +
          "Observá tus cartas y buscá las que tengan el <b>palo</b> repetido <br> " +
          "<b>(Basto, Espada, Oro, Copa)</b>",
        confirmButtonText: "¡Entiendo!",
        position: "center-right",
        width: "700",
      }).then((value) => {
        Swal.fire({
          title: "<h1>Ejemplo Dos - Envido</h1>",
          html:
            "¿Que pasa acá? Te tocaron tres cartas del mismo palo. " +
            "A muchas personas les gusta jugar con <b>Flor</b>. Es decir, sumando los puntos de las tres cartas. <br> <u>Por el momento solo vamos a tomar las dos cartas mas altas. </u>",
          confirmButtonText: "¡Ok!",
          position: "center-right",
          width: "700",
        }).then((value) => {
          Swal.fire({
            title: "<h1>Ejemplo Dos - Envido</h1>",
            html:
              "Si elegimos las dos cartas mas altas. Tenemos <b>30 puntos</b> de envido. El jugador que tenga el envido más alto se lleva los puntos.<br> " +
              "<ul> <li> <u> Envido : 2 puntos </u> <li> <u> Real Envido : 3 puntos </u> </li> <li> <u> Falta Envido : Gana la partida </u> </ul>",
            confirmButtonText: "¡Ok!",
            position: "center-right",
            width: "700",
          }).then((value) => {
            Swal.fire({
              title: "<h1>Ejemplo Dos - Envido</h1>",
              html: "Aceptá o Rechazá el envido según lo creas mejor.",
              confirmButtonText: "¡Intentalo!",
              position: "center-right",
              width: "700",
            });
            setMensajeMaquina("REAL ENVIDO");
          });
        });
      });
    });
  };

  //ACEPTAR O RECHAZAR ENVIDO
  const quiero = () => {
    if (comenzo) {
      setMensajeJugador("QUIERO");
      Swal.fire({
        html:
          "<h1>Aceptaste el envido</h1>" +
          "Ahora el otro juador tiene que decirte cuántos puntos tiene.",
        position: "center-right",
        width: "700",
      }).then((value) => {
        setMensajeMaquina("¡33!");
        setMensajeJugador("SON BUENAS");
        Swal.fire({
          title: "<h1>Ejemplo Dos - Envido</h1>",
          html: 'Uff... perdiste el <b>Envido</b>. <br> No es necesario que digas tus puntos. Simplemente decí: <b>"Son buenas".</b>',
          position: "center-right",
          width: "700",
        }).then((value) => {
          setMensajeJugador("");
          setMensajeMaquina("");
          setComenzo(false);
        });
      });
    }
  };

  const noQuiero = () => {
    if (comenzo) {
      setMensajeJugador("NO QUIERO");
      Swal.fire({
        html:
          "<h1>No quisiste el envido</h1>" +
          "Esto da por finalizada la jugada de <b>Envido</b> y le va a dar al otro jugador un punto a su favor.",
        position: "center-right",
        width: "700",
      }).then((value) => {
        setMensajeJugador("");
        setMensajeMaquina("");
        setComenzo(false);
        Swal.fire({
          title: "<h1>Ejemplo Dos - Envido</h1>",
          html: "Recordá que en caso que quieras podes aceptar el <b>Envido</b> o tambien redoblar la apuesta cantando <b>Real Envido</b> o <b>Falta Envido</b>.",
          position: "center-right",
          width: "700",
        });
      });
    }
  };

  const flor = () => {
    Swal.fire({
      title: '¿FLOR? "Acá no hacemos eso"',
      width: "700",

      imageUrl:
        "https://www.pintzap.com/storage/img/memegenerator/templates/aqui-no-hacemos-eso.webp",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
      position: "center-right",
    });
  };

  const ejemploUnoJugador = ejemploUno.map((carta) => (
    <div className="mano" key={carta.id}>
      <img src={carta.image} className="cartaTutorialIA"></img>
    </div>
  ));

  const ejemploUnoMaquina = manoMaquina.map((carta) => (
    <div style={{ opacity: "0.6" }} key={carta.id}>
      <img
        src="https://asart.com.ar/wp-content/uploads/2020/02/asart-naipes-dorso-minimalart.png"
        className="cartaTutorialIA"
      ></img>
    </div>
  ));
  
  return (
    <div className="envidoContenedorTutorial">
      <div className="envidoTutorial">
        <button className="botonComenzar" onClick={() => comenzar()}>
          Ejemplo 2 : Comenzar
        </button>

        <div className="envidoManoMaquina">{ejemploUnoMaquina}</div>
        <div className="vinetaMaquinaDos">
          <p className="dialogoMaquinaDos">{mensajeMaquina}</p>
        </div>
        <div className="envidoMesa"></div>
        <div className="vinetaJugadorDos">
          <p className="dialogoJugadorDos">{mensajeJugador}</p>
        </div>
        <div className="envidoManoJugador">{ejemploUnoJugador}</div>
        <div className="acciones">
          <button className="botonEnvidoTutorial" onClick={() => quiero()}>
            Quiero
          </button>
          <button className="botonEnvidoTutorial" onClick={() => noQuiero()}>
            No Quiero
          </button>
          <button className="botonEnvidoTutorial" onClick={() => flor()}>
            ¿Flor?
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvidoTutorialDos;

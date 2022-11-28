import React from "react";
import noFoto from "../../assets/no-foto.jpg";
import { CountdownOtrosJugadores } from "./CountdownOtrosJugadores";
import { useSelector } from "react-redux";
import {
  getCartasJugadores,
  getUserPlayer,
} from "../../helpers/truco/getUserTurno";
// import mazo from "../../assets/cartas/Mazo.png";

export const JugadorDos2vs2 = () => {
  const { uid } = useSelector((state) => state.auth);
  const { partida } = useSelector((state) => state.juego);
  const { jugadorUno, jugadorDos, jugadorTres, jugadorCuatro } = partida;
  const jugador = getUserPlayer(
    uid,
    jugadorUno,
    jugadorDos,
    jugadorTres,
    jugadorCuatro
  );
  const mazo =
    "https://res.cloudinary.com/dmvh1zlfc/image/upload/v1668288798/TrucoCartas/Mazo_vhkrcs.png";

  return (
    <div className="w-100 player12vs2 d-flex align-items-center justify-content-center">
      <div className="player1Avatar d-flex flex-column align-items-center me-2">
        <CountdownOtrosJugadores image={noFoto} />
        <div className="playerName fw-bolder text-white px-2 py-1">Rival</div>
      </div>

      <div className="d-flex divCardsOponent">
        {getCartasJugadores("arriba", jugador, partida).map((carta) => (
          <div key={carta.id} className="d-flex divCardOponent me-1">
            <img
              className="animate__animated animate__fadeInUp cardOponent"
              src={mazo}
              alt="card"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
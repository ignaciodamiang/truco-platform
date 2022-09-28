import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { SocketContext } from "../../context/SocketContext";
const imagenCarta = require.context("../../assets/cartas", true);

export const CartaJugador = ({ carta }) => {
  const { partida } = useSelector((state) => state.juego);
  const { uid } = useSelector((state) => state.auth);
  const { room, turno, jugadorUno, jugadorDos } = partida;
  const { connection } = useContext(SocketContext);

  const handleJugarCarta = async (e) => {
    e.preventDefault();
    const jugada = { Room: room, Turno: turno, CartaJugada: carta };
    await connection.invoke("TirarCarta", jugada);
  };

  return (
    <div
      onClick={handleJugarCarta}
      className={
        uid === jugadorUno
          ? turno === 1
            ? "divCardPlayerTurn"
            : "divCardPlayer"
          : uid === jugadorDos && turno === 2
          ? "divCardPlayerTurn"
          : "divCardPlayer"
      }
    >
      <img
        className="animate__animated animate__fadeIn cardPlayer"
        src={imagenCarta(carta.imagen)}
        alt="cartaJugador"
      />
    </div>
  );
};

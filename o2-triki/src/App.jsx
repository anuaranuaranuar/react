import { useState } from "react";
import { Children } from "react";

// Definimos las constantes para los turnos posibles (X y O)
const TURNS = {
  X: "X",
  O: "O"
}

// Componente para cada casilla del tablero
const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = "square " + (isSelected ? "is-selected" : "");
  const handleclick = () => {
    updateBoard(index)
  }


  return (

    <div onClick={handleclick} className={className}>
      {children} {/* Muestra el valor de la casilla (X, O o vacío) */}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
function App() {
  // Estado que contiene el tablero, que es un array de 9 elementos
  // Inicia con algunos valores predefinidos (x y o en diferentes posiciones)
  const [board, setBoard] = useState(Array(9).fill(null))

  // Estado que guarda el turno actual (X o O)
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) { return; }

    const newBoard = [...board]
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);

    }
  }
  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [ a, b, c ] = combo;

      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    } 
    return null;
  }

  return (
    <main className="board">
      <h1>TRIKI</h1> {/* Título del juego */}
      <section className="game">
        {
          // Iteramos sobre el tablero (array "board") y mostramos las casillas
          board.map((_, index) => {
            return (
              <Square
                key={index} // Establecemos una clave única para cada casilla
                updateBoard={updateBoard}
                index={index} // Le pasamos el índice de la casilla
              >
                {board[index]} {/* Mostramos el valor de cada casilla en el tablero */}
              </Square>
            )

          }
          )
        }
      </section>
      <section className="turn">

        <Square isSelected={turn === TURNS.X} >
          {TURNS.X} {/* Si es el turno de X, mostramos "X" */}
        </Square>
        <Square isSelected={turn === TURNS.O} >
          {TURNS.O} {/* Si es el turno de O, mostramos "O" */}
        </Square>

      </section>
    </main>

  )

}

export default App

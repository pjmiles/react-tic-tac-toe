import { useState } from "react";


const Board = () => {
  const [turn, setTurn] = useState("X");
  const [cells, setCells] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState();


  const winningCombination = (squares) => {
    let combos = {
      winning: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ],
    };

    for (let combo in combos){
      combos[combo].forEach((pattern) =>{
        if (
          squares[pattern[0]] === '' ||
          squares[pattern[1]] === '' ||
          squares[pattern[2]] === ''
        ) {
          // nothing should occur
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setWinner(squares[pattern[0]]);
          alert('Winner!');
        } 
      });
    }
  };

  // const checkDraw = (squares) => {
  //   for(let combo in squares){
  //       if (squares[combo] !== ''){
  //         return false
  //       }
  //   alert("DRAW!")
  //   return true 
  //   }
  // }

  const handleClick = (id) => {
    if (cells[id] !== "") {
      alert("Clicked");
      return;
      // To allow only one click per cell
    }
    let squares = [...cells];

    if (turn === "X") {
      squares[id] = "X";
      setTurn("O");
    } else {
      squares[id] = "O";
      setTurn("X");
    }
    setCells(squares);
    winningCombination(squares);
    // checkDraw(squares);
  };

  const handleReset = () => {
    setWinner(null);
    setCells(Array(9).fill(""));
  }

  return (
    <div className="container">
      <div className="top-display">Player's Turn: {turn}</div>

      <div className="grid-container">
        <div className="cell" onClick={()=>handleClick(0)}>{cells[0]}
        </div>
        <div className="cell" onClick={()=>handleClick(1)}>{cells[1]}
        </div>
        <div className="cell" onClick={()=>handleClick(2)}>{cells[2]}
        </div>
        <div className="cell" onClick={()=>handleClick(3)}>{cells[3]}
        </div>
        <div className="cell" onClick={()=>handleClick(4)}>{cells[4]}
        </div>
        <div className="cell" onClick={()=>handleClick(5)}>{cells[5]}
        </div>
        <div className="cell" onClick={()=>handleClick(6)}>{cells[6]}
        </div>
        <div className="cell" onClick={()=>handleClick(7)}>{cells[7]}
        </div>
        <div className="cell" onClick={()=>handleClick(8)}>{cells[8]}
        </div>
      </div>
      {winner &&(
      <>
        <p className="bottom-display">{winner} is the winner!</p>
        <button className="btn" onClick={handleReset}>Play Again</button>
        </>
          )
        }
    </div>
  );
};

export default Board;

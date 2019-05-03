import React, { Component } from 'react';



class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />
  }

  render() {
    const status = "Next player: X"

    return (
      <div>
        <div className="status">{status}</div>
        
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        </div>
   
    )
  }
}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    )
  }
}


class App extends Component {
  // Game
  render() {
    return (
      <div className="App">
        <div className="game"> 
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
           
          </div>
        </div>
      </div>
    );
  }
}

export default App;

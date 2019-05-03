import React, { Component } from 'react'
import Square from './Square'

export default class Board extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         squares: Array(9).fill(null)
      }
    }


    handleClick(i) {
        // 기존의 배열을 바꾸지 않고 새로운 배열을 생성하여 상태를 업데이트
        const squares = this.state.squares.slice()
        squares[i] = 'X'
        this.setState({
            squares: squares
        })
    }
  
    

    renderSquare(i) {
        return <Square value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
        />
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

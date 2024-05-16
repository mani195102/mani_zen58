import React, {useReducer}from 'react';
import {Button, Dialog, DialogActions, DialogTitle, Grid, Paper, Typography} from '@mui/material'

const initialState = {
    board: Array(9).fill(null),
    xIsNext: true,
    winner: null,
    openDialog: false
}

function reducer(state, action){
    switch(action.type){
        case 'make_move':
            if(state.board[action.index] || state.winner){
                return state;
            }
            const boardCopy = [...state.board];
            boardCopy[action.index] = state.xIsNext ? 'X' : 'O';
            const winner = calculateWinner(boardCopy);
            const isBoardFull = boardCopy.every(cell => cell !== null);
            return{
                ...state,
                board: boardCopy,
                xIsNext: !state.xIsNext,
                winner: winner,
                openDialog: !!winner || isBoardFull

            }
            case 'reset':
                return{...initialState,  board: Array(9).fill(null) };
                case 'close_dialog':
                    return {...state, openDialog: false };
                    default:
                        throw new Error('Unhandled Action Type');
    }
}
function calculateWinner(board){
    const lines = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];

    for(let line of lines){
        const [a,b,c] =line;
        if( board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];

        }
    }
    return null;
}
function TicTacToe() {
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className='game'>
        <Typography style={{marginBottom:30}}variant='h6'>
            Player1 is X --  Player2 is O
        </Typography>
       
        <Grid container spacing={2}
        style={{ maxWidth: 400 }}>
            {state.board.map((cell, index) =>(
                <Grid item xs={4} key={index}>
                    <Paper className='cell' elevation={3} onClick={() => dispatch({ type: 'make_move', index})}>
                    {cell}
                    </Paper>
                </Grid>
            ))}
        </Grid>
        <Button variant='contained' onClick={() => dispatch({ type: 'reset'})} style={{ marginTop: 20}}> Reset Game</Button>
        <Dialog open={state.openDialog} onClose={() => dispatch({ type: 'close_dialog'})}>
            <DialogTitle >{ state.winner ? `${state.winner} wins!` : 'Draw'}</DialogTitle>
            <DialogActions>
                <Button onClick={() => dispatch({ type:'reset'})} color='primary'>
                        Reset Game
                </Button>
            </DialogActions>
        </Dialog>

    </div>
  )
}

export default TicTacToe
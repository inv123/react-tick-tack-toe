export const PLAYERS = [
    {
        name: 'Player 1',
        sign: 'X',
        isActive: true
    },
    {
        name: 'Player 2',
        sign: 'O',
        isActive: false
    }
]

export const WINNING_COMBINATIONS=[
    [
        {row: 0, col: 0},
        {row: 0, col: 1},
        {row: 0, col: 2}
    ],
    [
        {row: 1, col: 0},
        {row: 1, col: 1},
        {row: 1, col: 2}
    ],
    [
        {row: 2, col: 0},
        {row: 2, col: 1},
        {row: 2, col: 2}
    ],
    [
        {row: 0, col: 0},
        {row: 1, col: 0},
        {row: 2, col: 0}
    ],
    [
        {row: 0, col: 1},
        {row: 1, col: 1},
        {row: 2, col: 1}
    ],
    [
        {row: 0, col: 2},
        {row: 1, col: 2},
        {row: 2, col: 2}
    ],
    [
        {row: 0, col: 0},
        {row: 1, col: 1},
        {row: 2, col: 2}
    ],
    [
        {row: 0, col: 2},
        {row: 1, col: 1},
        {row: 2, col: 0}
    ],
]

export const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

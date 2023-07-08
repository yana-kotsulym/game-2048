# Game 2048
### Description
- The playing field is 4 x 4.
- Each cell can be empty or contain one of the numbers: 2, 4, 8 ... 2^n.
- Player can move the cells with keyboard arrows. ⬆️ ⬇️ ➡️ ⬅️
- When pressing any of the arrows, all numbers will be moved in the chosen direction until all empty cells are filled.
- When 2 identical cells collide, they will be joined into a doubled number.
- Combined cells cannot be moved twice within one turn
- Moves are possible if after a move at least one cell changes
- After each move a random empty cell appears as either 2 or 4 . The probability of 4 is 10%.
- The game ends with a win if one of the cells has value 2048.
### How to use this repo?
Download or clone this repo and run the following command in the terminal:
```
# install dependencies
npm install

# serve at localhost:3000
npm start
```
### Demo link for the game [here](https://yana-kotsulym.github.io/game-2048/)
### Technologies
- HTML
- CSS
- SCSS
- JavaScript

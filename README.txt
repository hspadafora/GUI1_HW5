Repository:
https://github.com/hspadafora/GUI1_HW5

Github pages link:
https://hspadafora.github.io/GUI1_HW5/



What Works:

• letter tiles in the player’s “hand” are selected randomly from a data structure with the proper distribution of the letters
• letter tiles can be dragged and dropped onto target Scrabble squares
• program identifies which letter tile is dropped onto which Scrabble square
• board includes bonus squares
• score is tallied correctly, including consideration of bonus square multipliers
• the board is cleared after each round so that a new word can be played
• score is kept for multiple words until the user restarts a new game
• Tiles can only be dragged from the “rack” to Scrabble board. If the user drop them anywhere else, they will be bounced back to the “rack”.
• Once the tile is placed on the Scrabble board, it can not be moved.
• user can always restart the game.
• Full Scrabble board lines are implemented


What Doesn't Work:

• any number of words can be played until the player wishes to quit or depletes all tiles
• after playing a word, only the number of letter tiles needed to bring the player’s “hand” back to 7 tiles are selected
• Except for the first letter, all sub-subsequent letters must be placed directly next to or below another letter with no space. Else, they will bounce back to the “rack”.
• Validating to see if a word that the user enters is valid (from /usr/share/dict/words)

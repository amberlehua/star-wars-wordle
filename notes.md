# Functional Requirements

## Gameplay

6 tries to guess a 5-letter word

Typing in the letter will display the letter in the tile
Backspace will delete letters
Enter will submit guess

Guesses must be a real word, "in word list"
Guess colors (data-state):
    - gray: "absent," letter not in word
    - yellow: "present," letter in word, but in wrong position
    - green: "correct," letter in word and in right position

Hard Mode: present or correct letters must be used in subsequent guesses
## Design

Tiles 5x6
Virtual keyboard

## Interactions

When typing a letter:

- border of the tile changes to light gray
- blinking in animation with letter
- backspace will remove letter, border changes back to dark gray

When submitting guess:
    - Tiles will flip up and background color will change based on guess

## Star Wars Update

When typing a letter, dropdown of options
    - use search notes app on codesandbox and from skillcrush for live search example
    - check Pokemon Wordle if need ideas

box 1: name
box 2: species
box 3: home planet
box 4: height
box 5: mass
box 6: first movie appearance

Movie characters only mode (no EU only, so ones w/o an intro movie listed)
Movie order- release date or in universe chronological?
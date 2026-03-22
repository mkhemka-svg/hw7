# Fireboy & Watergirl Game 

## Project Option
I chose to build the Fireboy and Watergirl Game.

## Overview
I created a playable prototype inspired by *Fireboy & Watergirl*, a cooperative puzzle-platformer game where two characters must navigate a level together while avoiding hazards and solving simple challenges.

The game includes:
- Dual-character controls (Arrow keys for Fireboy, WASD for Watergirl)
- Gravity and jumping physics
- Platform collision
- Element-based hazards (fire and water)
- Gem collection mechanics
- Door-based win condition

Players must guide both characters to their respective doors while avoiding hazards and collecting gems.

## What I Built
- Implemented a **canvas-based game loop** using JavaScript
- Designed a **Player class** to manage movement, gravity, and collisions
- Added **hazard logic** (Fireboy dies in water, Watergirl dies in fire)
- Implemented **collectible gems** tied to each character
- Created a **win condition** where both players must reach their doors
- Integrated **sprite assets** for Fireboy and Watergirl

## What I Left Unfinished / Future Improvements
- Proper **sprite animations** (currently using static frames instead of full animation cycles)
- More advanced **puzzle mechanics** (buttons, moving platforms, levers)
- Additional hazard types like **toxic slime**
- Multiple levels with increasing difficulty
- Improved UI/UX (start screen, score tracking, timer)
- Better collision accuracy and smoother physics

---

## Prompt Log (Phase 1)

### AI Tools Used
- ChatGPT 

---

### Key Prompts

**1. Initial Game Setup**
> "Create a simple Fireboy and Watergirl game using HTML, CSS, and JavaScript with movement, gravity, and collision."

**2. Game Mechanics**
> "Add hazards where Fireboy dies in water and Watergirl dies in fire, and include gems and doors."

**3. Code Structure**
> "Organize the game using a Player class and a game loop with update and draw functions."

**4. Sprite Integration**
> "Use sprite sheets for Fireboy and Watergirl and display them on a canvas."

**5. Debugging and Improvements**
> "Fix collision issues and improve gameplay so that the game is more playable and winnable."

---

## Reflection
Using AI helped accelerate the development process, especially in setting up the game loop, handling physics, and structuring the code. I still needed to manually adjust logic, debug issues, and ensure the game worked correctly. The combination of AI-generated scaffolding and manual refinement allowed me to build a functional prototype efficiently.

---

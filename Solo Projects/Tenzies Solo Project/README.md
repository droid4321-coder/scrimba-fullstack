# Tenzies Solo project

## Objective - Create a faithful rendition of the game TENZI as best as I can by myself, only looking at documentation. No AI help this time, ill try

## Rules

- The user has 10 dice. The objective is to roll all the dices until all 10 have the same number.
- On the 1st roll, the player can decide which number to go for, mainly, the one that has the most.

## Project Tasks

- The project will be done in React JS
- Implement the dice function -> This means making a die component that can roll a number and also hold it on user demand
- Implement a function that holds a number and can check if the dice has that same number
- Implement an array that holds all the values and checks if they are the same, to notify the user how many of the selected number
- Implement a turn counter and a timer for speedruns
- Implement a function when all of the die are the same number, ending the game
- implement a reset function, to restart the game
- implement a way of saving and showing past results -> stretch goal

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Assembly Endgame

- This is a capstone project that will reforze our knowledge about react in an application. A version of Hangman

## Project Planning

- Lets plan the project, it has a header some info, the languages(tries to get the letter), word, and keyboard
- There are some questions we can do whem given a design, what are the main contiainers of elements I need on the app, what values will be need to be saved in state and what others can I derive, How will the user interact with the app, what events do i need to handle
- 1. There is a container for the header and the description, a container for the languages, a container for the word to reveal, and a container for the keyboard
- 2. We need to save values for the tries left, the word to reveal, all the keyboard letters, and also, what letters reveal which words. letters revealed, win state, etc.
- 3. The user will press a letter and submit it, if the letter is right, the letter will be revealed in the correct position and it is green, if not, it is red and a life is lost. Also a new game button

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

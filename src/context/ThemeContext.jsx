import { createContext } from 'react';

// Provide a default value that matches the shape of the context
// noinspection JSUnusedGlobalSymbols
export const ThemeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
});

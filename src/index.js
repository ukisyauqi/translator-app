import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, extendTheme } from '../node_modules/@chakra-ui/react';
import App from './App';
import './index.css';

const theme = extendTheme({
  colors: {
    purple: {
      500: "#9D84B7",
      600: "#091353"
    }
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


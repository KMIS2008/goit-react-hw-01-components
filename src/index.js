import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white: '#fafafa',
    black: '#212121',
    background: '#D3D3D3',
    gray: "#808080",
    blue: '#F0F8FF',
    border: '#d8d1d1',
  },

  spacing: value => `${value * 5}px`,
}

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
<ThemeProvider theme = {theme}>
    <App />
</ThemeProvider>
  </React.StrictMode>

);

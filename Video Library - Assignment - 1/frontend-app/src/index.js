import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/global';
import { GlobalStyle } from './styles/GlobalStyle';
import { BookProvider } from './context/BookCart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
    <BookProvider>
    <App />
    </BookProvider>
      
    </GlobalProvider>
  </React.StrictMode>
);


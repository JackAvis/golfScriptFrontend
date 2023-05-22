import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(
  <div>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </div>
);


reportWebVitals();
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap App with BrowserRouter */}
      <App />
      <ToastContainer
        position="top-center"
        autoClose={3000} // Auto close in 3 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </BrowserRouter>
  </StrictMode>
);
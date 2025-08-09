import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { DataProvider } from './context/Data.jsx';
import { CartProvider } from './context/Cartget.jsx';
import { ToastContainer, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "react-scroll-to-top";

import { FaArrowUp } from "react-icons/fa";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Clerk Publishable Key');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
      <CartProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">

          <App />



          <ScrollToTop
            smooth
            component={<FaArrowUp className="text-white text-lg" />}
            className="!flex !items-center !justify-center !bg-red-600 rounded-full shadow-md hover:scale-110 transition-transform duration-300"
          />

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Bounce}
          />
        </ClerkProvider>
      </CartProvider>
    </DataProvider>
  </StrictMode>
);

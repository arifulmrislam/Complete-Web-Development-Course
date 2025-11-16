import AOS from 'aos';
import 'aos/dist/aos.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router-dom"; // FIX this
import './index.css';
import { router } from './router/router';
import AuthProvider from './contexts/AuthProvider'; // ADD this (fix path)

AOS.init();

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <AuthProvider>   {/*  ✅ WRAP YOUR APP HERE */}
            <div className='font-urbanist max-w-7xl mx-auto'>
                <RouterProvider router={router} />
            </div>
        </AuthProvider>
    </StrictMode>
)

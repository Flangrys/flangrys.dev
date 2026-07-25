import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import AppThemeProvider from "./modules/ui/providers/AppThemeProvider.tsx";
import AppRouter from "./router/AppRouter.tsx";

import "./style.css";

const root = document.getElementById('root')!;


createRoot(root).render(
    <StrictMode>
        <AppThemeProvider>
            <AppRouter/>
        </AppThemeProvider>
    </StrictMode>
    ,
)

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AppRouter} from "./router/router.tsx";
import {AppRoot} from "./modules/ui/components/app/AppRoot.tsx";
import AppThemeProvider from "./modules/ui/providers/AppThemeProvider.tsx";

import "./style.css";

const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <AppThemeProvider>
            <AppRoot>
                <AppRouter/>
            </AppRoot>
        </AppThemeProvider>
    </StrictMode>
    ,
)

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AppRouter from "./router/AppRouter.tsx";
import AppThemeProvider from "./modules/ui/providers/AppThemeProvider.tsx";

import "./style.css";

const root = document.getElementById('root')!;

createRoot(root).render(
    <StrictMode>
        <QueryClientProvider client={new QueryClient()}>
            <AppThemeProvider>
                <AppRouter/>
            </AppThemeProvider>
        </QueryClientProvider>
    </StrictMode>
    ,
)

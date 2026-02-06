import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {AppRoot} from "./modules/ui/views/AppRoot.tsx";
import {AppRouter} from "./router/AppRouter.tsx";
import {ApolloProvider} from "@apollo/client/react";
import AppThemeProvider from "./modules/ui/providers/AppThemeProvider.tsx";
import {client} from "./api/apollo.graphql.ts";

import "./style.css";
import {BrowserRouter} from "react-router";

const BASE_URL = import.meta.env.BASE_URL;
const root = document.getElementById('root')!;


createRoot(root).render(
    <StrictMode>
        <BrowserRouter basename={BASE_URL}>
            <ApolloProvider client={client}>
                <AppThemeProvider>
                    <AppRoot>
                        <AppRouter/>
                    </AppRoot>
                </AppThemeProvider>
            </ApolloProvider>
        </BrowserRouter>
    </StrictMode>
    ,
)

// ANCHOR --> IMPORTS REACT ROUTER DOM
import { createBrowserRouter } from "react-router-dom";
// END REACT ROUTER DOM

// ANCHOR --> IMPORTS COMPONENTES
import { NotFound } from "../components/error";
import { ChatArea } from "../pages/container";
import { Chat } from "../pages/chat";
// END COMPONENTES


export const router = createBrowserRouter([
    {
        path: "/",
        element: <ChatArea />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Chat />
            },
        ]
    }
]);
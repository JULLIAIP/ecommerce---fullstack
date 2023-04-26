import { Routes, Route } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";
import { ChatPage } from "../pages/ChatPage";
import { DealPage } from "../pages/DealPage";
import { NegociationPage } from "../pages/NegociationPage";
import { ErrorPage } from "../pages/ErrorPage";
import { HomePage } from "../pages/HomePage";




export default function Routing() {    
    return (
        <Routes>    
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* On this route, the user can to talk with other creator 
            about your proposals */}
            <Route path="/chat" element={<ChatPage />} />

            {/* If you are the creator of the offer, you can edit 
            the fields and also view the proposals. Other users
            can only see your proposal, but they can also send
            messages to the creator. If the deal has already been 
            closed, the creator can view the progress of the request */}
            <Route path="/deal/:id" element={<DealPage />} />

            {/* On this page, you can access the proposals you have 
            made to other users and your offer creations. */}
            <Route path="/negociations" element={<NegociationPage />} />

            {/* Error 404 | Not Found */}
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
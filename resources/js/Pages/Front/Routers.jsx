import { BrowserRouter, Routes, Route } from "react-router-dom";
import Strategy from "./Strategy";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home/strategy" element={<Strategy/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Routers
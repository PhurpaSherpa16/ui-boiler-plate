import { Route, Routes } from "react-router-dom";
import MainLayout from "../layout/mainlayout";
import MainProjectHome from "../projects";

export default function MainRoutes(){
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
                <Route index element={<MainProjectHome/>}/>
            </Route>
        </Routes>
    )
}
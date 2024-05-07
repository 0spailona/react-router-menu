import {Route, Routes} from "react-router-dom";
import Menu from "./menu.tsx";
import HomePage from "./homePage.tsx";
import DriftPage from "./driftPage.tsx";
import TimeAttackPage from "./timeAttackPage.tsx";
import ForzaPage from "./forzaPage.tsx";

export default function App() {
    return (
        <div>
            <Menu list={[{name: "Главная", link: "/"},
                {name: "Дрифт-такси", link: "/drift"},
                {name: "Time attack", link: "/timeattack"},
                {name: "Forza karting", link: "/forza"}]}/>
            <div className="page">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/drift" element={<DriftPage/>}/>
                    <Route path="/timeattack" element={<TimeAttackPage/>}/>
                    <Route path="/forza" element={<ForzaPage/>}/>
                </Routes>
            </div>
        </div>
    );
}
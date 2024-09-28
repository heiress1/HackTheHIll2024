import CalendarSection from "./components/CalendarSection";
import Sidebar from "./components/Sidebar";
import "@fontsource/inter";

import { useState } from "react";

function App() {
    const [LeftState, setLeftState] = useState("base");
    return (
        <>
            <div className="flex w-[100vw] h-[100vh] flex-row">
                <Sidebar leftState={LeftState} setLeftState={setLeftState} />
                <CalendarSection />
            </div>
        </>
    );
}

export default App;

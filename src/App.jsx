import CalendarSection from "./components/CalendarSection";
import NewTask from "./components/NewTask";
import Sidebar from "./components/Sidebar";
import "@fontsource/inter";

import { useState } from "react";

function App() {
    const [LeftState, setLeftState] = useState("base");
    return (
        <>
            <div className="flex w-[100vw] h-[100vh] flex-row">
                <Sidebar leftState={LeftState} />
                <CalendarSection />
            </div>
            <NewTask setter={setLeftState} />
        </>
    );
}

export default App;

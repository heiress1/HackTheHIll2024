import CalendarSection from "./components/CalendarSection";
import Sidebar from "./components/Sidebar";
import "@fontsource/inter";

import { useState } from "react";

function App() {
    const [sizeState, setSizeState] = useState("normal");
    return (
        <>
            <div className="flex w-[100%] h-[100vh] flex-row justify-stretch">
                <Sidebar sizeState={sizeState} setSizeState={setSizeState} />
                <CalendarSection />
            </div>
        </>
    );
}

export default App;

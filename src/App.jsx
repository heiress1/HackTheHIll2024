import CalendarSection from "./components/CalendarSection";
import Sidebar from "./components/Sidebar";
import "@fontsource/inter";
import dummyEvents from "./utils/dummyEvents";

import { useState } from "react";

function App() {
    const [myEvents, setMyEvents] = useState(dummyEvents);
    const [sizeState, setSizeState] = useState("normal");
    return (
        <>
            <div
                className="flex w-[100%] h-[100vh] flex-row justify-stretch"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, rgba(68,68,71,1)  0%, rgba(18,18,18,1) 68%, rgba(0,0,0,1) 100%)",
                }}>
                <Sidebar
                    sizeState={sizeState}
                    setSizeState={setSizeState}
                    myEvents={myEvents}
                    setMyEvents={setMyEvents}
                />
                <CalendarSection
                    myEvents={myEvents}
                    setMyEvents={setMyEvents}
                />
            </div>
        </>
    );
}

export default App;

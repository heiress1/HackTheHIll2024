import CalendarSection from "./components/CalendarSection";
import NewTask from "./components/NewTask";
import Sidebar from "./components/Sidebar";
import "@fontsource/inter";

function App() {
    return (
        <>
            <div className="flex w-[100vw] h-[100vh] flex-row">
                <Sidebar />
                <CalendarSection />
            </div>
            <NewTask />
        </>
    );
}

export default App;

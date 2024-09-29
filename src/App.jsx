import CalendarSection from "./components/CalendarSection";
// import Sidebar from "./components/Sidebar";
import "@fontsource/inter";
import Tasklist from "./components/Tasklist";
import eventData from "./utils/dummyEvents";
function App() {

    const eventElements = eventData.map((event) => {
        return (
          <Tasklist
            
            {...event}
    
            
    
          />
        );
      });

    return (
        <div className="flex w-[100vw] h-[100vh] flex-row">
            <div >
                {eventElements}
            </div>
            
            {/* <Sidebar /> */}
            <CalendarSection />

        </div>
    );
}

export default App;

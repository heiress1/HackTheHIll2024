import EventWrapper from "./EventWrapper";
import DarkButton from "./DarkButton";
import main from "../../jsAlgo/Scheduler";

export default function SidebarTasks(props) {
    return (
        <div className="flex flex-col m-4 w-96 justify-between">
            <div className="flex flex-col gap-3">
                <h1 className="poppins-medium text-main text-4xl mb-6">
                    Task Flow
                </h1>
                <p className="text-white font-semibold pl-2">My Tasks</p>
                <hr className="opacity-35 pb-2"></hr>
                {props.events.map((event) => (
                    <EventWrapper
                        setMode={props.setMode}
                        id={event.id}
                        setEditID={props.setEditID}
                        key={event.key}
                        start={event.start}
                        end={event.end}
                        setSizeState={props.setSizeState}
                        description={event.description}>
                        {event.title}
                    </EventWrapper>
                ))}
            </div>
            <div className="flex flex-row gap-2">
                <DarkButton
                    onClick={() => {
                        props.setSizeState("expanded");
                        props.setMode("new");
                    }}>
                    Add Task
                </DarkButton>
                <DarkButton
                    onClick={() => {
                        console.table(main(props.events));
                        props.setTasks(main(props.events));
                    }}>
                    Reschedule
                </DarkButton>
            </div>
        </div>
    );
}

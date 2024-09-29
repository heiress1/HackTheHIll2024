import events from "../utils/dummyEvents";
import EventWrapper from "./EventWrapper";
import DarkButton from "./DarkButton";

export default function SidebarTasks(props) {
    return (
        <div className="flex flex-col m-4 w-96 justify-between">
            <div className="flex flex-col gap-2">
                <h1 className="text-white font-bold text-2xl m-2">My Tasks</h1>
                {events.map((event) => (
                    <EventWrapper
                        key={event.key}
                        start={event.start}
                        end={event.end}>
                        {event.title}
                    </EventWrapper>
                ))}
            </div>
            <DarkButton
                onClick={() => {
                    props.setSizeState("expanded");
                }}>
                Add Task
            </DarkButton>
        </div>
    );
}

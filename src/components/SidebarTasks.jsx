import events from "../utils/dummyEvents";
import EventWrapper from "./EventWrapper";
import DarkButton from "./DarkButton";

export default function SidebarTasks(props) {
    return (
        <div className="flex flex-col m-4 w-96 justify-between">
            <div className="flex flex-col gap-3">
                <h1 className="poppins-medium text-main text-4xl mb-6">
                    CALENDARIFY
                </h1>
                <p className="text-white font-semibold pl-2">My Tasks</p>
                <hr className="opacity-35 pb-2"></hr>
                {events.map((event) => (
                    <EventWrapper
                        id={event.id}
                        key={event.key}
                        start={event.start}
                        end={event.end}
                        description={event.description}>
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

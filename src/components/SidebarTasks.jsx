import events from "../utils/dummyEvents";
import EventWrapper from "./EventWrapper";

export default function SidebarTasks() {
    return (
        <div className="flex flex-col gap-2 m-4 h-96 w-96">
            <h1 className="text-dark font-bold text-2xl m-2">My Tasks</h1>
            {events.map((event) => (
                <EventWrapper
                    key={event.key}
                    start={event.start}
                    end={event.end}>
                    {event.title}
                </EventWrapper>
            ))}
        </div>
    );
}

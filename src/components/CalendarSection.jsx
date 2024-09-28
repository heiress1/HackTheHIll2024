import { Calendar, momentLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import moment from "moment";
import events from "../utils/dummyEvents";
import { useCallback, useState } from "react";

import CalendarToolbar from "./CalendarToolbar";

const DnDCalendar = withDragAndDrop(Calendar);

const localizer = momentLocalizer(moment);

export default function CalendarSection() {
    const [myEvents, setMyEvents] = useState(events);

    const moveEvent = useCallback(
        ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
            const { allDay } = event;
            if (!allDay && droppedOnAllDaySlot) {
                event.allDay = true;
            }
            if (allDay && !droppedOnAllDaySlot) {
                event.allDay = false;
            }

            setMyEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {};
                const filtered = prev.filter((ev) => ev.id !== event.id);
                return [
                    ...filtered,
                    { ...existing, start, end, allDay: event.allDay },
                ];
            });
        },
        [setMyEvents]
    );
    const resizeEvent = useCallback(
        ({ event, start, end }) => {
            setMyEvents((prev) => {
                const existing = prev.find((ev) => ev.id === event.id) ?? {};
                const filtered = prev.filter((ev) => ev.id !== event.id);
                return [...filtered, { ...existing, start, end }];
            });
        },
        [setMyEvents]
    );

    return (
        <div className="calendarSink bg-mid rounded-xl col-span-6 col-start-3 flex flex-col gap-12 m-4 p-4 w-[70vw]">
            <DnDCalendar
                defaultView="week"
                className="bg-white rounded-lg h-[rem]"
                localizer={localizer}
                events={myEvents}
                draggableAccessor="isDraggable"
                startAccessor="start"
                endAccessor="end"
                // view={calendarState}
                toolbar={true}
                onEventDrop={moveEvent}
                onEventResize={resizeEvent}
                resizable
                popup
                components={{
                    toolbar: CalendarToolbar, // Use the custom toolbar
                }}
            />
        </div>
    );
}

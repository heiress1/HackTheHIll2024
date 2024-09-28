const events = [
    {
        title: "Team Meeting",
        start: new Date("2024-10-01T09:00:00Z"),
        end: new Date("2024-10-01T10:00:00Z"),
        allDay: false,
        isDraggable: true,
    },
    {
        title: "Project Deadline",
        start: new Date("2024-10-05T00:00:00Z"),
        end: new Date("2024-10-05T23:59:59Z"),
        allDay: true,
        isDraggable: true,
    },
    {
        title: "Client Presentation",
        start: new Date("2024-10-10T14:00:00Z"),
        end: new Date("2024-10-10T15:30:00Z"),
        allDay: false,
        isDraggable: true,
    },
    {
        title: "Team Building Event",
        start: new Date("2024-10-15T10:00:00Z"),
        end: new Date("2024-10-15T16:00:00Z"),
        allDay: false,
        isDraggable: true,
    },
];

export default events;

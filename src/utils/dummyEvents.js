const events = [
    {
        id: 1,
        title: "Team Meeting",
        start: new Date("2024-10-01T09:00:00Z"),
        end: new Date("2024-10-01T10:00:00Z"),
        allDay: false,
        isDraggable: true,
    },
    {
        id: 2,
        title: "Project Deadline",
        start: new Date("2024-10-05T00:00:00Z"),
        end: new Date("2024-10-05T23:59:59Z"),
        allDay: true,
        isDraggable: true,
    },
    {
        id: 3,
        title: "Client Presentation",
        start: new Date("2024-10-10T14:00:00Z"),
        end: new Date("2024-10-10T15:30:00Z"),
        allDay: false,
        isDraggable: true,
    },
    {
        id: 4,
        title: "Team Building Event",
        start: new Date("2024-10-15T10:00:00Z"),
        end: new Date("2024-10-15T16:00:00Z"),
        allDay: false,
        isDraggable: true,
    },
];

export default events;

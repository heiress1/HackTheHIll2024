function main(events) {
    const currentTime = new Date();

    let latestNonBusy = new Date(currentTime.getTime());

    events.sort((a, b) => new Date(a.start) - new Date(b.start));
    const rescheduledEvents = events.map((event) => {
        if (new Date(event.end) < currentTime) {
            const duration = new Date(event.end) - new Date(event.start);
            let newStart = new Date(
                Math.max(currentTime.getTime() + 1, latestNonBusy.getTime())
            ); // Reschedule to the later of 1ms after current time or latest non-busy time
            const newEnd = new Date(newStart.getTime() + duration);
            latestNonBusy = new Date(newEnd.getTime() + 1); // Update latest non-busy time to 1ms after the new end time
            return { ...event, start: newStart, end: newEnd };
        }
        return event;
    });

    return rescheduledEvents;
}

export default main;

package HackTheHIll2024.Algo;

import java.time.Duration;
import java.time.LocalDate;

public class Event {
    private LocalDate startTime;
    private LocalDate endTime;
    private Duration eventLengthMinutes;
    private String name;
    private String notes;

    public Event(LocalDate startTime, LocalDate endTime, String name, String notes) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
        this.name = name;
        this.notes = notes;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
    }

    public void setEndTime(LocalDate endTime) {
        this.endTime = endTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
    }

    public void setStartEnd(LocalDate startTime, LocalDate endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public LocalDate getEndTime() {
        return endTime;
    }

    public Duration getEventLengthMinutes() {
        return eventLengthMinutes;
    }

    public String getName() {
        return name;
    }

    public String getNotes() {
        return notes;
    }
}

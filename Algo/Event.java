package HackTheHIll2024.Algo;

import java.time.Duration;
import java.time.LocalDateTime;

public class Event {
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Duration eventLengthMinutes;
    private String name;
    private String notes;
    private Boolean isLeisure;

    public Event(LocalDateTime startTime, LocalDateTime endTime, String name, String notes, Boolean isLeisure) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
        this.name = name;
        this.notes = notes;
        this.isLeisure = isLeisure;
    }
    public Event(LocalDateTime startTime, LocalDateTime endTime, String name, String notes) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
        this.name = name;
        this.notes = notes;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
    }

    public void setEndTime(LocalDateTime endTime) {
        this.endTime = endTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
    }

    public void setStartEnd(LocalDateTime startTime, LocalDateTime endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.eventLengthMinutes = Duration.between(startTime,endTime);
    }

    public void setLeisure(Boolean leisure) {
        isLeisure = leisure;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public LocalDateTime getEndTime() {
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

    public Boolean getLeisure() {
        return isLeisure;
    }
}

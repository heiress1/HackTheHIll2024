package HackTheHIll2024.Algo;
import java.time.LocalDate;
import java.time.Duration;
import java.time.LocalTime;
public class Task {
    private int priority;
    private Duration eventLengthMinutes;

    private LocalDate startTime;
    private LocalDate deadline;

    private String name;
    private String notes;

    public Task(int priority, Duration eventLengthMinutes, LocalDate deadlin, String name, String notes) {
        this.priority = priority;
        this.eventLengthMinutes = eventLengthMinutes;
        this.name = name;
        this.notes = notes;
    }

    public int getPriority() {
        return priority;
    }

    public Duration getEventLengthMinutes() {
        return eventLengthMinutes;
    }

    public LocalDate getStartTime() {
        return startTime;
    }

    public String getName() {
        return name;
    }

    public String getNotes() {
        return notes;
    }

    public void setDeadline(LocalDate deadline) {
        this.deadline = deadline;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public void setEventLengthMinutes(Duration eventLengthMinutes) {
        this.eventLengthMinutes = eventLengthMinutes;
    }

    public void setStartTime(LocalDate startTime) {
        this.startTime = startTime;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public LocalDate getDeadline() {
        return deadline;
    }
}

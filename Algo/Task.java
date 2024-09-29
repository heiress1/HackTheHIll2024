package HackTheHIll2024.Algo;
import java.time.LocalDateTime;
import java.time.Duration;

public class Task {
    private int priority;
    private Duration duration;

    private LocalDateTime startTime;
    private LocalDateTime endtime;
    private LocalDateTime deadline;
    private LocalDateTime adjustedDeadline;

    private String name;
    private String notes;

    public Task(int priority, Duration duration, LocalDateTime deadline, String name, String notes) {
        this.priority = priority;
        this.duration = duration;
        this.deadline = deadline;
        this.name = name;
        this.notes = notes;
    }

    public int getPriority() {
        return priority;
    }

    public Duration getDuration() {
        return duration;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public String getName() {
        return name;
    }

    public String getNotes() {
        return notes;
    }

    public LocalDateTime getDeadline() {
        return deadline;
    }

    public LocalDateTime getAdjustedDeadline() {
        return adjustedDeadline;
    }

    public LocalDateTime getEndtime() {
        return endtime;
    }

    public void setDeadline(LocalDateTime deadline) {
        this.deadline = deadline;
    }

    public void setPriority(int priority) {
        this.priority = priority;
    }

    public void setDuration(Duration eventLengthMinutes) {
        this.duration = eventLengthMinutes;
    }

    public void setStartTime(LocalDateTime startTime) {
        this.startTime = startTime;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public void setAdjustedDeadline(LocalDateTime adjustedDeadline) {
        this.adjustedDeadline = adjustedDeadline;
    }

    public void setEndtime(LocalDateTime endtime) {
        this.endtime = endtime;
    }
}
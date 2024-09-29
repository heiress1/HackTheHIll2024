package HackTheHIll2024.Algo;

import java.time.Duration;
import java.time.LocalDateTime;

public class TimeWindow {
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    Duration duration;

    public TimeWindow(LocalDateTime startTime, LocalDateTime endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
        duration = Duration.between(startTime, endTime);
    }

    public void setTimes(LocalDateTime startTime, LocalDateTime endTime) {
        this.startTime = startTime;
        this.endTime = endTime;
        duration = Duration.between(startTime, endTime);
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public Duration getDuration() {
        return duration;
    }
}

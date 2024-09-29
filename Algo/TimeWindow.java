package HackTheHIll2024.Algo;

import java.time.Duration;
import java.time.LocalDateTime;

public class TimeWindow {
    private LocalDateTime startDate;
    private LocalDateTime endDate;
    Duration duration;

    public TimeWindow(LocalDateTime startDate, LocalDateTime endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        duration = Duration.between(startDate, endDate);
    }

    public void setStartDate(LocalDateTime startDate, LocalDateTime endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
        duration = Duration.between(startDate, endDate);
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public LocalDateTime getEndDate() {
        return endDate;
    }

    public Duration getDuration() {
        return duration;
    }
}

package HackTheHIll2024.Algo;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

public class Tester {
    public static void main(String[] args) {
        // Create six dummy tasks
//        List<Task> tasks = new ArrayList<>();
//        tasks.add(new Task(1, Duration.ofHours(2), LocalDateTime.now().plusDays(3), "Task 1", "Notes for Task 1"));
//        tasks.add(new Task(2, Duration.ofHours(1), LocalDateTime.now().plusDays(5), "Task 2", "Notes for Task 2"));
//        tasks.add(new Task(3, Duration.ofHours(4), LocalDateTime.now().plusDays(1), "Task 3", "Notes for Task 3"));
//        tasks.add(new Task(2, Duration.ofMinutes(90), LocalDateTime.now().plusDays(7), "Task 4", "Notes for Task 4"));
//        tasks.add(new Task(5, Duration.ofHours(3), LocalDateTime.now().plusDays(2), "Task 5", "Notes for Task 5"));
//        tasks.add(new Task(1, Duration.ofMinutes(45), LocalDateTime.now().plusDays(6), "Task 6", "Notes for Task 6"));
        Scheduler.importCalendar();
        // Output the tasks to ActualEvents.js
        Scheduler.outputTasksToFile(Scheduler.dbTasks, "src/utils/ActualEvents.js");
    }
}

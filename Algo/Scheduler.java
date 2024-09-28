package HackTheHIll2024.Algo;

import java.time.Duration;
import java.time.LocalDate;
import java.util.ArrayList;

public class Scheduler {
    int minimumBlockSizeMinutes;
    static ArrayList<Task> tasks =  new ArrayList<>();
    static ArrayList<Event> events = new ArrayList<>();
    public static void importCalendar() {
        // Code Here to import any Json files for tasks and events and populate the Lists. Sort task upon import

    }
    public static void outputCalendar(){
        // Function To output all events and tasks as json files
    }

    public static void reBalance(){
        // Function to Rearrange the tasks around the events Based on their priority
        // Will chop up events and try to place them around

    }
    private static void insertTask(Task newTask) {
        int i = tasks.size() - 1;

        // Find the correct position to insert the new task
        while (i >= 0) {
            Task currentTask = tasks.get(i);

            // Compare by priority first
            if (newTask.getPriority() < currentTask.getPriority()) {
                i--;
            } else if (newTask.getPriority() == currentTask.getPriority()) {
                // If priority is the same, compare by deadline
                long currentTaskDuration = Duration.between(LocalDate.now().atStartOfDay(), currentTask.getDeadline().atStartOfDay()).toDays();
                long newTaskDuration = Duration.between(LocalDate.now().atStartOfDay(), newTask.getDeadline().atStartOfDay()).toDays();

                // If new task's deadline is further away, move further up
                if (newTaskDuration >= currentTaskDuration) {
                    break;
                } else {
                    i--;
                }
            } else {
                break;
            }
        }

        // Insert the new task at the correct position
        tasks.add(i + 1, newTask);
    }

    public static void newEvent(LocalDate startTime, LocalDate endTime, String name, String notes){
        Event e = new Event(startTime, endTime, name, notes);
        events.add(e);
    }
    public static void newTask(int priority, Duration duration, LocalDate deadline, String name, String notes){
        Task t = new Task(priority, duration, deadline, name, notes );
        insertTask(t);
    }



}

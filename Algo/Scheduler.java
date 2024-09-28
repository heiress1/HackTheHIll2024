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
        // If it cannot find a valid placement for the events (Some events are uncompleted before the deadline)
        // It will look more aggressively leaking into leisure time
        // (find how much extra time it went over and remove up to that much leisure time)
        // This process will happen on a per-event basis to try to meet that events specific deadline
        // If a event is low Priority close deadline system will break, maybe sort based on a priority * (time to comletion / time to deadline)
        // or do a subgroup of less than 2 days from deadline then ordered by priority. Idk
        // Problem to solve: non max priority close due date could be pushed back too far causing the algo to not find a solution
        // When it could have if it put a higher priority lower due date later.
        // Fix: use a ratio that takes into account due date and priority, postpone leisure time intruption if it makes it easier, have
        // warrings if leisure time is ever going to be intrurpted or if a task cant be finished in time.
        // possible sol, check if sol is possible by ordering by due date and filling time, if not drop leisure, if still not
        // drop lowest priority category, then add in last, continute loop and mention what can be done.
        // Find the next open block by checking distance between start and end of next event

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

    public static void newEvent(LocalDate startTime, LocalDate endTime, String name, String notes, Boolean isLeisure){
        Event e = new Event(startTime, endTime, name, notes, isLeisure);
        events.add(e);
    }
    public static void newTask(int priority, Duration duration, LocalDate deadline, String name, String notes){
        Task t = new Task(priority, duration, deadline, name, notes );
        insertTask(t);
    }



}

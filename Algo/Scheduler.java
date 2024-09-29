package HackTheHIll2024.Algo;

import java.time.Duration;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Comparator;

public class Scheduler {
    static int minimumBlockSizeMinutes = 30;
    static List<Task> dbTasks =  new ArrayList<>();
    static List<Event> dbEvents = new ArrayList<>();
    static List<Task> taskSolution = new ArrayList<>();
    public static void importCalendar() {
        // Code Here to import any Json files for tasks and events and populate the Lists. Sort task upon import
    }
    public static void outputCalendar(){
        // Function To output all events and tasks as json files
    }
    public static void writeTasksAndEvents(List<Task> tasks){
        
    }

    public static String reBalance(){
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
        sortEventsByStartTime(dbEvents);
        sortTasksByAdjustedDeadlineAndPriority(dbTasks);
        //sort tasks by adjusted priority
        adjustTaskDeadlines(dbTasks, dbEvents,false);
        List<Task> tasks = new ArrayList<>(dbTasks);
        List<Event> events = new ArrayList<>(dbEvents);
        List<TimeWindow> timeWindows = new ArrayList<>(findTimeWindows(events));
        int returnCode = scheduleTasks(tasks, timeWindows);
        if (returnCode == 1){
            writeTasksAndEvents(taskSolution);
            return "Success";
        }
        if (returnCode == 0) {
            writeTasksAndEvents(taskSolution);
            return "Unable to complete tasks by deadline, Consider removing less important tasks and events";
        }
        return "Failed to Schedule";


    }
    public static int scheduleTasks(List<Task> tasks, List<TimeWindow> timeWindows) {
        int returnCode = 1;
        int i = tasks.size() - 1;
        int j = 0;
        while (!tasks.isEmpty()) {

            Task task = tasks.get(i);
            TimeWindow window = timeWindows.get(j);
            //Ensure the window's size can support a minimum block length
            if (window.getDuration().compareTo(Duration.ofMinutes(minimumBlockSizeMinutes).plusMinutes(10)) < 0) {
                j += 1;
                window = timeWindows.get(j);
            }
            // timeWindow duration is geq than task duration, insert, adjust time windows to start at the end of new event
            if (window.getDuration().compareTo(task.getDuration().plusMinutes(10)) >= 0) {
                task.setStartTime(window.getStartTime().plusMinutes(5));
                task.setEndtime(task.getStartTime().plus(task.getDuration()));
                window.setTimes(task.getEndtime(), window.getEndTime());
                taskSolution.add(task);
                i += 1;
            } else {
                Task t = new Task(task.getPriority(), window.duration.minusMinutes(10), task.getAdjustedDeadline(), task.getName(), task.getNotes());
                if (task.getAdjustedDeadline().compareTo(window.getEndTime()) == 0) {
                    returnCode = 0;
                    i += 1;
                }
                t.setStartTime(window.getStartTime().plusMinutes(5));
                t.setEndtime(window.getEndTime().minusMinutes(5));
                taskSolution.add(t);
                task.setDuration(task.getDuration().minus(window.duration).minusMinutes(10));
                j += 1;
            }
        }
        return returnCode;
    }
    public int effectiveTimeToDeadline(LocalDateTime deadline, TimeWindow windows){
        return 0;
    }

    public static void adjustTaskDeadlines(List<Task> tasks, List<Event> events, Boolean ignoreLeisure) {
        // Loop through the tasks from the end to the beginning
        for (int i = tasks.size() - 1; i >= 0; i--) {
            Task task = tasks.get(i);
            LocalDateTime taskDeadline = task.getDeadline();

            // Loop through the events from the end to the beginning
            for (int j = events.size() - 1; j >= 0; j--) {
                Event event = events.get(j);
                LocalDateTime eventStartTime = event.getStartTime();
                LocalDateTime eventEndTime = event.getEndTime();

                // Break if the event's end time is less than the task's deadline
                if (eventEndTime.isBefore(taskDeadline)) {
                    task.setAdjustedDeadline(taskDeadline);
                    break; // Exit the loop since further events won't overlap with the task's deadline
                }

                // Check if the task deadline is between the event's start and end times
                if (!taskDeadline.isBefore(eventStartTime) && !taskDeadline.isAfter(eventEndTime)) {
                    if (!ignoreLeisure) {
                        // Set adjustedDeadline to the start of the event
                        task.setAdjustedDeadline(eventStartTime);
                    } else {
                        task.setAdjustedDeadline(taskDeadline);
                    }
                    break; // Exit the loop once the adjustedDeadline is set for this task
                }
            }
        }
    }
    public static void removeLeisureEvents(List<Event> events) {
        // Safe removal during iteration
        events.removeIf(Event::getLeisure);
    }
    public static List<TimeWindow> findTimeWindows(List<Event> events) {
        List<TimeWindow> timeWindows = new ArrayList<>();

        // Get the current time
        LocalDateTime now = LocalDateTime.now();

        // Check the gap between now and the end of the last event
        Event lastEvent = events.get(events.size() - 1);
        Duration durationFromNowToLastEventEnd = Duration.between(now, lastEvent.getEndTime());

        if (durationFromNowToLastEventEnd.toMinutes() >= 40) {
            timeWindows.add(new TimeWindow(now, lastEvent.getEndTime()));
        }

        // Iterate through the list of events and find time windows between them
        for (int i = events.size() - 1; i > 0; i--) {
            Event currentEvent = events.get(i);
            Event previousEvent = events.get(i - 1);

            // Get the duration between the end of the current event and the start of the previous event
            Duration gap = Duration.between(currentEvent.getEndTime(), previousEvent.getStartTime());

            if (gap.toMinutes() >= minimumBlockSizeMinutes + 10) {
                timeWindows.add(new TimeWindow(currentEvent.getEndTime(), previousEvent.getStartTime()));
            }
        }

        return timeWindows;
    }

    public static void sortEventsByStartTime(List<Event> events) {
        events.sort(Comparator.comparing(Event::getStartTime).reversed());
    }

    public static void sortTasksByAdjustedDeadlineAndPriority(List<Task> tasks) {
        tasks.sort(Comparator
                .comparing(Task::getAdjustedDeadline).reversed() // Descending order for deadline
                .thenComparing(Comparator.comparingInt(Task::getPriority).reversed())); // Descending order for priority
    }
    public static void newEvent(LocalDateTime startTime, LocalDateTime endTime, String name, String notes, Boolean isLeisure){
        Event e = new Event(startTime, endTime, name, notes, isLeisure);
        dbEvents.add(e);
    }
    public static void newTask(int priority, Duration duration, LocalDateTime deadline, String name, String notes){
        Task t = new Task(priority, duration, deadline, name, notes );
        dbTasks.add(t);

    }



}

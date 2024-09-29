import DarkButton from "./DarkButton";
import { useState, useEffect } from "react";

// Now we just need to handle submit and attach it to the end of the JSON file

export default function TaskEdit(props) {
    const { mode, tasks, id, setTasks, setSizeState } = props; // Destructure props for clarity

    const [formState, setFormState] = useState({
        id: 0,
        title: "",
        start: new Date(),
        end: new Date(),
        deadline: "",
        priority: 0,
        allDay: false,
        isDraggable: true,
        description: "",
    });

    useEffect(() => {
        const maxId = tasks.reduce(
            (max, item) => (item.id > max ? item.id : max),
            0
        );

        // Initialize task object with empty values
        let task = {
            id: maxId + 1,
            title: "",
            start: new Date(),
            end: new Date(),
            deadline: "",
            priority: 0,
            allDay: false,
            isDraggable: true,
            description: "",
        };

        // If mode is 'edit', find the existing task
        if (mode === "edit") {
            const existingTask = tasks.find((task) => task.id === id);
            if (existingTask) {
                task = existingTask;
            }
        }

        setFormState(task); // Set the form state
    }, [mode, id, tasks]); // Dependencies to watch for changes

    function submitHandler(singleTask, taskList, taskSetter) {
        // Check if the task already exists
        const existingTask = taskList.find((task) => task.id === singleTask.id);

        // If the task exists, update it
        if (existingTask) {
            const updatedTasks = taskList.map((task) =>
                task.id === singleTask.id ? singleTask : task
            );
            taskSetter(updatedTasks);
        } else {
            // If the task does not exist, add it
            taskSetter([...taskList, singleTask]);
        }

        // Reset the form state
        resetFormState();
    }

    const resetFormState = () => {
        setFormState({
            id: 0,
            title: "",
            start: Date.now(),
            end: Date.now(),
            deadline: "",
            priority: 0,
            allDay: false,
            isDraggable: true,
            description: "",
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        // Function to convert "HH:mm" to Date object
        const convertToDate = (timeString) => {
            const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/; // Regex for "HH:mm"
            if (timeRegex.test(timeString)) {
                const [hours, minutes] = timeString.split(":").map(Number);
                const date = new Date(); // Get the current date
                date.setHours(hours, minutes, 0, 0); // Set hours and minutes
                return date; // Return the new Date object
            }
            return null; // Return null if input is not valid
        };

        // Check if the input is for time fields and convert if necessary
        let newValue = value;
        if (name === "start" || name === "end" || name === "deadline") {
            const dateValue = convertToDate(value);
            if (dateValue) {
                newValue = dateValue; // Set newValue to Date object
            }
        }

        // Update the form state
        setFormState((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };

    function formatDateToTimeInput(date) {
        if (date === "") {
            return "";
        }
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        return `${hours}:${minutes}`;
    }

    // Function to handle deletion of the task
    const handleDelete = () => {
        const updatedTasks = tasks.filter((task) => task.id !== formState.id);
        setTasks(updatedTasks); // Update tasks state to remove the task
        resetFormState(); // Reset form state after deletion
        setSizeState("normal"); // Optionally close the edit view
    };

    return (
        <div className="p-5 flex flex-col justify-between w-[48rem]">
            <div>
                <p className="text-white text-3xl font-semibold pl-4">Task</p>
                <hr className="opacity-35 pb-2 mt-4"></hr>
                <form className="flex flex-col mt-4 justify-start gap-5 items-stretch">
                    <div className="flex flex-col gap-2 justify-start">
                        <label className="text-white font-semibold pl-2">
                            Name
                        </label>
                        <input
                            className="bg-zinc-600/20 border w-full p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 focus:shadow-[0_0_15px_1px_] focus:border-main focus:shadow-main/30 focus:outline-none transition-all ease-in-out"
                            type="text"
                            name="title" // Add name for input
                            value={formState.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-2 justify-start">
                            <label className="text-white font-semibold pl-2">
                                Start Time
                            </label>
                            <input
                                type="time"
                                className="focus:shadow-[0_0_15px_1px_] focus:border-main focus:shadow-main/30 focus:outline-none bg-zinc-600/20 border w-fit p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                                name="start" // Add name for input
                                value={formatDateToTimeInput(formState.start)}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-1 justify-start">
                            <label className="text-white font-semibold pl-2">
                                End Time
                            </label>
                            <input
                                className="focus:shadow-[0_0_15px_1px_] focus:border-main focus:shadow-main/30 focus:outline-none bg-zinc-600/20 border w-fit p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                                type="time"
                                name="end" // Add name for input
                                value={formatDateToTimeInput(formState.end)}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-1 justify-start">
                            <label className="text-white font-semibold pl-2">
                                Deadline
                            </label>
                            <input
                                className="focus:shadow-[0_0_15px_1px_] focus:border-main focus:shadow-main/30 focus:outline-none bg-zinc-600/20 border w-fit p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                                type="time"
                                name="deadline" // Add name for input
                                value={formatDateToTimeInput(
                                    formState.deadline
                                )}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 justify-start">
                        <label className="text-white font-semibold pl-2">
                            Priority
                        </label>
                        <input
                            className="bg-zinc-600/20 border w-fit border-zinc-700 text-white rounded-md transition-all ease-in-out"
                            type="range"
                            name="priority" // Add name for input
                            min="0"
                            max="5"
                            step="1"
                            value={formState.priority}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        <label className="text-white font-semibold pl-2">
                            Description
                        </label>
                        <textarea
                            className="focus:shadow-[0_0_15px_1px_] focus:border-main focus:shadow-main/30 focus:outline-none bg-zinc-600/20 border w-full p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                            rows={14}
                            name="description" // Add name for input
                            value={formState.description}
                            onChange={handleChange}
                        />
                    </div>
                </form>
            </div>
            <div className="flex gap-4">
                <DarkButton
                    onClick={() => {
                        submitHandler(formState, tasks, setTasks);
                        setSizeState("normal");
                    }}>
                    {mode === "edit" ? "Update Task" : "Add Task"}
                </DarkButton>
                {mode === "edit" && (
                    <DarkButton
                        onClick={handleDelete}
                        className="bg-red-600 hover:bg-red-700">
                        Delete Task
                    </DarkButton>
                )}
            </div>
        </div>
    );
}

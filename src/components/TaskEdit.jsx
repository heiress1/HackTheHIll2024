import DarkButton from "./DarkButton";
import { useState } from "react";

export default function TaskEdit(props) {
    const mode = props.mode;
    const rawTasks = props.tasks;

    //intialize the task object with empty values
    let task = {
        name: "",
        start: "",
        end: "",
        deadline: "",
        priority: 0,
        description: "",
    };

    //search for the task value if mode is edit
    if (mode === "edit") {
        task = rawTasks.find((task) => task.id === props.id);
    }

    //if mode is edit, then display the task details in each input field, and if mode is new, then make them blank
    //pass the state change prop all the way to eventwrapper so that it can acces this page

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
                            className="bg-zinc-600/20 border w-full p-1 px-2  border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                            type="text"
                        />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-2 justify-start">
                            <label className="text-white font-semibold pl-2">
                                Start Time
                            </label>
                            <input
                                type="time"
                                className="bg-zinc-600/20 border w-fit p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                            />
                        </div>
                        <div className="flex flex-col gap-1 justify-start">
                            <label className="text-white font-semibold pl-2">
                                End Time
                            </label>
                            <input
                                className="bg-zinc-600/20 border w-fit p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                                type="time"
                            />
                        </div>
                        <div className="flex flex-col gap-1 justify-start">
                            <label className="text-white font-semibold pl-2">
                                Deadline
                            </label>
                            <input
                                className="bg-zinc-600/20 border w-fit p-1 px-2 border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                                type="time"
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
                            min="0"
                            max="5"
                            step="1"
                        />
                    </div>
                    <div className="flex flex-col gap-2 justify-start">
                        <label className="text-white font-semibold pl-2">
                            Description
                        </label>
                        <textarea
                            className="bg-zinc-600/20 border w-full p-1 px-2  border-zinc-700 text-white rounded-md hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out"
                            type="text"
                            rows={14}
                        />
                    </div>
                </form>
            </div>
            <DarkButton>Add Task</DarkButton>
        </div>
    );
}

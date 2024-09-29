import SidebarTasks from "./SidebarTasks";
import TaskEdit from "./TaskEdit";
import { useState } from "react";

// import NewTask from "./NewTask"; // Import NewTask component

export default function Sidebar(props) {
    const [mode, setMode] = useState("new");
    const [editID, setEditID] = useState(0);
    const getDummyEvents = props.myEvents;
    const setDummyEvents = props.setMyEvents;

    function sidebarSizeHandler(state) {
        switch (state) {
            case "normal":
                return (
                    <SidebarTasks
                        events={getDummyEvents}
                        setMode={setMode}
                        setEditID={setEditID}
                        setSizeState={props.setSizeState}
                    />
                );
            case "expanded":
                return (
                    <TaskEdit
                        id={editID}
                        mode={mode}
                        tasks={getDummyEvents}
                        setTasks={setDummyEvents}
                        setSizeState={props.setSizeState}
                    />
                );
            default:
                return null;
        }
    }

    function sidebarStyleHandler(state) {
        switch (state) {
            case "normal":
                return { width: "28rem" };
            case "expanded":
                return { width: "48rem" };
            default:
                return { width: "3rem" };
        }
    }

    return (
        <div
            className=" h-[100vh] flex flex-row transition-all ease-in-out"
            style={sidebarStyleHandler(props.sizeState)}>
            {sidebarSizeHandler(props.sizeState)}
            {props.sizeState === "collapsed" ? (
                <button
                    onClick={() => {
                        props.setSizeState("normal");
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#979A96"
                        viewBox="0 0 16 16">
                        <path d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
                    </svg>
                </button>
            ) : (
                <button
                    onClick={() => {
                        props.setSizeState(
                            props.sizeState === "expanded"
                                ? "normal"
                                : "collapsed"
                        );
                    }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="#979A96"
                        viewBox="0 0 16 16">
                        <path d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223" />
                    </svg>
                </button>
            )}
        </div>
    );
}

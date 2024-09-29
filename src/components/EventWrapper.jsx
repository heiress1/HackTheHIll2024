import { useState } from "react";

export default function EventWrapper(props) {
    const [expandState, setExpandState] = useState(false);
    const toggleExpandState = () => {
        setExpandState((prevState) => !prevState);
    };

    return (
        <div className="bg-zinc-600/20 border border-zinc-700 text-white rounded-md p-4 hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out flex flex-row justify-between">
            <div className="flex flex-col items-start">
                <button onClick={toggleExpandState} className="">
                    {props.children}
                </button>
                {expandState ? (
                    <div className="flex flex-col justify-start gap-2 m-4">
                        <div>
                            <div className="text-xs">
                                {"Start: " +
                                    props.start.toDateString() +
                                    " " +
                                    props.start.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                            </div>
                            <div className="text-xs">
                                {"End: " +
                                    props.end.toDateString() +
                                    " " +
                                    props.end.toLocaleTimeString([], {
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })}
                            </div>
                        </div>
                        {props.description != null ? (
                            <div className="text-xs">{props.description}</div>
                        ) : null}
                    </div>
                ) : null}
            </div>
            <button
                onClick={() => {
                    props.setSizeState("expanded");
                    props.setMode("edit");
                    props.setEditID(props.id);
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="white"
                    viewBox="0 0 16 16">
                    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                </svg>
            </button>
        </div>
    );
}

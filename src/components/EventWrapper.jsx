import { useState } from "react";

export default function EventWrapper(props) {
    const [expandState, setExpandState] = useState(false);
    const toggleExpandState = () => {
        setExpandState((prevState) => !prevState);
    };

    return (
        <div
            onClick={toggleExpandState}
            className="bg-zinc-600/20 border border-zinc-700 text-white rounded-md p-4 hover:shadow-[0_0_15px_1px_] hover:border-main hover:shadow-main/30 transition-all ease-in-out">
            <p className="">{props.children}</p>
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
    );
}

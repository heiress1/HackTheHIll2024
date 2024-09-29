import { useState } from "react";

export default function EventWrapper(props) {
    const [expandState, setExpandState] = useState(false);
    const toggleExpandState = () => {
        setExpandState((prevState) => !prevState);
    };

    return (
        <div
            onClick={toggleExpandState}
            className="bg-mid text-dark rounded-lg p-4 hover:opacity-70 transition-all ease-in-out">
            <p className="font-bold">{props.children}</p>
            {expandState ? (
                <>
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
                </>
            ) : null}
        </div>
    );
}

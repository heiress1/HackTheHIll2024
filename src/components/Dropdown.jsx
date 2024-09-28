import { useState } from "react";

export default function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Week");

    function viewChangeHandler(state) {
        props.viewChangeHandler(state);
    }

    return (
        <div>
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="flex flex-row justify-center items-center p-2 px-4 gap-4 border border-dark text-dark rounded-lg">
                {selectedOption}
                {!isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16">
                        <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16">
                        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>
                )}
            </button>
            {isOpen && (
                <div className="bg-white border border-dark text-dark absolute flex flex-col p-2 px-4  rounded-lg gap-4 pd-4 mt-4 z-[50]">
                    <button
                        className=" rounded-md p-2 transition-all ease-in-out"
                        onClick={() => {
                            setIsOpen(false);
                            setSelectedOption("Day");
                            viewChangeHandler("day");
                        }}>
                        Day
                    </button>
                    <button
                        className="bg-white rounded-md p-2 transition-all ease-in-out"
                        onClick={() => {
                            setIsOpen(false);
                            setSelectedOption("Week");
                            viewChangeHandler("week");
                        }}>
                        Week
                    </button>
                    <button
                        className="bg-white rounded-md p-2 transition-all ease-in-out"
                        onClick={() => {
                            setIsOpen(false);
                            setSelectedOption("Month");
                            viewChangeHandler("month");
                        }}>
                        Month
                    </button>
                </div>
            )}
        </div>
    );
}

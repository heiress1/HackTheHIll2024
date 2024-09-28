import Dropdown from "./Dropdown.jsx";

export default function CalendarToolbar(props) {
    function viewChangeHandler(state) {
        props.stateHandler(state);
    }

    return (
        <div className="h-16 p-4 bg-white rounded-lg flex flex-row justify-start items-center gap-4 ">
            <Dropdown viewChangeHandler={viewChangeHandler}></Dropdown>
        </div>
    );
}

import Dropdown from "./Dropdown.jsx";
import Toolbar from "react-big-calendar/lib/Toolbar";
import Button from "./Button.jsx";

class BasicToolbar extends Toolbar {
    constructor(props) {
        super(props);
    }

    handleDayChange = (event, mconte) => {
        mconte(event.target.value);
    };

    handleNavigate = (detail, elem) => {
        detail.navigate(elem);
    };

    render() {
        return (
            <>
                <div className="rounded-lg bg-mid">
                    <div className="rbc-toolbar h-16 p-4 m-0 bg-white rounded-lg flex flex-row justify-between items-center gap-4 ">
                        <div className="flex flex-row items-center gap-4">
                            <div className="rbc-btn-group">
                                <select
                                    className="form-control px-3 p-2 border border-dark rounded-lg text-dark"
                                    onChange={(e) =>
                                        this.handleDayChange(e, this.view)
                                    }
                                    defaultValue={"week"}>
                                    <option className="optionbar" value="day">
                                        Day
                                    </option>
                                    <option className="optionbar" value="week">
                                        Week
                                    </option>
                                    <option className="optionbar" value="month">
                                        Month
                                    </option>
                                    <option
                                        className="optionbar"
                                        value="agenda">
                                        Agenda
                                    </option>
                                </select>
                            </div>

                            <Button
                                type="button"
                                className="nextp-btn"
                                onClick={() =>
                                    this.handleNavigate(this, "PREV")
                                }>
                                Prev
                            </Button>
                            <Button
                                type="button"
                                className="nextp-btn"
                                onClick={() =>
                                    this.handleNavigate(this, "NEXT")
                                }>
                                Next
                            </Button>
                        </div>
                        <div className="flex flex-row items-center gap-4">
                            <div className="text-dark font-semibold text-xl">
                                {this.props.label}
                            </div>
                            <Button
                                type="button"
                                onClick={() =>
                                    this.handleNavigate(this, "TODAY")
                                }>
                                Today
                            </Button>
                        </div>
                    </div>
                    <div className="bg-mid h-6"></div>
                </div>
                <div className="rounded-lg bg-mid">
                    <div className="bg-mid h-6"></div>
                    <div className="bg-white h-3 p-4 rounded-t-lg"></div>
                </div>
            </>
        );
    }
}

export default function CalendarToolbar(props) {
    return <BasicToolbar {...props} />;
}

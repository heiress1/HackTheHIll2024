import SidebarTasks from "./SidebarTasks";

export default function Sidebar(props) {
    return (
        <div className="bg-white h-[100vh] w-[30vw] flex flex-col">
            {props.leftState === "base" ? <SidebarTasks /> : null}
        </div>
    );
}

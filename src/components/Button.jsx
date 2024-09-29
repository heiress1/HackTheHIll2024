export default function Button(props) {
    return (
        <div
            onClick={props.onClick}
            className="rounded-md bg-white border-dark text-dark border p-4 h-8 flex justify-center items-center hover:bg-main hover:text-white hover:border-main hover:shadow-[0_0_15px_1px_] hover:shadow-main/50 transition-all  ease-in-out">
            {props.children}
        </div>
    );
}

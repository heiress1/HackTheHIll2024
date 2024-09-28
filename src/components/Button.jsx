export default function Button(props) {
    return (
        <div
            onClick={props.onClick}
            className="rounded-lg bg-white border-dark text-dark border p-4 h-8 flex justify-center items-center hover:bg-dark hover:text-white transition-all  ease-in-out">
            {props.children}
        </div>
    );
}

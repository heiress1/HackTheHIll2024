export default function DarkButton(props) {
    return (
        <div
            onClick={props.onClick}
            className="rounded-lg bg-zinc-600/20 border border-zinc-700 text-white p-4 h-10 flex justify-center items-center hover:opacity-70 transition-all ease-in-out">
            {props.children}
        </div>
    );
}

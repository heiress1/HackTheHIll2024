export default function DarkButton(props) {
    return (
        <div
            onClick={props.onClick}
            className="rounded-md bg-zinc-600/20 border border-zinc-700 text-white p-4 h-10 flex justify-center items-center hover:border-main hover:shadow-[0_0_15px_1px_] hover:shadow-main/30 transition-all ease-linear">
            {props.children}
        </div>
    );
}

export default function Card(props) {
    return (
        <div style={{ backgroundColor: props.color }} className="flex flex-col">
            <h5>{props.title}</h5>
            <p>{props.content}</p>
        </div>
    );
}

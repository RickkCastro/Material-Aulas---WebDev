import "./App.css";
import Card from "./Components/Card";

function App() {
    return (
        <div>
            <h1>Hello World!</h1>
            <Card title={"Card 1"} content={"lorem ipsum"} color="red" />
            <Card title={"Card 2"} content={"lorem ipsum"} color="blue" />
            <Card title={"Card 3"} content={"lorem ipsum"} color="green" />
        </div>
    );
}

export default App;

import { useRef, useState, useEffect } from "react";
import Button from "../components/Button";

const apiKey = "4382a6d86989831f24b2dd6d286b6335";
console.log("API Key:", apiKey);

export default function Teams() {
    const [frases, setFrases] = useState([]);
    const scrollRef = useRef(null);

    async function fetchFrase() {
        await fetch(`https://api.kanye.rest`)
            .then((response) => response.json())
            .then((data) =>
                setFrases((prevFrases) => [...prevFrases, data.quote])
            );
    }

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [frases]);

    return (
        <div className="flex flex-col h-full p-4">
            <Button variant="principal" size="large" onClick={fetchFrase}>
                Buscar Frase
            </Button>
            <div
                className="mt-4 space-y-2 overflow-y-auto flex-1"
                ref={scrollRef}
            >
                {frases.map((frase) => {
                    return <p key={frase}>{frase}</p>;
                })}
            </div>
        </div>
    );
}

import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";

export default function Usuarios() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error))
            .finally(console.log("Chamada finalizada"));
    }, []);

    console.log(users);

    return (
        <div className="p-6 flex-1 bg-gray-100 h-full">
            <h1 className="text-2xl font-bold">Usuários</h1>
            <ul className="flex flex-wrap gap-2 overflow-y-auto h-full">
                {users.length > 0 ? (
                    users.map((user) => <UserCard key={user.id} user={user} />)
                ) : (
                    <p>Sem usuários...</p>
                )}
            </ul>
        </div>
    );
}

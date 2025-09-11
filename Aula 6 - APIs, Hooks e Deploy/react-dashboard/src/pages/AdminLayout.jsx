import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
    return (
        <div className="flex max-h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 bg-gray-100 min-h-screen max-h-screen p-6">
                <Outlet />
            </div>
        </div>
    );
}

export default function UserCard({ user }) {
    const { name, email, phone } = user;
    return (
        <div
            style={{
                background: "#b4c4f1",
                borderRadius: "12px",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                padding: "2rem",
                width: "320px",
                margin: "1rem auto",
                textAlign: "center",
                fontFamily: "Segoe UI, Arial, sans-serif",
            }}
        >
            <div
                style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "#e0e7ef",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 28,
                    color: "#4a5a6a",
                    margin: "0 auto 1rem auto",
                    fontWeight: "bold",
                }}
            >
                {name ? name[0].toUpperCase() : "?"}
            </div>
            <h2
                style={{
                    margin: "0 0 0.5rem 0",
                    fontSize: "1.4rem",
                    color: "#2d3a4a",
                }}
            >
                {name}
            </h2>
            <p
                style={{
                    margin: "0.2rem 0",
                    color: "#4a5a6a",
                    fontSize: "1rem",
                }}
            >
                {email}
            </p>
            <p
                style={{
                    margin: "0.2rem 0",
                    color: "#4a5a6a",
                    fontSize: "1rem",
                }}
            >
                {phone}
            </p>
        </div>
    );
}

import { useState } from "react"
import { login } from "../service/service";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handelLogin = async () => {
        setLoading(true);
        const res = await login(email, password);
        setLoading(false);
        return res;
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px", transition: "all 0.3s ease" }}>
                <h1 style={{ marginBottom: "20px", transition: "all 0.3s ease" }}>Login</h1>
                <input
                    style={{ marginBottom: "10px", padding: "5px", width: "300px", borderRadius: "5px", border: "1px solid #ccc", transition: "all 0.3s ease" }}
                    onChange={(e) => { setEmail(e.target.value) }}
                    type="email"
                    placeholder="example@example.com"
                />
                <input
                    style={{ marginBottom: "10px", padding: "5px", width: "300px", borderRadius: "5px", border: "1px solid #ccc", transition: "all 0.3s ease" }}
                    onChange={(e) => { setPassword(e.target.value) }}
                    type="password"
                    placeholder="**********"
                />
                <button
                    style={{ padding: "5px 10px", borderRadius: "5px", border: "1px solid #007bff", backgroundColor: "#007bff", color: "#fff", cursor: "pointer", transition: "all 0.3s ease" }}
                    onClick={handelLogin}
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
            </div>
            <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}></div>
        </>
    )
}

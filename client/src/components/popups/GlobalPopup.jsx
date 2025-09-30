import {useEffect, useState} from "react";

const GlobalPopup = () => {
    const [popup, setPopup] = useState(null);

    useEffect(() => {
        const showPopup = (e) => setPopup(e.detail);

        window.addEventListener("SHOW_POPUP", showPopup);

        return () => window.removeEventListener("SHOW_POPUP", showPopup);
    }, []);

    if (!popup) return null;

    return (
        <div style={{
            position: "fixed", top: "20px", right: "20px", padding: "10px 20px",
            borderRadius: "8px", color: "#fff",
            width: "200px",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: popup.type === "error" ? "#e74c3c" : "#2ecc71"
        }}>
            {popup.message}
            <button onClick={() => setPopup(null)}>✖</button>
        </div>
    );
};

export default GlobalPopup;

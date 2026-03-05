import { useEffect } from "react";

export default function Toast({ message, onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      position: "fixed", bottom: 40, left: "50%", transform: "translateX(-50%)",
      background: "#7f1d1d", border: "1px solid #ef444430", borderRadius: 8,
      padding: "10px 18px", color: "#fca5a5", fontSize: 11, zIndex: 999,
      fontFamily: "'IBM Plex Mono',monospace", boxShadow: "0 4px 20px rgba(0,0,0,.5)",
      whiteSpace: "nowrap", display: "flex", alignItems: "center", gap: 7,
    }}>
      <span style={{ fontSize: 13 }}>⚠</span>
      {message}
    </div>
  );
}

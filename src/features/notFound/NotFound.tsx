import type { JSX } from "react";

export default function NotFound():JSX.Element {
  return (
    <div
      style={{
        padding: "40px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "20px" }}>Page not found</p>
    </div>
  );
}
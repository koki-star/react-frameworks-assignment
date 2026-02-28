import { useState } from "react";

export default function Index() {
  const [tip, setTip] = useState("");

  const getTip = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setTip(data.slip.advice);
    } catch (error) {
      setTip("No tip loaded right now. Try again in a moment.");
    }
  };

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>Seattle Study Spots</h1>

      <p>
        I rebuilt this page in Remix to compare it with Next.js. The idea is
        still personal to me. Finding good study spots in Seattle is something
        I actually deal with.
      </p>

      <h2>1. A quiet library day</h2>
      <p>
        Some days I just need silence. A library gives me structure and focus.
      </p>

      <h2>2. A coffee shop with outlets</h2>
      <p>
        The real challenge is finding space, power outlets, and decent WiFi.
      </p>

      <h2>3. A weekend reset spot</h2>
      <p>
        A calm view helps me reset mentally before diving back into studying.
      </p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={getTip}>Get a Study Tip</button>

        {tip && <p style={{ marginTop: "10px" }}>"{tip}"</p>}
      </div>
    </main>
  );
}
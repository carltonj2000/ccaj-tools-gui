import { createRoot } from "react-dom/client";

const rootId = document.getElementById("root");
const root = createRoot(rootId);
root.render(<h2 className="text-4xl">Hello from React 3!</h2>);

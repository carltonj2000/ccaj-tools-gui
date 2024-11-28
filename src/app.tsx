import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";

const rootId = document.getElementById("root");
const root = createRoot(rootId);
root.render(
  <div>
    <h2 className="text-4xl">Hello from React 3!</h2>
    <Button className="m-4">Click Me!</Button>
  </div>
);

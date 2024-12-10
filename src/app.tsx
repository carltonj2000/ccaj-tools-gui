import { createRoot } from "react-dom/client";
import { Button } from "./components/ui/button";
import Accounts from "./components/accounts";

const rootId = document.getElementById("root");
const root = createRoot(rootId);
root.render(
  <div className="p-1">
    <Accounts />
  </div>
);

import tabs from "./modules/tabs";
import "./modules/slider";

window.addEventListener("DOMContentLoaded", () => {
  "use strict";

  tabs(
    ".analyst-tabs",
    ".analyst-tab",
    ".analyst-content",
    "analyst-tab--active"
  );
});

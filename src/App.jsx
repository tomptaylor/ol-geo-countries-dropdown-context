import { createSignal } from "solid-js";
import Home from "./pages/Home";
import Report from "./pages/Report";
import { useReportContext } from "./context/ReportContext";

function App() {
  const { items } = useReportContext();
  return (
    <div>
      in app 
       <For each={items}>
            {(item) => (
              <p class="my-3">{item.region}</p>
            )}
          </For>
      {items[0].region}
      <Report></Report>
    </div>
  );
}
export default App;

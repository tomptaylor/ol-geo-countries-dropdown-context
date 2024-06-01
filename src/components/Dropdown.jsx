import { Show } from "solid-js";
import { useReportContext } from "../context/ReportContext";

 
const Dropdown = () => {
  const { items } = useReportContext();
    //document.getElementById("dropdown").value = items[0].region;   
    return(

        <>
                <Show when={items.length} fallback={<p>Your cart is empty.</p>}>
              hi from dropdown {items[0].region}
   
            <label for="dropdown">Choose an option:</label>
            <select id="dropdown" aria-label="Choose an option" onchange="()=>{alert('hi')}"> 
            <option value="1">Region1</option>
            <option value="2">Region 2</option>
            <option value="3">Region 3</option>
            <option value="4">Region 4</option>
            <option value="5">Region 5</option>
            <option value="6">Region 6</option>
            <option value="7">Region 7</option>
            <option value="8">Region 8</option>
            <option value="9">Region 9</option>
            <option value="10">Region 10</option>
            </select>
            </Show>
        </>

    )}
    export default Dropdown
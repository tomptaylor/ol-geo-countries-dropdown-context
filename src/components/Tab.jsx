import MapComponent from "../MapComponent"
import Dropdown from "./Dropdown"
import { useReportContext } from "../context/ReportContext"

const Tab = () => {
    const { items } = useReportContext();
    return(
<>

<div role="tablist" className="bg-gray-500 tabs tabs-lifted ">
  <input type="radio" name="my_tabs_2" role="tab" className="tab hover:text-blue-600" aria-label="General" checked />
  <div role="tabpanel" className="p-6 tab-content bg-slate-500 bg-base-100 border-base-300 rounded-box">Tab content 1</div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab hover:text-blue-600" aria-label="Geography"  />
  <div role="tabpanel" className="p-6 tab-content bg-slate-500 bg-base-100 border-base-300 rounded-box">
      <Dropdown></Dropdown>
      <MapComponent></MapComponent></div>

  <input type="radio" name="my_tabs_2" role="tab" className="tab hover:text-blue-600" aria-label="Narriative" />
  <div role="tabpanel" className="p-6 tab-content bg-slate-500 bg-base-100 border-base-300 rounded-box">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga labore odit, alias eligendi porro eaque itaque minima, eius eveniet id iusto doloribus amet reiciendis odio praesentium! Ducimus, facilis voluptate.</div>
</div>
</>
    )
}
export default Tab
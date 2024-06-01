import { useContext } from "solid-js";
import { useReportContext } from "../context/ReportContext";
import Tab from "../components/Tab";

const Report = () => {
  const { items } = useReportContext();

  return (
    <div>
      hi from report
      {items[0].region}
      <Tab />
    </div>
  );
};
export default Report;

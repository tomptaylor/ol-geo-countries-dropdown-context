import { createContext, useContext } from "solid-js";
import { createStore } from "solid-js/store";

export const ReportContext = createContext([])

export function ReportProvider(props) {
  const [items, setItems] = createStore([
    {region: 9}
  ])

  return (
    <ReportContext.Provider value={{ items, setItems }}>
      {props.children}
    </ReportContext.Provider>
  )
}

export function useReportContext() {
  return useContext(ReportContext)
}
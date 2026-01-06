import { HotTable } from "@handsontable/react";
import "handsontable/dist/handsontable.full.min.css";

export default function Spreadsheet() {
  return (
    <HotTable
      data={[
        ["Name", "Age"],
        ["Alice", 25],
        ["Bob", 30],
      ]}
      colHeaders
      rowHeaders
      width="100%"
      height="400"
      licenseKey="non-commercial-and-evaluation"
    />
  );
}

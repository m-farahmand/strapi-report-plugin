import React from "react";
import ReactDOM from "react-dom";
import ReactExport from "react-export-excel";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

var cptable = {};

import Download from '@strapi/icons/Download';
import { Button } from '@strapi/design-system';
import {request} from '@strapi/helper-plugin';
const ExcelExport = () => {

  const data = [
    { firstname: "jill", lastname: "smith", age: 22 },
    { firstname: "david", lastname: "warner", age: 23 },
    { firstname: "nick", lastname: "james", age: 26 }
  ];
  const handlerExcelExport = async() => {
    const tmpdata= await request('/content-manager/collection-types/api::city.city', {
      method: 'GET',
    });
    console.log(tmpdata);
  };
  const filterColumns = (data) => {
    // Get column names
    const columns = Object.keys(data[0]);

    // Remove by key (firstname)
    const filterColsByKey = columns.filter(c => c !== 'firstname');


    // OR use the below line instead of the above if you want to filter by index
    // columns.shift()

    return filterColsByKey // OR return columns
  };
  return (
    <div>
      <ExcelFile filename="test" element={<Button id="btn_excel_export" variant='secondary' endIcon={<Download />} onClick={handlerExcelExport }>download excel</Button>}>
        <ExcelSheet data={data} name="Test">
          {
            filterColumns(data).map((col) => {
              return <ExcelColumn label={col} value={col} />
            })
          }
        </ExcelSheet>
      </ExcelFile>
    </div>
  )
}

export default ExcelExport;
import Controller from "@ember/controller";
import { action } from "@ember/object";

export default class ApplicationController extends Controller {


  get tableData(){ 
    return this.model.tableData
  }

  get columnOverrides() {
    return [{key: 'status', cellComponent: 'cells/cell-status'}]
  }
  
  get tableDataReadable(){ 
    return JSON.stringify(this.model.tableData).replaceAll(',', ',\n')
  }

  @action
  onDownloadButtonClick(downloadingRows) {
    console.log('rows downloading: ', downloadingRows);

    let alertRows = downloadingRows.map(({path, device}) => {
      return `device: ${device} | path: ${path}`
    })


    window.alert(alertRows.join('\n'))
  }

  @action
  validateRowSelectability(row) {
    return row.status === 'available'
  }
}
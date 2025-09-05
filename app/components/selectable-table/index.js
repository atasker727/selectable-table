import { action } from "@ember/object";
import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class SelectableTable extends Component {
  @tracked selectedRows = [];
  

  get columns() {
    return Object.keys(this.args?.rows?.[0] || [])
  }
  
  get isAllRowsSelected() {
    return this.selectedRows?.length === this?.selectableRowIDs?.length
  }

  
  get selectedRowsCount() {
    return this.selectedRows?.length || 0;
  }
  
  get rowsWithIDs() {
    return (this.args?.rows || []).map((row, index) => ({
      _id: index,
      ...row
    }))
  }

  get selectableRowIDs() {
    return this.rowsWithIDs?.filter(this.args?.getRowSelectability).map(({_id}) => _id)
  }

  @action
  toggleRowSelection(row) {
    if(!this.selectableRowIDs.includes(row._id)) {
      return
    }

    let rowsWithoutID = this.selectedRows?.filter(selectedRow => selectedRow._id !== row._id)

    if(rowsWithoutID.length === this.selectedRows.length) {
      this.selectedRows = [...this.selectedRows, row];
    } else {
      this.selectedRows = rowsWithoutID;
    }

  }

  @action
  toggleSelectAllRows() {
    if(this.isAllRowsSelected) {
      this.selectedRows = [];
    } else {
      this.selectedRows = this.rowsWithIDs.filter(({_id}) => this.selectableRowIDs.includes(_id));
    }
  }

  @action
  onDownloadButtonClick(){
    this.args?.onDownloadButtonClick(this.selectedRows.map(row => {
      delete row._id;
      return row
    }))
  }
}
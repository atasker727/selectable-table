import Component from "@glimmer/component";

export default class TableRow extends Component {
  get rowContents() {
    return Object.entries(this.args?.row || {}).filter(item => item[0] !== '_id')
  }

  get cellContents() {
    return this.rowContents.map(([key, value]) => {
        let cell = {
          value
        }
        let override = this.args.columnOverrides.find(override => override.key == key);
        if(override && override.cellComponent) {
          cell.cellComponent = override.cellComponent;
        }
        return cell
    })
  }

  get isRowSelectable() {
    return this.args.isSelectableRow && this.args?.getRowSelectability?.(this.args.row)
  }
}
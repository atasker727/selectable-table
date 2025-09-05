import Component from "@glimmer/component";

export default class CellStatus extends Component {
  AVAILABLE_STATUS = 'available';

  get iconClass() {
    return this.args?.content?.toLowerCase?.() === this.AVAILABLE_STATUS ? 'cell-status--icon_visible' : 'cell-status--icon_hidden';
  }
}
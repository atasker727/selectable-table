import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class CellSelectRow extends Component {
  @action
  onClick(ev) {
    ev.stopPropagation();
    this.args.onClick()
  }
}
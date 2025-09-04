import { action } from "@ember/object";
import Component from "@glimmer/component";

export default class CellSelectRow extends Component {
  @action
  onClick(ev) {
    console.log(ev.target.checked);
    this.args?.onClick(ev.target.checked)
  }
}
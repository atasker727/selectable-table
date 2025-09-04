import Component from "@glimmer/component";
// import 'index.css'

export default class SelectableTable extends Component {

  AVAILABLE_STATUS =  'available';

  get showIcon() {
    this.args?.status?.toLowercase() === AVAILABLE_STATUS;
  }
}
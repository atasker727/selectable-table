// import { setupRenderingTest } from 'ember-qunit';
// import { module, test } from "qunit";
// import { render, getContext } from "@ember/test-helpers";
// import { hbs } from 'ember-cli-htmlbars';


// module('Unit | Component | CellSelectRow', hooks => {
//   setupRenderingTest(hooks);
  
//   let template = hbs`<Cells::CellSelectRow
//     @content={{this.content}}
//   />`

//   let defaultProps = {
//     content: '',
//   }

//   const selectors = {
//     cellSelectRow: '[data-test--cell-select-row]',
//   }

//   async function renderComponent(overrides = {}) {
//     let props = {
//       ...defaultProps,
//       ...overrides
//     }

//     getContext().setProperties(props);

//     return await render(template, props)
//   }

//   test('the component renders with content', async function(assert) {
//     let args = {content: 'test'}
//     await renderComponent(args)
    
    
//     assert.dom(selectors.cellText).exists({count: 1})
//     assert.dom(selectors.cellText).includesText(args.content)
//   })
// })
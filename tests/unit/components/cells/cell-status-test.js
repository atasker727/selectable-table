import { setupRenderingTest } from 'ember-qunit';
import { module, test } from "qunit";
import { render, getContext } from "@ember/test-helpers";
import { hbs } from 'ember-cli-htmlbars';


module('Unit | Component | CellStatus', hooks => {
  setupRenderingTest(hooks);
  
  let template = hbs`<Cells::CellStatus
    @content={{this.content}}
  />`

  let defaultProps = {
    status: '',
    content: '',
  }

  const selectors = {
    cellStatus: '[data-test--cell-status]',
    statusIcon: '[data-test--cell-status-icon]',
  }

  async function renderComponent(overrides = {}) {
    let props = {
      ...defaultProps,
      ...overrides
    }

    getContext().setProperties(props);

    return await render(template, props)
  }

  test('the component renders with content', async function(assert) {
    let args = {content: 'test'}
    await renderComponent(args)
    
    
    assert.dom(selectors.cellStatus).exists({count: 1})
    assert.dom(selectors.cellStatus).includesText(args.content)
  })


  test('the icon is visible when status is available', async function(assert) {
    let args = {content: 'available'}
    await renderComponent(args)
    
    assert.dom(selectors.statusIcon).exists({count: 1})
    assert.dom(selectors.statusIcon).hasClass('cell-status--icon_visible')
  })


  test('the icon is not visible when status is not available', async function(assert) {
    let args = {content: 'scheduled'}
    await renderComponent(args)
    
    assert.dom(selectors.statusIcon).exists({count: 1})
    assert.dom(selectors.statusIcon).hasClass('cell-status--icon_hidden')
  })

})
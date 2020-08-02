import Item from '../../../src/client/components/item'

describe('Items', () => {
  let component
  let props

  before(() => {
    props = {
      id: 1001,
      name: 'Test Name',
      dietaries: ['n!']
    }
  })
  it('isElement', () => {
    expect(isElement(<Item {...props} />)).to.be.ok()
  })
  it('Works with no dietaries', () => {
    component = mount(<Item id={props.id} name={props.name} />)
    expect(component.find('h2').text()).to.equal(props.name)
    expect(component.find('p > span').length).to.equal(0)
  })
  it('Displays information', () => {
    component = mount(<Item {...props} />)
    expect(component.find('h2').text()).to.equal(props.name)
    expect(component.find('p > span').at(0).text()).to.equal(props.dietaries[0])
  })
  it('Clicking addItem', (done) => {
    const addItem = (id) => {
      expect(id).to.equal(props.id)
      done()
    }
    component = mount(<Item {...props} addItem={addItem} />)
    component.find('li').simulate('click')
  })
  it('Clicking addItem with a pid', (done) => {
    props.pid = '1001-0'
    const addItem = (id) => {
      expect(id).to.equal(props.pid)
      done()
    }
    component = mount(<Item {...props} addItem={addItem} />)
    component.find('li').simulate('click')
  })
  it('Clicking removeItem', (done) => {
    const removeItem = (id) => {
      expect(id).to.equal(props.pid)
      done()
    }
    component = mount(<Item {...props} removeItem={removeItem} />)
    component.find('button').simulate('click')
  })
})

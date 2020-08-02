require('jsdom-global/register')
const sinon = require('sinon')
const chai = require('chai')
const { isElement } = require('react-dom/test-utils')
const React = require('react')
const { configure, mount, shallow, render } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

configure({ adapter: new Adapter() })

// Setup sinon and chai
chai.config.includeStack = true
chai.use(require('sinon-chai'))
chai.use(require('dirty-chai'))

// Pass global options for use in all tests
global.React = React
global.mount = mount
global.shallow = shallow
global.render = render
global.isElement = isElement
global.sinon = sinon
global.expect = chai.expect
global.should = chai.should()

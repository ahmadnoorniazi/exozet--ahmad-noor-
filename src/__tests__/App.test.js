import React from 'react'
import { mount } from 'enzyme'
import App from '../App'

const mockedReplace = jest.fn()
// without making a copy you will have a circular dependency problem during mocking
const originalWindow = { ...window }

describe('<App /> Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  afterAll(() => {
    wrapper.unmount()
  })

  it('should render correctly', () => {
    // const component = wrapper()
    expect(wrapper).toMatchSnapshot()
  })

  it('should render different Route', () => {
    const windowSpy = jest.spyOn(global, 'window', 'get')
    windowSpy.mockImplementation(() => ({
      ...originalWindow,
      location: {
        ...originalWindow.location,
        pathname: '/john',
        replace: mockedReplace
      }
    }))
    wrapper.update()
    expect(window.location.pathname).toEqual('/john')
    windowSpy.mockRestore()
  })
})

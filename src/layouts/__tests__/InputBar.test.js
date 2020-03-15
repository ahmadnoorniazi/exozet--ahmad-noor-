import React from 'react'
import { mount } from 'enzyme'
import InputBar from '../InputBar'

const historyMock = { push: jest.fn() }

describe('InputBar', () => {
  let wrapper
  const setState = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation(init => [init, setState])

  beforeEach(() => {
    wrapper = mount(<InputBar history={historyMock} />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should render correctly', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should call historyMock.push', () => {
    const Input = wrapper.find('input')
    const button = wrapper.find('button')
    Input.simulate('change', { target: { value: 'john' } })
    wrapper.update()
    button.simulate('click')
    expect(historyMock.push).toHaveBeenCalledWith('/john')
  })
})

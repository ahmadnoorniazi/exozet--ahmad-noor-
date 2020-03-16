import React from "react";
import { shallow } from "enzyme";
import axiosMock from "axios";
import { act } from "react-dom/test-utils";
import mockData from "../mockData";
import useFetch from "../fetchHook";

const mountReactHook = hook => {
  const Component = ({ children }) => children(hook());
  const componentHook = {};
  let componentMount;

  act(() => {
    componentMount = shallow(
      <Component>
        {hookValues => {
          Object.assign(componentHook, hookValues);
          return null;
        }}
      </Component>
    );
  });
  return { componentMount, componentHook };
};

const { get } = axiosMock;

describe("useFetch Hook", () => {
  let setupComponent;
  let hook;

  beforeEach(() => {
    get.mockImplementation(() => {
      return Promise.resolve({ data: mockData });
    });
    setupComponent = mountReactHook(useFetch); // Mount a Component with our hook
    hook = setupComponent.componentHook;
  });

  afterAll(() => {
    jest.clearallmocks();
  });

  const setState = jest.fn();

  const useStateSpy = jest.spyOn(React, "useState");
  const useEffectSpy = jest.spyOn(React, "useEffect");

  useStateSpy.mockImplementation(init => [init, setState]);
  useEffectSpy.mockImplementation(f => f());

  it("should call setSate", () => {
    expect(hook[0]).toBe(null);
    expect(setState).toHaveBeenCalled();
  });

  it("should call setIsLoading", () => {
    expect(setState.mock.calls[0][0]).toBe(true);
  });

  it("should call setResponse with mockData", () => {
    expect(setState.mock.calls[1][0]).toStrictEqual(mockData);
  });

  it("should call setIsLoading with false", () => {
    expect(setState.mock.calls[2][0]).toBe(false);
  });
});

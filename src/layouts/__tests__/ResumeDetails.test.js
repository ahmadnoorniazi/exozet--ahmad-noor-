import React from "react";
import { mount } from "enzyme";
import ResumeDetails from "../ResumeDetail";
// const historyMock = { push: jest.fn() }
import mockData, { userMock } from "../../mockData";
import { getRepoApi, getUserApi } from "../../utils";
import useFetch from "../../fetchHook";

jest.mock("../../fetchHook");

const name = "John";
describe("<ResumeDetails /> Component", () => {
  let wrapper;

  beforeEach(() => {
    useFetch.mockImplementation(() => {
      return [mockData, false, false];
    });
    wrapper = mount(<ResumeDetails name={name} />);
  });

  afterAll(() => {
    wrapper.unmount();
  });

  it("should render correctly", () => {
    expect(wrapper).toMatchSnapshot();
    expect(useFetch).toHaveBeenCalled();
  });

  it("should call with Repos Api ", () => {
    expect(useFetch.mock.calls[0][0]).toEqual(getRepoApi(name));
  });

  it("should call with user Api ", () => {
    useFetch.mockImplementation(() => {
      return [userMock, false, false];
    });
    expect(useFetch.mock.calls[1][0]).toEqual(getUserApi(name));
  });
});

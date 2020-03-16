// setup file
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import "jest-enzyme";

// Configure Enzyme with React 16 adapter
configure({ adapter: new Adapter() });

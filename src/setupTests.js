import 'jest-enzyme';
import { shallow } from 'enzyme';


import sum from './Routes/School';
import Home from './Routes/Home';


it('sums numbers', () => {
  expect(sum(1, 2)).toEqual(3);
  expect(sum(2, 2)).toEqual(4);
});


it('renders welcome message', () => {
  const wrapper = shallow(<Home />);
  const welcome = <h1>Hello, World</h1>
  // expect(wrapper.contains(welcome)).to.equal(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});

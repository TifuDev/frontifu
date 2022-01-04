import { shallow } from 'enzyme';
import App from '../App';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

describe('App components', () => {
  const wrapper = shallow(<App />);
  it('navbar should exist', () => {
    expect(wrapper.containsMatchingElement(<Navbar />)).toEqual(true);
  });

  it('footer should exist', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });
});

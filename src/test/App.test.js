import { shallow } from 'enzyme';
import { Route } from 'react-router';
import App from '../App';
import NewPage from '../components/NewPage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const wrapper = shallow(<App />)

describe('App routes', () => {
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap
  });

  it('news route should be rendered', () => {
    expect(pathMap['/new/:path']).toBe(NewPage)
  });
})

describe('App components', () => {
  it('navbar should exist', () => {
    expect(wrapper.find(Navbar)).toHaveLength(1)
  });
  it('footer should exist', () => {
    expect(wrapper.find(Footer)).toHaveLength(1)
  });
})

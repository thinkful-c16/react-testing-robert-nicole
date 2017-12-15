import React from 'React'
import TopNav from './top-nav'
import {shallow} from 'enzyme'

describe('<TopNav />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<TopNav />)
	})
})

	// it('Clicking the new game button to pass props saying to start a new game.', ()=>{
	// 	const wrapper = shallow(<TopNav />);
	// 	wrapper.simulate('click');
	// 	expect(wrapper.?('??')).toEqual(true);

	// })
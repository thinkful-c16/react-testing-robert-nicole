import React from 'React'
import TopNav from './top-nav'
import {shallow} from 'enzyme'

describe('<TopNav />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<TopNav />)
	})
})
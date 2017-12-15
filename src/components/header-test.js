import React from 'React'
import Header from './header'
import {shallow} from 'enzyme'

describe('<Header />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<Header />)
	})
})
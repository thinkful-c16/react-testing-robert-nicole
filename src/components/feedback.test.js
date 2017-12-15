import React from 'React'
import Feedback from './feedback'
import {shallow} from 'enzyme'

describe('<Feedback />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<Feedback />)
	})
})
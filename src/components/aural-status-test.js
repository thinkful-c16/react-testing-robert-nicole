import React from 'React'
import AuralStatus from './aural-status'
import {shallow} from 'enzyme'

describe('<AuralStatus />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<AuralStatus />)
	})
})
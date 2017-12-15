import React from 'React'
import StatusSection from './status-section'
import {shallow} from 'enzyme'

describe('<StatusSection />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<StatusSection guesses={[]}/>)
	})
})
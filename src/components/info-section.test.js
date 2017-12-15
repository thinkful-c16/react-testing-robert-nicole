import React from 'React'
import InfoSection from './info-section'
import {shallow} from 'enzyme'

describe('<InfoSection />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<InfoSection />)
	})
})
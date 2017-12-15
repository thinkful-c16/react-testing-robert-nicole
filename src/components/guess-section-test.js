import React from 'React'
import GuessSection from './guess-section'
import {shallow} from 'enzyme'

describe('<GuessSection />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<GuessSection />)
	})
})
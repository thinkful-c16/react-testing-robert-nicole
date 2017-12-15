import React from 'React'
import GuessCount from './guess-count'
import {shallow} from 'enzyme'

describe('<GuessCount />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<GuessCount />)
	})
})
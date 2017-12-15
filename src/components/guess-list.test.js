import React from 'React'
import GuessList from './guess-list'
import {shallow} from 'enzyme'

describe('<GuessList />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<GuessList />)
	})
})
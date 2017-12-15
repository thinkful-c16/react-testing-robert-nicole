import React from 'React'
import Game from './game'
import {shallow} from 'enzyme'

describe('<Game />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<Game />)
	})
})
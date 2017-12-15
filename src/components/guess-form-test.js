import React from 'React'
import GuessForm from './guess-form'
import {shallow} from 'enzyme'

describe('<GuessForm />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<GuessForm />)
	})
})
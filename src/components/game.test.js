import React from 'React'
import Game from './game'
import {shallow} from 'enzyme'

describe('<Game />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<Game />)
	})

	it('should reset state on New Game', ()=>{
		const wrapper=shallow(<Game />)
		wrapper.instance().restartGame();
		expect(wrapper.state('guesses')).toEqual([]);
		expect(wrapper.state('feedback')).toEqual('Make your guess!');
		expect(wrapper.state('auralStatus')).toEqual('');
		expect(wrapper.state('correctAnswer')).toBeGreaterThanOrEqual(1);
		expect(wrapper.state('correctAnswer')).toBeLessThanOrEqual(100);
	})

	it('should process guess input correctly', ()=>{
		const wrapper=shallow(<Game />);
		wrapper.instance().makeGuess(25);
		expect(wrapper.state('guesses')).toEqual([25]);
		wrapper.instance().makeGuess('35');
		expect(wrapper.state('guesses')).toEqual([25, 35]);
		wrapper.instance().makeGuess('A');
		expect(wrapper.state('feedback')).toEqual('Please enter a valid number');
	})
})
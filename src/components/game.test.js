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

	it('should provide the correct feedback'), ()=>{
		const wrapper = shallow(<Game />);
		wrapper.setState({
			correctAnswer: 1
		})

		wrapper.instance().makeGuess('100');
		expect(wrapper.state('feedback')).toEqual('You\'re Ice Cold...');
		wrapper.instance().makeGuess('30');
		expect(wrapper.state('feedback')).toEqual('You\'re Cold...');
		wrapper.instance().makeGuess('10');
		expect(wrapper.state('feedback')).toEqual('You\'re Warm.');
		wrapper.instance().makeGuess('2');
		expect(wrapper.state('feedback')).toEqual('You\'re Hot!');
		wrapper.instance().makeGuess('1');
		expect(wrapper.state('feedback')).toEqual('You got it!');
	}
})
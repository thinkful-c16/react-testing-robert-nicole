import React from 'React'
import Feedback from './feedback'
import {shallow} from 'enzyme'
import {mount} from 'enzyme'

describe('<Feedback />', ()=>{
	it('Smoke test.', ()=>{
		shallow(<Feedback />)
	})

	it('should generate a key that is equal to the guess count', ()=>{
		const myGuessCount = 1;
		const wrapper=mount(<Feedback guessCount={myGuessCount} />);
		expect(wrapper.contains(<span className="visuallyhidden">Guess again!</span>)).toEqual(true);
	})

	it('should display feedback correctly.', ()=>{
		const myFeedbackTest = 'Here is some feedback.';
		const myGuessCount = 1;
		const wrapper=mount(<Feedback guessCount={myGuessCount} feedback={myFeedbackTest} />);
		expect(wrapper.contains({myFeedbackTest} {guessAgain}).toEqual(true);
	})
})


		// <h2
		// 	key={myGuessCount}
		// 	id="feedback"
		// 	role="status"
		// 	aria-live="assertive"
		// 	aria-atomic="true"
		// >
		// 	{myFeedbackTest} <span className="visuallyhidden">Guess again!</span>;
		// </h2>)).toEqual(true);
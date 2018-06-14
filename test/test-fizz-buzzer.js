const expect = require('chai').expect;

const fizzbuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){

	it('should return "fizz, buzz or fizz-buzz" for numbers divisible by 3, 5 and 15', function(){

		const normalCases = [
			{num:6, expected:'fizz'},
			{num:10, expected: 'buzz'},
			{num:4, expected:4},
			{num:15, expected:'fizz-buzz'}
		];

		normalCases.forEach(function(input){
			const answer = fizzbuzzer(input.num);
			expect(answer).to.equal(input.expected);
		});

	});

	it('should raise error if num is not a number', function(){
		const badInputs = ['a', '2','15'];

		badInputs.forEach(function(input){
			expect(function(){
				fizzBuzzer(input[0]);
			}).to.throw(Error);
		});
	});

});
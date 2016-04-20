describe("myApp.greet", function(){
	beforeEach(module("myApp.greet"));

	describe("greetController", function(){
		it("should initialize the name", inject(function($controller){
			
			var dummyScope = {};

			$controller('greetController', {$scope : dummyScope});

			expect(dummyScope.name).toBe('');

		}));

		it("should initialize the message", inject(function($controller){
			
			var dummyScope = {};

			$controller('greetController', {$scope : dummyScope});

			expect(dummyScope.message).toBe('');

		}));

		it("should populate the message when greeted", inject(function($controller){
			//Arrange
			var dummyScope = {};
			var expectedMessage = 'Hi Magesh, Have a nice day!';
			$controller('greetController', {$scope : dummyScope});
			dummyScope.name = 'Magesh'

			//Act
			dummyScope.greet();

			//Assert
			expect(dummyScope.message).toBe(expectedMessage);

		}));
	});

	describe("trimTextFilter", function(){
		it("Should return the given string for short strings", inject(function($filter){
			var input = 'short string',
				expectedResult = 'short string',
				trimTextFilter = $filter('trimText');

			var result = trimTextFilter(input);

			expect(result).toBe(expectedResult);
		}));

		it("Should return the truncated string for long strings", inject(function($filter){
			var input = 'This is a long string for testing filter',
				expectedResult = 'This is a long strin...',
				trimTextFilter = $filter('trimText');

			var result = trimTextFilter(input);

			expect(result).toBe(expectedResult);
		}));
	});
});
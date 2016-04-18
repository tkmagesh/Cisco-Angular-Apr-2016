function bindScope(scope, root){
	function bindTwoWay(elementId, model){
		var $element = $(elementId);
		$element.change(function(){
			scope.$apply(function(){
				var expr = model + ' = ' + $element.val().toInt();
				scope.$eval(expr);
			});
		});
		scope.$watch(model, function(newValue){
			$element.val(newValue);
		});
	}

	function bindOneWay(elementId, model){
		var $element = $(elementId);
		scope.$watch(model, function(newValue){
			$element.html(newValue);
		});
	}

	function bindClick(elementId, expr){
		var $element = $(elementId);
		$element.click(function(){
			scope.$apply(function(){
				scope.$eval(expr);
			});
		});
	}
	//React to user actions
	
	$("[app-model]").each(function(index, element){
		bindTwoWay(element, $(element).attr("app-model"));
	});

	$("[app-bind]").each(function(index, element){
		bindOneWay(element, $(element).attr("app-bind"));
	});
	
	$("[app-click]").each(function(index, element){
		bindClick(element, $(element).attr("app-click"));
	});
}
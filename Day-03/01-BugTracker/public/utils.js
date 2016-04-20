var utils = angular.module("utils", []);

utils.filter("trimText", function(appDefaults){
	return function(data, trimLength){
		trimLength = trimLength || appDefaults.trimLength;
		return data.length < trimLength ? data : data.substr(0,trimLength) + '...';
	};
});

utils.value('momentApi', moment);

utils.filter('elapsed', function(momentApi){
	return function(data){
		return momentApi(data).fromNow();
	};
});
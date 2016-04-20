var test = (function(){
	/* Sync */
	function addSync(x,y){
		console.log("[Service Provider] addSync invoked ");
		var result = x + y;
		console.log("[Service Provider] returning result");
		return result;
	}

	function addSyncClient(x,y){
		console.log("[Service Consumer] triggering addSync");
		var result = addSync(x,y);
		console.log("[Service Consumer] result = ", result);
	}

	function addAsync(x,y,onResult){
		console.log("[Service Provider] addAsync invoked ");
		setTimeout(function(){
			var result = x + y;
			console.log("[Service Provider] returning result");
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncClient(x,y){
		console.log("[Service Consumer] triggering addAsync");
		addAsync(x,y, function(result){
			console.log("[Service Consumer] result = ", result);	
		});
	}

	function addAsyncPromise(x,y){
		console.log("[Service Provider] addAsync invoked ");
		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log("[Service Provider] returning result");
				resolveFn(result);
			},3000);
		});
		return promise;
	}
	return {
		addSyncClient :addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncPromise : addAsyncPromise
	};
})();
Aop = {
  around: function(fnName, advice, fnObj) {
    var originalFn = fnObj[fnName];
    fnObj[fnName] = function () {
      var targetContext = {}; // We know this is wrong; return to it later.
      return advice.call(targetContext, {fn:originalFn, args:arguments});
    };
  }
};
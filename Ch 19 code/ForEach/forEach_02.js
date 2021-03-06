var Conference = Conference || {};
Conference.polyfills = Conference.polyfills || {};

Conference.polyfills.arrayForEach = function(callbackFcn, thisObj){
  var i;
  
  for(i = 0; i < this.length; i++){
    callbackFcn.call(thisObj, this[i], i, this);
  }
};

Aop.before('arrayForEach',function isObjectWithLength(obj){
  if (typeof(this) !== 'object' || 
  !(typeof this.length === 'number' && isFinite(this.length) &&
  Math.floor(this.length) === this.length && this.length>=0)) {
    throw new Error('The call site for forEach must be array-like.');
  }
},Conference.polyfills);
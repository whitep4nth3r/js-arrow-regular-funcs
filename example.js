const module = {
  key: "value",
  regularFunc: function returnThis() {
    return this;
  },
  arrowFunc: () => {
    return this;
  },
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind

const regularReturn = module.regularFunc;
console.log(regularReturn()); // undefined

const regularReturnBound = regularReturn.bind(module);
console.log(regularReturnBound()); // {key: "value", regularFunc: ƒ, arrowFunc: ƒ}

const arrowReturn = module.arrowFunc;
console.log(arrowReturn()); // undefined

const arrowReturnBound = arrowReturn.bind(module);
console.log(arrowReturnBound()); // undefined

// with args

const moduleWithInput = {
  key: 5,
  regularFunc: function returnThis(input) {
    return this?.key + input;
  },
  arrowFunc: () => {
    return this;
  },
};

const regularFuncWithInput = moduleWithInput.regularFunc;
console.log(regularFuncWithInput(10)); // NaN — "this" is undefined

const regularFuncWithInputBound = regularFuncWithInput.bind(moduleWithInput, 10);
// binding the moduleWithInput with the arg 10 
// implicitly passes it into the bound function when called
console.log(regularFuncWithInputBound()); // 15

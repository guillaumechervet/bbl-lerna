const myDependency = require('@guillaume.chervet/my-dependency');

exports.publicFonction = function() {
  return myDependency.useFullFonction();
};

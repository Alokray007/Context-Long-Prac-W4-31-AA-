function allTheArgs(func, ...args) {
  return function(...newargs) {
    return func.call(this, ...args, ...newargs)
  }
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;

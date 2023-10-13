function boundFuncTimer(obj, func, delay) {
  setInterval(() => {
    func.call(obj)
  }, delay);
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;

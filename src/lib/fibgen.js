module.exports = function* () {
  var current = 0, next = 1, swap
  while (true) {
    swap = current, current = next
    next = swap + next
    yield current
  }
};

var list = [];

function putNum(arguments) {
  args = Array.prototype.slice.call(arguments);
  args.forEach(function() {
    list.push(arguments['0']);
  });
  return list;
}

function doSort() {
  list.sort(function(a, b) {
    return a - b;
  });
  return list;
};

module.exports = {
  storeNumber: function() {
    return putNum(arguments);
  },
  sortList: function() {
    return doSort();
  }
};

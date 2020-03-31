function type(node, string, interval) {
  let array = string.split('');
  let index = 0;

  var textInterval = setInterval(function () {
    if (index < array.length) {
      node.textContent += array[index];
      index++;
    } else {
      clearInterval(textInterval);
    }
  }, interval);
}

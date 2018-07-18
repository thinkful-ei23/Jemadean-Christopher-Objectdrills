const loaf = {
  flour: 300,
  water: 210,
}

loaf.hydration = function() {
  return (loaf['water'] / loaf['flour']) * 100;
};

console.log(loaf.hydration());
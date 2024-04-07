function getElementWidth(content, padding, border) {
  const NumberX = parseFloat(content);
  const NumberY = parseFloat(padding);
  const NumberZ = parseFloat(border);
  const widthBox = NumberX + 2 * NumberY + 2 * NumberZ;
  return widthBox;
}
console.log(getElementWidth('50px', '8px', '4px')); // 74
console.log(getElementWidth('60px', '12px', '8.5px')); // 101
console.log(getElementWidth('200px', '0px', '0px')); // 200

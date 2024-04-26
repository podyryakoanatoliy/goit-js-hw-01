function getElementWidth(content, padding, border) {
    const numContent = Number.parseFloat(content);
    const numPadding = Number.parseFloat(padding);
    const numBorder = Number.parseFloat(border);
    const totalElementWidth = numContent + (2 * numPadding) + (2 * numBorder);
    return parseFloat(totalElementWidth);
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));

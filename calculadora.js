function soma(a, b) {
    return a + b;
}
function subtracao(a, b) {
    return a - b;
}
function multiplicacao(a, b) {
    return a * b;
}
function divisao(a, b) {
    return b !== 0 ? a / b : null;
}

module.exports = { soma, subtracao, multiplicacao, divisao }

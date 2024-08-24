const { soma, subtracao, multiplicacao, divisao } = require('../calculadora.js')
const {isPalindromo} = require('../ispalindromo.js');

describe('testando nossa calculadora', () => {
    test("soma 1 + 2 deve ser igual a 3", () => {
        const resultado = soma(1, 2)
        expect(resultado).toBe(3)
    })

    test("subtracao 2 - 1 deve ser igual a 1", () => {
        const resultado = subtracao(2, 1)
        expect(resultado).toBe(1)
    })

    test("multiplicacao 1 * 2 deve ser igual a 2", () => {
        const resultado = multiplicacao(1, 2)
        expect(resultado).toBe(2)
    })

    test("divisao 4 / 2 deve ser igual a 2", () => {
        const resultado = divisao(4, 2)
        expect(resultado).toBe(2)
    })
})

describe('verificar se é palindromo', () => {
    test('verifica se "arara" é um palíndromo', () => {
        expect(isPalindromo('arara')).toBe(true);
    })

    test('verifica se "casa" é um palíndromo', () => {
        expect(isPalindromo('casa')).toBe(false);
    })
})
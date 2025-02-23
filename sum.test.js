const { sumRandom, getRandomNumber } = require('./sum');

describe("Testando a soma de números aleatórios", () => {
    test("getRandomNumber deve gerar um número entre 0 e 99", () => {
        const num = getRandomNumber();
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(99);
    });

    test("sumRandom deve retornar um número válido", () => {
        const resultado = sumRandom();
        expect(typeof resultado).toBe("number");
        expect(resultado).toBeGreaterThanOrEqual(0);
    });
});

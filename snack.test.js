const { getInitials, createSlug, average, isPalindrome, findPostById } = require("./snack.js");

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("mario rossi")).toBe("M.R.");
});

test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Stringa coN maIuscolE")).toBe("stringa-con-maiuscole");
});

test('La funzione average calcola la media aritmetica di un array di numeri.', () => {
    expect(average([5, 15])).toBe(10);
    expect(() => average([5, "hello"])).toThrow();
});

test('La funzione createSlug sostituisce gli spazi con "-".', () => {
    expect(createSlug("Stringa nOn in MaIuscolo")).toBe("stringa-non-in-maiuscolo");
})

test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => {
    expect(isPalindrome("anna ")).toBeTruthy();
    expect(isPalindrome("boolean")).toBeFalsy();
})

test('La funzione createSlug lancia un errore se il titolo è vuoto o non valido.', () => {
    expect(() => createSlug("")).toThrow('Stringa non valida');
    expect(() => createSlug(null)).toThrow('Stringa non valida');
})

const posts = [
    { id: 1, title: "Full Stack Web Developer", slug: "full-stack-web-developer" },
    { id: 2, title: "React Hooks", slug: "react-hooks" }
];

test('La funzione findPostById restituisce il post corretto dato l’array di post e l’id', () => {
    expect(findPostById(posts, 2)).toEqual({ id: 2, title: "React Hooks", slug: "react-hooks" });
    expect(findPostById(posts, 5)).toBe(null);
    expect(() => findPostById(posts, "hello")).toThrow('"hello" non è un id valido')
    expect(() => findPostById([20, 40], 2)).toThrow('L\'array posts non è nel formato corretto')
})
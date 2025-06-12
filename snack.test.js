const { getInitials, createSlug } = require("./snack.js");

test('La funzione getInitials restituisce le iniziali di un nome completo.', () => {
    expect(getInitials("Mario Rossi")).toBe("M.R.");
    expect(getInitials("mario rossi")).toBe("M.R.");
});


test('La funzione createSlug restituisce una stringa in lowercase.', () => {
    expect(createSlug("Stringa coN maIuscolE")).toBe("stringa con maiuscole")
});
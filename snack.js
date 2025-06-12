function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

function createSlug(titolo) {
    if (!titolo) {
        throw new Error("Stringa non valida");
    }
    return titolo.toLowerCase().replaceAll(" ", "-");
}

function average(numeri) {
    numeri.forEach(numero => {
        if (isNaN(numero)) {
            throw new Error("Average accetta solo numeri");
        }
    });
    return numeri.reduce((acc, numero) => acc + numero, 0) / numeri.length;
}

function isPalindrome(parola) {
    const parolaInversa = parola.trim().split('').reverse().join('');
    return parola.trim() === parolaInversa
}

function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`"${id}" non è un id valido`)
    }
    posts.forEach(post => {
        if (post.id === undefined || post.title === undefined || post.slug === undefined) {
            throw new Error('L\'array posts non è nel formato corretto')
        }
    })
    return posts.find(post => post.id === id) || null;
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
}
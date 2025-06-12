function getInitials(nomeCompleto) {
    const [nome, cognome] = nomeCompleto.split(" ");
    return `${nome.charAt(0).toUpperCase()}.${cognome.charAt(0).toUpperCase()}.`
}

module.exports = {
    getInitials
}
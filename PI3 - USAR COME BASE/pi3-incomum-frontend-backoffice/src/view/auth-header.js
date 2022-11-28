export default function authHeader() {
    const trabalhadores = JSON.parse(localStorage.getItem('trabalhadores'));
    if (trabalhadores && trabalhadores.token) {
    return { Authorization: 'Bearer ' + trabalhadores.token };
    } else {
    return {};
    }
    }
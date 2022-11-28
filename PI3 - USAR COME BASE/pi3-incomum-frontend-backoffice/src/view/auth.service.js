import axios from "axios";
class AuthService {
  login(username, password) {
    return axios
      .post("https://backend-incomum.herokuapp.com/trabalhadores/login", { username, password })
      .then(
        (res) => {
          if (res.data.token) {
            localStorage.setItem("trabalhadores", JSON.stringify(res.data));
          }
          return res.data;
        },
        (reason) => {
          throw new Error("Utilizador Inválido");
        }
      );
  }
  logout() {
    localStorage.removeItem("trabalhadores");
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem("trabalhadores"));
  }
}
export default new AuthService();

const form = document.getElementById("form-new-message")
const username = document.getElementById("username")
const password = document.getElementById("password")

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const usernameValue = username.value
  const senha = password.value

  const newUser = {
    username: usernameValue,
    password: senha,
    userId: "76bb1fc7-bbd5-400a-950c-0a4e5f74eaa6"
  }

  criarUsuario(newUser)
});

async function criarUsuario(newUsuario) {
  try {
    const response = await api.post('/user', newUsuario);
    if (response.status === 201) {
      alert('Recado criado com sucesso')
    }

    username.value = ""
    password.value = ""

    window.location.href = "login.html"

  } catch (error) {
    console.log("Erro ao cadastrar recado: ", error);
  }

}

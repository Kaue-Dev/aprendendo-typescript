const users: User[] = [];
const url: string = "https://api.github.com/users/";

interface User {
  userID: number;
  userLogin: string;
  userName: string;
  userBio: string;
  userPublicRepository: number;
  userReposURL: string;
}

interface Repository {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

async function getUserData(username: string) {
  try {
    const gitHubUsername: string = username

    const res = await fetch(`${url}${gitHubUsername}`);

    if (!res.ok) {
      console.log("Usuário não encontrado");
      return;
    }

    const data = await res.json();
    
    const userID: number = data.id;
    const userLogin: string = data.login;
    const userName: string = data.name;
    const userBio: string = data.bio;
    const userPublicRepository: number = data.public_repos;
    const userReposURL: string = data.repos_url

    const user: User = { userID, userLogin, userName, userBio, userPublicRepository, userReposURL };
    console.log(user);
    
    users.push(user);

  } catch (error) {
    console.error(`Erro ao obter dados do usuário: ${error}`);
  }
}

function sumRepositorys() {
  if (users.length > 0) {
    const sum = users.reduce((sum, user) => sum + user.userPublicRepository, 0);
    console.log(`Soma dos repositórios públicos: ${sum}`);
  } else {
    console.log("Não é possivel calcular os repositórios")
  }
}

function showUsers() {
  if (users.length <= 0) {
    console.log("Nenhum usuario registrado")
  } else {
    console.log(users);
  }
}

async function showRepositorys(username: string) {
  const user = users.find(u => u.userLogin === username)

  if (user) {
    const response = await fetch(user.userReposURL)
    const repos: Repository[] = await response.json()

    let message: string;

    repos.forEach(repo => {
      message += `\nNome: ${repo.name}\n` +
      `Descrição: ${repo.description}\n` +
      `Estrelas: ${repo.stargazers_count}\n` +
      `É um Fork: ${repo.fork ? "Sim" : "Não"}\n`
    })

    console.log(message);
    
  } else {
    console.log("Usuario não encontrado")
  }
}

getUserData('Kaue-Dev');
getUserData('pablovns');
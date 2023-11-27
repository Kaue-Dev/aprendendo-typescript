var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const users = [];
const url = "https://api.github.com/users/";
function getUserData(username) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const gitHubUsername = username;
            const res = yield fetch(`${url}${gitHubUsername}`);
            if (!res.ok) {
                console.log("Usuário não encontrado");
                return;
            }
            const data = yield res.json();
            const userID = data.id;
            const userLogin = data.login;
            const userName = data.name;
            const userBio = data.bio;
            const userPublicRepository = data.public_repos;
            const userReposURL = data.repos_url;
            const user = { userID, userLogin, userName, userBio, userPublicRepository, userReposURL };
            console.log(user);
            users.push(user);
        }
        catch (error) {
            console.error(`Erro ao obter dados do usuário: ${error}`);
        }
    });
}
function sumRepositorys() {
    if (users.length > 0) {
        const sum = users.reduce((sum, user) => sum + user.userPublicRepository, 0);
        console.log(`Soma dos repositórios públicos: ${sum}`);
    }
    else {
        console.log("Não é possivel calcular os repositórios");
    }
}
function showUsers() {
    if (users.length <= 0) {
        console.log("Nenhum usuario registrado");
    }
    else {
        console.log(users);
    }
}
function showRepositorys(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = users.find(u => u.userLogin === username);
        if (user) {
            const response = yield fetch(user.userReposURL);
            const repos = yield response.json();
            let message;
            repos.forEach(repo => {
                message += `\nNome: ${repo.name}\n` +
                    `Descrição: ${repo.description}\n` +
                    `Estrelas: ${repo.stargazers_count}\n` +
                    `É um Fork: ${repo.fork ? "Sim" : "Não"}\n`;
            });
            console.log(message);
        }
        else {
            console.log("Usuario não encontrado");
        }
    });
}
getUserData('Kaue-Dev');
getUserData('pablovns');

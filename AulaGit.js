export default function GitInit() {
  /* Git */
  // Git| Sistema de controle de versões.
  // Facilita o trabalho em equipe e o controle de mudanças entre arquivos e diretórios.
  // Github| Plataforma online de hospedagem para repositórios Git.
  // Existem outras como GitLab e Bitbucket.

  /* Git Setup */
  // Instalar o Git| https://git-scm.com/
  // Configurar Nome| $ git config --global user.name "Seu Nome"
  // Configurar Email| $ git config --global user.email "email@gmail.com"

  /* Git Comandos */
  // $ git init| Inicia um repositório
  // $ git add style.css| Adiciona o arquivo style.css ao index do git. 
  // Com o $ git add -A adiciona todos os arquivos
  // $ git status| Mostra os arquivos que tiveram mudanças.
  // $ git commit -m 'Descrição'| Irá fazer o commit do código adicionado com uma mensagem.

  // $ git remote add origin https://site.git
  // $ git push -u origin main

  /* Branching */
  // Branch|Uma das principais vantagens do git é a possibilidade de criarmos 'ramificações'. Assim podemos trabalhar em funcionalidades adicionais para um projeto, sem modificarmos o 'ramificação principal, o master.
  // $ git branch nomebranch| Toda vez que formos adicionar uma nova funcionalidade, devemos iniciar criando um novo branch ao invés de fazermos alterações direto no master. O que for modificado no branch não afetara o master.
  // $ git checkout nomebranch| Ira mudar de branch. Podemos usar o atalho $ git checkout -b novobranch, assim ele cria e muda de branch ao mesmo tempo.
  
  /* Lidando com Pull Request */
  // No Github| Agora você possui um novo branch no github e pode fazer o pull request(juntar ao main).
  // Compare e Pull Request| Pode adicionar comentários. Create Pull Request.
  // Merge Pull Request| Geralmente é o lider do projeto/responsável por fazer o review do seu código. Pode deletar o branch após o merge com o Main.
}

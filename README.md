# ChamadosFrontEnd
Atividade da Disciplina Prog para Mobile
Chamados App

Chamados App é um aplicativo mobile feito em React Native, com integração a uma API REST construída em Spring Boot. O objetivo do app é permitir o gerenciamento de chamados técnicos de forma simples e rápida.

Funcionalidades:

Cadastrar chamados com título, descrição, cliente, data de abertura e data de encerramento.

Listar todos os chamados registrados.

Editar a descrição de chamados.

Excluir chamados da lista.

Tecnologias utilizadas:

React Native

Expo

Axios

Spring Boot (API backend)

Como executar o app:

Instale as dependências com npm install.

No arquivo services/api.js, altere o baseURL com o IP da sua máquina que está rodando a API:

arduino
Copiar
Editar
http://SEU_IP:8080/chcontroller
Inicie o app com o comando:

sql
Copiar
Editar
npx expo start
Acesse o app no celular usando o aplicativo Expo Go (compatível com o SDK do projeto).

Certifique-se de que a API backend esteja executando corretamente.

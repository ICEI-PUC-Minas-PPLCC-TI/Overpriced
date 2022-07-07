# Informações do Projeto
`NOME DO PROJETO`  


E-GameSales

`CURSO` 

Ciência da Computação

## Participantes


Os membros do grupo são: 
> - Charles Gonçalves Esteves
> - Gustavo Mariz Andrade
> - Rafael Cangussu Dallariva
> - Tarcisio Ferraz Juste Silva
> - Victor Soares Bergo de Aguiar
> - Vítor Silva Pastor Gonzalez
> - Alberto Araujo Neto 


# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas e Mapas de Empatia](#personas-e-mapas-de-empatia)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

## Problema

O preço para comprar jogos no Brasil é extremamente alto, dificultando o acesso da maioria da população que gosta de jogos à parte do entretenimento mais lucrativa no mundo hoje. Neste projeto o grupo tem a intenção de achar uma maneira de disponibilizar jogos mais baratos para a população.

## Objetivos

Disponibilizar acessibilidade nos preços dos jogos

## Justificativa

Como pessoas interessadas em jogos digitais, decidimos fazer um projeto com o intuito de disponibilizar certa acessibilidade sobre os preços dos jogos digitais devido ao seu alto custo.

## Público-Alvo

Pessoas interessadas em comprar de jogos digitais.

# Especificações do Projeto

Este projeto tem o intuito de criar um site visando ajudar as pessoas com problemas na aquisição de jogos digitais, devido aos altos preços atuais.

## Personas e Mapas de Empatia

![Persona 1](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Persona%201%20Pedro.jpg)
![Persona 2](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Persona%202%20Ana.jpg)
![Persona 3](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Persona%203%20Lucas.jpg)

![Mapa de Empatia 1](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Persona%201%20Pedro%20-%20Mapa.jpg)
![Mapa de Empatia 2](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Persona%202%20Ana%20-%20Mapa.jpg)
![Mapa de Empatia 3](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Persona%203%20Lucas%20-%20Mapa.jpg)

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO       | QUERO/PRECISO                             |PARA                                        |
|--------------|-------------------------------------------|--------------------------------------------|
|Lucas         | Agilizar minhas compras de jogos          | Poupar tempo                               |
|Pedro         | Comprar mais jogos porém barato           | Jogar mais jogos                           |
|Ana           | Adquirir jogos com preços acessíveis      | Jogar mesmo tendo dificuldades financeiras |


## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|----------------------------------------------------------------------|-------|
|RF-001| Identificar preços atuais dos jogos em plataformas e sites diversos. | ALTA  | 
|RF-002| Criar sistema de cadastro e notificação por e-mail.                  | MÉDIA |
|RF-003| Fazer a comparação do preço entre as opções obtidas.                 | ALTA  |
|RF-004| Implementar atualizações de notícias agregantes                      |	ALTA  |



### Requisitos não Funcionais

|ID     | Descrição do Requisito                                          |Prioridade |
|-------|-----------------------------------------------------------------|-----------|
|RNF-001| O sistema deve ser executável em qualquer plataforma            |  MÉDIA    |
|RNF-002| O sistema deve permitir acessibilidade ao cliente               |  BAIXA    | 
|RNF-003| O sistema deverá apresentar um banco de dados                   |  ALTA     |
|RNF-004|	É necessário um sistema responsivo	                            | MÉDIA     |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                |
|--|------------------------------------------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre                                    |
|02| Não pode desenvolver módulos BackEnd                                                     |
|03| Projeto contém 4 Sprints                                                                 |
|04| Será usado a linguagem de marcação HTML e CSS, e a linguagem JavaScript                  |
|05| Será usado a metodologia agile                                                           |

# Projeto de Interface

O projeto foi feito para atender a todos os requisitos, levando em consideração as histórias de usuários de modo delicado, devido ao seu valor. O projeto foi discutido pela equipe diversas vezes.

## User Flow

![UserFlow](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/UserFlow.png)

## Wireframes

![Wireframe](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Pagina_Inicial.jpg)
![Wireframe](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Login.jpg)
![Wireframe](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Jogos.jpg)
![Wireframe](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Jogo_Especifico.jpg)
![Wireframe](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Noticias.jpg)
![Wireframe](https://github.com/ICEI-PUC-Minas-PPLCC-TI/tiaw-ppl-cc-m-20221-t1g2_alto_custo_de_jogos/blob/master/docs/relatorio/images/Noticia_Especifica.jpg)

# Metodologia

O grupo usou os aplicativos Discord e Whatsapp para se comunicarem e reunirem ao vivo, cada membro participou em todas as partes do trabalho, para que ele obtenha experiência de todas as áreas envolvidas,sendo elas: Design Thinking, GitHub, Documentação e Apresentação.
Especialmente no Design Thinking, foram feitas diversas reuniões, devido a complexidade e a necessidade da presença de todos para discutir sobre. 
O uso do Discord foi devido a sua facilidade de comunicação, que permitiu que reuniões fossem mais produtivas, devido ao compartilhamento de tela e a organização dos canais de voz e texto.
O Whatsapp foi usado para mandar avisos e discutir ideias.

## Divisão de Papéis

A equipe utilizou o Discord para fazer reuniões, nessas reuniões, foi discutido sobre o projeto e feito as etapas (Design thinking, GitHub, Apresentação, Documentação). Decidimos fazer todas as etapas juntos para que todos tenham a experiência de todo o projeto, e não somente de uma parte dele.

## Ferramentas

| Ambiente                        | Plataforma              |Link de Acesso                                        |
|---------------------------------|-------------------------|------------------------------------------------------|
|Processo de Design Thinkgin      | Miro                |  https://miro.com/XXXXXXX                                |    
|Repositório de código            | GitHub              | https://github.com/XXXXXXX                               | 
|Hospedagem do site               | Heroku              |  https://XXXXXXX.herokuapp.com                           | 
|Protótipo Interativo             | Figma               | https://figma.com/XXXXXXX                                | 
|Ferramentas de comunicação       | Discord e Whatsapp  | https://discord.com  & https://www.whatsapp.com          |
|Editor de código                 | Visual Studio Code  | https://code.visualstudio.com                            |

## Controle de Versão

O Git foi o software de controle de versão escolhido.
O repositório Git é hospedado no GitHub.
Devido  ao projeto ser relativamente pequeno, optamos não introduzir metodologias mais bem formuladas para economizarmos tempo.
- Será feita a manutenção de um branch `master`
- Novas (feature) é introduzida em uma branch separada, que poderá ser unificada à `master` através da solicitação de pull requests

 Bugs ou feature-requests devem ser registrados no issue tracker do repositório GitHub (será usado as tags (bugfix ou feature)
 
 Foi utilizado para hospedagem do repositório `upstream`.
 O projeto segue a seguinte convenção para o nome de branchs:
 
 - `master`: versão estável já testada do software
 - `unstable`: versão já testada do software, porém instável
- `testing`: versão em testes do software
 - `dev`: versão de desenvolvimento do software
 
 Quanto à gerência de issues, o projeto adota a seguinte convenção para etiquetas:
 
 - `bugfix`: uma funcionalidade encontra-se com problemas
 - `enhancement`: uma funcionalidade precisa ser melhorada
 - `feature`: uma nova funcionalidade precisa ser introduzida

# Projeto da Solução

Nossa parte do projeto encontra-se os detalhes técnicos da solução do nosso problema.
Aqui está presente as telas implementadas e a arquitetura da solução.

## Tecnologias Utilizadas

Será utilizados telas feitas em HTML, estilizadas em CSS com implementação de JavaScript para resolver o problema.
O GitHub está sendo usado como controle de versão, utilizando de ferramentas como Visual Studio Code.

![image](https://user-images.githubusercontent.com/100237121/177854058-36203698-a51e-45eb-ad5f-778d5053f755.png)

Acima se encontra uma tela ja pronta de acordo com os esboços, porém com devidas alterações.
Está é a tela principal do projeto, qual ela busca resolver este problema.

## Arquitetura da solução

A solução implementada contem os seguintes módulos:
>Páginas Web - arquivos HTML, CSS, JavaScript e imagens que fazem parte do site;
>
>Local Storage - armazenamento local no navegador com implementação de banco de dados;
>
>Hospedagem - local na web onde as páginas são mantidas. 

# Avaliação da Aplicação

Requisitos atendidos:
RF-001
RF-003
RNF-001
RNF-002
RNF-004
Todoas as restrições foram atendidas.

Os cenários de teste da aplicação se consiste em testar todas as validações dos campos a serem preenchidos no site, além de testar a funcionalidade geral do site e conferir se ele realmente está resolvendo o problema descrito no projeto.
Assim, cumprindo todas as restrições citadas acima no relatório.
Garantindo assim, que os requisitos não funcionais e funcionais que são necessários para resolver o problema estjam sendo cumpridos, como mostra o site em si.

## Plano de Testes

Foi selecionada como cenários para testes uma simulação de um usuário de acordo com as personas para entrar no site, verificando os campos a serem preenchidos, assim, garantindo a funcionalidade dos métodos de JavaScript.
Também foi testado a responsividade do site, de acordo com o HTML e CSS.
Por fim, concluimos os testes verificando se o usuário ficou satisfeito com a proposta para a solução do site, de acordo com as restrições e requisitos impostos no projeto.

## Registros de Testes

Foi identificado como ponto forte dos testes feitos a responsividade do site, funcionalidade de login e registr e o projeto no qual atende perfeitamente ao problema, assim, concluindo o projeto de modo no qual foi projetado.
Como ponto fraco, obtivemos dificuldade em produzir métodos de JavaScript na parte de verificação de local storage, assim, tendo dificuldades para melhorar o código ao decorrar da sprint 2 para sprint 3.


# Referências

https://github.com
https://canaltech.com.br
https://www.youtube.com
https://stackoverflow.com
https://miro.com/pt/
https://www.loom.com/share/da5ff9cc1e674bec9f85da058e3631c6
https://drive.google.com/file/d/1bzPVkQTe_KLWLzKAK008SKVHFeMTAseH/view
https://drive.google.com/file/d/1aYhm0E3gn0LfauSpEoBj3AN2ilWuVs_B/view

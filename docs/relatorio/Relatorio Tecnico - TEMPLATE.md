# Informações do Projeto
`TÍTULO DO PROJETO`  

......  Alto Custo de Jogos ......

`CURSO` 

......  Ciência da Computação ......

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
|RNF-001|	É necessário um sistema responsivo	                            | MÉDIA     |

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
- Será feita a manutenção de um branch (master)
- Novas (feature) é introduzida em uma branch separada, que poderá ser unificada à (master) através da solicitação de pull requests

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

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)

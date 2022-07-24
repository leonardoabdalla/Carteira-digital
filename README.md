 <h1>Projeto Carteira Digital</h1>

<h2>Descrição do projeto Carteira digital</h2>
  <p>Uma aplicação back-end que simula uma carteira digital de investimentos onde nela é possivel o cliente acompanhar os ativos 
  disponiveis para negociação, podendo consultar, realizar a compra e venda dos ativos disponíveis, realizar saques e depósitos.</p>
  
<h2>Ferramentas utilizadas</h2>
<ul>
  <li>Node.js com express</li>
  <li>Mysql</li>
  <li>Docker</li>
  <li>Validação JWT</li>
  <li>Modelo MSC</li>
</ul>

<h3>Tomadas de decisões</h3>

<p>Nesse projeto decidi não utilizar ORM, primeiro por ter mais segurança em desenvolver dessa forma e também por sentir mais prazer em ter que
trabalhar em cada query, vendo todo o resultado passo a passo de ponta a ponta, sinto que com o Sequelize não vejo tudo acontecendo, portanto ainda não 
tenho prática suficiênte para dizer como funciona cada parte. </p>
<p>Decidi iniciar pela criação das rotas Post, assim pude ir sentindo se haveria necessidade de alterar a quantidade de tabelas ou suas colunas,
o que na verdade aconteceu algumas vezes ao longo do desenvolvimento.<p>
<p>Utilizei o modelo MSC para assim deixar tudo mais organizado<p>
<p>O código não está tão limpo e muito longe de como eu realmente gostaria de entregar, mas devido ao tempo optei por fazer o melhor possivel dentro 
do tempo em que conseguisse entregar o resultado esperado ainda que não tão bom</p>

<h3>Pincipais dificuldades</h3>

<p>Setup inicial me fez perder bastante tempo já que geralmente trabalho em cima de projetos já prontos, sendo necessário
apenas implementar as rotas e aplicar a lógica<p>
<p>Maior dificuldade foi em pensar no schema, já que algo errado nesse primeiro momento poderia comprometer todo o projeto, portanto 
utilizei bastante tempo pensando em uma melhor forma de desenvolve-las.

<h3>Instruções de como compilar e executar o projeto</h3>

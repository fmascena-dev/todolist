## To-Do List com Dias da Semana, Datas e Horários
---

#### 📋 Descrição do Projeto

- *Essa aplicação é uma lista de tarefas ("To-Do List") desenvolvida com HTML, CSS e JavaScript. Além de permitir que o usuário adicione e remova tarefas, o sistema oferece funcionalidades para associar cada tarefa a um dia da semana, uma data específica e um horário. Todas as tarefas são salvas no LocalStorage do navegador, garantindo que as tarefas adicionadas permaneçam após a atualização da página.*

#### 🛠️ Funcionalidades

- **Adicionar tarefas:** *O usuário pode inserir uma tarefa, associando-a a um dia da semana, data e horário.*
####
- **Listar tarefas:** *As tarefas adicionadas são exibidas em uma lista logo abaixo do formulário de inserção.*
####
- **Marcar tarefa como completa:** *O usuário pode marcar uma tarefa como completa, o que altera o estilo visual (com um traço sobre o texto da tarefa).*
####
- **Excluir tarefa:** *O usuário pode remover tarefas da lista.*
####
- **Salvar no LocalStorage:** *As tarefas são salvas no LocalStorage, o que significa que elas persistem mesmo após o fechamento ou recarregamento da página.*
####
- **Exibição de Data e Hora:** *Cada tarefa é exibida com o dia da semana, a data e a hora selecionados.*

#### 🚀 Como Usar
###
##### Pré-requisitos:
- *Você pode clonar este repositório e simplesmente abrir o arquivo index.html em um navegador moderno. A aplicação rodará localmente sem a necessidade de um servidor.*

##### Adicionando uma Tarefa
- *No campo "Adicione uma nova tarefa...", digite o nome da tarefa.*
- *No seletor "Dia da Semana", escolha o dia da semana em que deseja realizar a tarefa.*
- *Selecione a data específica usando o campo "Data" (formato dd/mm/aaaa).*
- *Selecione o horário da tarefa no campo "Hora" (formato hh:mm).*
- *Clique no botão Adicionar para salvar a tarefa.*
- *A tarefa aparecerá na lista abaixo do formulário, exibindo o nome da tarefa, o dia, a data e o horário.*

##### Marcar uma Tarefa como Completa

- *Na lista de tarefas, cada tarefa terá um botão Complete. Clique nesse botão para marcar a tarefa como concluída. O texto da tarefa será tachado para indicar que foi completada.*

##### Excluir uma Tarefa
- *Para excluir uma tarefa, basta clicar no botão Delete associado a ela. A tarefa será removida da lista e também do LocalStorage.*
---
#### HTML - index.html
- **O arquivo index.html contém a estrutura principal da aplicação:**

- *Um formulário para adicionar tarefas, com campos para o nome da tarefa, seleção do dia da semana, data e hora.*
- *Um botão de "Adicionar" que ativa a função JavaScript responsável por criar uma nova tarefa.*
- *Um elemento ul que exibe a lista de tarefas adicionadas.*

#### SCSS - style.scss
- **O arquivo style.scss é responsável por todo o estilo da aplicação:**

- *Estilo geral para tornar a aplicação visualmente agradável, com fontes personalizadas e cores.*
- *Layout flexível, com o uso de Flexbox para organizar a lista de tarefas, formulários e botões.*
- *Estilos para tarefas completas (exibidas com um traço sobre o texto) e tarefas pendentes.*

#### JavaScript - script.js
- *Este arquivo contém toda a lógica de interação da aplicação. Ele gerencia a criação, visualização, marcação como completa, exclusão e salvamento de tarefas no LocalStorage.*

**Funcionalidades Importantes:**
####
- **Salvar no LocalStorage:** *As tarefas são armazenadas no LocalStorage para garantir que, mesmo que o usuário feche ou atualize a página, os dados sejam persistidos. O LocalStorage é utilizado através de JSON.stringify e JSON.parse para serializar/deserializar as tarefas.*
####
- **Adição de Tarefas:** *O JavaScript captura o evento de submissão do formulário para criar um novo item de tarefa e o adiciona à lista.*
####
- **Cada tarefa é composta por:**

- *Nome da tarefa.*
- *Dia da semana.*
- *Data.*
- *Hora.*
- *Após o preenchimento dos campos, a tarefa é exibida na lista de forma dinâmica, e as informações são salvas no LocalStorage.*
####
- **Remover Tarefas:** *Cada tarefa possui um botão de remoção. Quando clicado, a tarefa é deletada da lista e do LocalStorage.*
####
- **Marcar Tarefas como Completas:** *Um botão de "Completar" permite que o usuário marque uma tarefa como concluída. O JavaScript altera o estilo dessa tarefa, utilizando a classe .completed, que aplica o estilo tachado.*
##
**Funções JavaScript:**
####
- **addTask(event):** *Função acionada ao enviar o formulário de uma nova tarefa. Coleta os dados do formulário, cria um novo item de tarefa e salva no LocalStorage.*
####
- **renderTasks():** *Responsável por renderizar as tarefas salvas no LocalStorage ao carregar a página. Ele constrói a interface a partir dos dados armazenados.*
####
- **deleteTask(index):** *Exclui a tarefa baseada no índice da lista, tanto da interface quanto do LocalStorage.*
####
- **completeTask(index):** *Marca uma tarefa como completa, alterando seu estilo visual e atualizando a informação no LocalStorage.*

##

#### 🛠️ Tecnologias Utilizadas

- **HTML5:** *Linguagem de marcação utilizada para estruturar o conteúdo da página.*
####
- **SCSS:** *Utilizado para estilização da página, garantindo um layout visual agradável.*
####
- **JavaScript:** *Responsável pela interação da aplicação, manipulação da DOM e integração com o LocalStorage.*

##

#### 🔧 Melhorias Futuras
- *Filtro de tarefas por dia da semana.*
- *Edição de tarefas.*
- *Integração com APIs externas para adicionar notificações de lembrete.*

##

##### 👨‍💻 Autor
- Desenvolvido por **Felipe Mascena**. Contribuições e feedbacks são sempre bem-vindos!
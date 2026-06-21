# Agendamento de Visitas à Wilson Sons

## Como Funciona

1. O usuário acessa o site e recebe informações sobre a importância do uso dos Equipamentos de Proteção Individual (EPIs).

2. O usuário clica no botão **"Agendar Minha Visita"** e é redirecionado para o formulário de agendamento.

3. O usuário preenche o formulário com seus dados e recebe um e-mail confirmando o envio da solicitação.

4. Os dados enviados são armazenados automaticamente em uma planilha do Google Sheets .

5. O Google Apps Script verifica a resposta do campo **"Possui EPIs?"**:

   * Se a resposta for **"Não"**, o usuário recebe um e-mail informando que não poderá participar da visita por não possuir os equipamentos obrigatórios.
   * Se a resposta for **"Sim"**, o usuário recebe um e-mail confirmando o agendamento da visita.

## Regras de Negócio

* O uso de EPIs é obrigatório para participação nas visitas.
* Usuários que informarem não possuir EPIs terão sua solicitação recusada automaticamente.
* Todas as solicitações geram um e-mail automático de retorno ao usuário.

## Tecnologias Utilizadas
* builder.io
* Google Apps Script
* Google Sheets
link: https://wilsonsonsvisitas.netlify.app/

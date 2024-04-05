# Reserva de salas

Filtra as salas disponíveis para reserva com base nos critérios especificados no pedido.

- A função recebe uma lista de salas disponíveis e um pedido de reserva.
- A lista de salas disponíveis é filtrada para retornar apenas as salas que atendem aos critérios do pedido.
- A lista de salas disponíveis é retornada.

**Exemplo de uso:**

```javascript
const salasDisponiveis = [
  {
    tipo: "Sala de Aula",
    lugares: 50,
    dataHoraInicio: new Date("2023-04-01T10:00:00"),
    dataHoraTermino: new Date("2023-04-01T12:00:00"),
  },
];

const pedido = {
  tipoDeSala: "Sala de Aula",
  quantidadeDePessoas: 50,
  dataHoraInicio: new Date("2023-04-01T10:00:00"),
  dataHoraTermino: new Date("2023-04-01T12:00:00"),
};

const salasDisponiveisFiltradas = filtrarSalasDisponiveisParaReserva(
  salasDisponiveis,
  pedido
);
```

**Saída:**

```javascript
[
  {
    tipo: "Sala de Aula",
    lugares: 50,
    dataHoraInicio: new Date("2023-04-01T10:00:00"),
    dataHoraTermino: new Date("2023-04-01T12:00:00"),
  },
];
```

**Executar os testes:**

```sh
npm test
```

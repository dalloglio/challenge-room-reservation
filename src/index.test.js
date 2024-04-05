const filtrarSalasDisponiveisParaReserva = require("./index");

describe("Salas disponíveis para reserva", () => {
  test("Retorna as salas disponíveis quando há o mesmo horário em dias diferentes", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Aula",
        lugares: 20,
        dataHoraInicio: new Date("2024-01-02 10:00:00"),
        dataHoraTermino: new Date("2024-01-02 11:00:00"),
      },
      {
        tipo: "Sala de Reunião",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 10,
      dataHoraInicio: new Date("2024-01-01 10:00:00"),
      dataHoraTermino: new Date("2024-01-01 11:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([salasDisponiveis[0]]);
  });

  test("Retorna as salas disponíveis quando a quantidade de lugares solicitada é menor que a capacidade da sala", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Aula",
        lugares: 20,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 15,
      dataHoraInicio: new Date("2024-01-01 10:00:00"),
      dataHoraTermino: new Date("2024-01-01 11:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([salasDisponiveis[1]]);
  });

  test("Retorna as salas disponíveis quando há tipo de sala e horários com capacidade de lugares igual ou maior ao solicitado", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Aula",
        lugares: 20,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Reunião",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 10,
      dataHoraInicio: new Date("2024-01-01 10:00:00"),
      dataHoraTermino: new Date("2024-01-01 11:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([salasDisponiveis[0], salasDisponiveis[1]]);
  });

  test("Retorna as salas disponíveis quando há tipos de salas diferentes com o mesmo horário", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Reunião",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 10,
      dataHoraInicio: new Date("2024-01-01 10:00:00"),
      dataHoraTermino: new Date("2024-01-01 11:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([salasDisponiveis[0]]);
  });

  test("Retorna uma lista vazia quando não houver salas disponíveis do tipo solicitado", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Reunião",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "C",
      quantidadeDePessoas: 10,
      dataHoraInicio: new Date("2024-01-01 10:00:00"),
      dataHoraTermino: new Date("2024-01-01 11:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([]);
  });

  test("Retorna uma lista vazia quando não houver salas disponíveis com a quantidade de lugares solicitado", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Reunião",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 20,
      dataHoraInicio: new Date("2024-01-01 10:00:00"),
      dataHoraTermino: new Date("2024-01-01 11:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([]);
  });

  test("Retorna uma lista vazia quando não houver salas disponíveis com o horário solicitado", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Reunião",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 10,
      dataHoraInicio: new Date("2024-01-01 11:00:00"),
      dataHoraTermino: new Date("2024-01-01 12:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([]);
  });

  test("Retorna uma lista vazia quando não houver salas disponíveis com o horário solicitado, mesmo que o horário esteja entre o horário solicitado", () => {
    const salasDisponiveis = [
      {
        tipo: "Sala de Aula",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
      {
        tipo: "Sala de Reunião",
        lugares: 10,
        dataHoraInicio: new Date("2024-01-01 10:00:00"),
        dataHoraTermino: new Date("2024-01-01 11:00:00"),
      },
    ];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 10,
      dataHoraInicio: new Date("2024-01-01 10:01:00"),
      dataHoraTermino: new Date("2024-01-01 10:59:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([]);
  });

  test("Retorna uma lista vazia quando não houver salas disponíveis", () => {
    const salasDisponiveis = [];

    const pedido = {
      tipoDeSala: "Sala de Aula",
      quantidadeDePessoas: 10,
      dataHoraInicio: new Date("2024-01-01 10:00:00"),
      dataHoraTermino: new Date("2024-01-01 11:00:00"),
    };

    const result = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
    expect(result).toEqual([]);
  });
});

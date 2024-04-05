/**
 * Filtra as salas disponíveis para reserva com base nos critérios especificados no pedido.
 *
 * - A função recebe uma lista de salas disponíveis e um pedido de reserva.
 * - A lista de salas disponíveis é filtrada para retornar apenas as salas que atendem aos critérios do pedido.
 * - A lista de salas disponíveis é retornada.
 *
 * **Exemplo de uso:**
 *
 * ```
 * const salasDisponiveis = [
 *   {
 *     tipo: 'Sala de Aula',
 *     lugares: 50,
 *     dataHoraInicio: new Date('2023-04-01T10:00:00'),
 *     dataHoraTermino: new Date('2023-04-01T12:00:00')
 *   }
 * ];
 *
 * const pedido = {
 *   tipoDeSala: 'Sala de Aula',
 *   quantidadeDePessoas: 50,
 *   dataHoraInicio: new Date('2023-04-01T10:00:00'),
 *   dataHoraTermino: new Date('2023-04-01T12:00:00')
 * };
 *
 * const salasDisponiveisFiltradas = filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido);
 * ```
 *
 * **Saída:**
 *
 * ```
 * [
 *   {
 *     tipo: 'Sala de Aula',
 *     lugares: 50,
 *     dataHoraInicio: new Date('2023-04-01T10:00:00'),
 *     dataHoraTermino: new Date('2023-04-01T12:00:00')
 *   }
 * ]
 * ```
 *
 * @param {Object[]} salasDisponiveis - Lista das salas disponíveis para reserva.
 * @param {string} salasDisponiveis[].tipo - Tipo da sala.
 * @param {number} salasDisponiveis[].lugares - Quantidade de lugares suportados.
 * @param {Date} salasDisponiveis[].dataHoraInicio - Data e hora de início.
 * @param {Date} salasDisponiveis[].dataHoraTermino - Data e hora de término.
 * @param {Object} pedido - Pedido de reserva de sala.
 * @param {string} pedido.tipoDeSala - Tipo de sala solicitado.
 * @param {number} pedido.quantidadeDePessoas - Quantidade de pessoas para a reserva.
 * @param {Date} pedido.dataHoraInicio - Data e hora de início da reserva.
 * @param {Date} pedido.dataHoraTermino - Data e hora de término da reserva.
 * @returns {Object[]} Lista das salas disponíveis que atendem aos critérios do pedido.
 */
function filtrarSalasDisponiveisParaReserva(salasDisponiveis, pedido) {
  return salasDisponiveis.filter((sala) => {
    return (
      sala.tipo === pedido.tipoDeSala &&
      sala.lugares >= pedido.quantidadeDePessoas &&
      sala.dataHoraInicio.getTime() === pedido.dataHoraInicio.getTime() &&
      sala.dataHoraTermino.getTime() === pedido.dataHoraTermino.getTime()
    );
  });
}

module.exports = filtrarSalasDisponiveisParaReserva;

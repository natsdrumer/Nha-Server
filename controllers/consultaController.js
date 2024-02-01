
const { Consulta, Paciente, Medico, Agenda } = require('../models');

const consultaController = {
  getAll: async (req, res) => {
    try {
      const consultas = await Consulta.findAll();
      res.json(consultas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const consulta = await Consulta.findByPk(id);
      if (!consulta) {
        return res.status(404).json({ error: 'consulta not found' });
      }
      res.json(consulta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { body } = req;
    try {
      const consulta = await Consulta.create(body);
      res.status(201).json(consulta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const consulta = await Consulta.findByPk(id);
      if (!consulta) {
        return res.status(404).json({ error: 'consulta not found' });
      }
      await consulta.update(body);
      res.json(consulta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const consulta = await Consulta.findByPk(id);
      if (!consulta) {
        return res.status(404).json({ error: 'consulta not found' });
      }
      await consulta.destroy();
      res.json({ message: 'consulta deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },



marcarConsulta: async (req, res) => {
  const { pacienteId, medicoId, agendaId, dataHora, preco, especialidadeId } = req.body;

  try {
    // Verifica se o paciente existe
    const paciente = await Paciente.findByPk(pacienteId);
    if (!paciente) {
      return res.status(404).json({ error: 'Paciente não encontrado' });
    }

    // Verifica se o médico existe
    const medico = await Medico.findByPk(medicoId);
    if (!medico) {
      return res.status(404).json({ error: 'Médico não encontrado' });
    }

    // Verifica se a agenda existe
    const agenda = await Agenda.findByPk(agendaId);
    if (!agenda) {
      return res.status(404).json({ error: 'Agenda não encontrada' });
    }

    // Cria a consulta
    const consulta = await Consulta.create({
      dataHora,
      preco,
      especialidadeId,
    });

    // Associa o paciente, médico e agenda à consulta
    await consulta.setPaciente(paciente);
    await consulta.setMedico(medico);
    await consulta.setAgenda(agenda);

    res.status(201).json(consulta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

};

module.exports = consultaController;
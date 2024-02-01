const { Agenda } = require('../models');

const agendaController = {
  getAll: async (req, res) => {
    try {
      const agendas = await Agenda.findAll();
      res.json(agendas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const agenda = await Agenda.findByPk(id);
      if (!agenda) {
        return res.status(404).json({ error: 'Agenda not found' });
      }
      res.json(agenda);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { body } = req;
    try {
      const agenda = await Agenda.create(body);
      res.status(201).json(agenda);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const agenda = await Agenda.findByPk(id);
      if (!agenda) {
        return res.status(404).json({ error: 'Agenda not found' });
      }
      await agenda.update(body);
      res.json(agenda);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const agenda = await Agenda.findByPk(id);
      if (!agenda) {
        return res.status(404).json({ error: 'Agenda not found' });
      }
      await agenda.destroy();
      res.json({ message: 'Agenda deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = agendaController;
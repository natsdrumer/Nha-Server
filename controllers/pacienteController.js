const { Paciente } = require('../models');

const pacienteController = {
  getAll: async (req, res) => {
    try {
      const pacientes = await Paciente.findAll();
      res.json(pacientes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const paciente = await Paciente.findByPk(id);
      if (!paciente) {
        return res.status(404).json({ error: 'paciente not found' });
      }
      res.json(paciente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { body } = req;
    try {
      const paciente = await Paciente.create(body);
      res.status(201).json(paciente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const paciente = await Paciente.findByPk(id);
      if (!paciente) {
        return res.status(404).json({ error: 'paciente not found' });
      }
      await paciente.update(body);
      res.json(paciente);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const paciente = await Paciente.findByPk(id);
      if (!paciente) {
        return res.status(404).json({ error: 'paciente not found' });
      }
      await paciente.destroy();
      res.json({ message: 'paciente deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = pacienteController;
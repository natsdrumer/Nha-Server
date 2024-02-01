// controllers/medicoController.js
const { Medico } = require('../models');

const medicoController = {
  getAll: async (req, res) => {
    try {
      const medicos = await Medico.findAll();
      res.json(medicos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const medico = await Medico.findByPk(id);
      if (!medico) {
        return res.status(404).json({ error: 'Medico not found' });
      }
      res.json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { body } = req;
    try {
      const medico = await Medico.create(body);
      res.status(201).json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const medico = await Medico.findByPk(id);
      if (!medico) {
        return res.status(404).json({ error: 'Medico not found' });
      }
      await medico.update(body);
      res.json(medico);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const medico = await Medico.findByPk(id);
      if (!medico) {
        return res.status(404).json({ error: 'Medico not found' });
      }
      await medico.destroy();
      res.json({ message: 'Medico deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = medicoController;

const { Clinica } = require('../models');

const clinicaController = {
  getAll: async (req, res) => {
    try {
      const clinicas = await Clinica.findAll();
      res.json(clinicas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const clinica = await Clinica.findByPk(id);
      if (!clinica) {
        return res.status(404).json({ error: 'clinica not found' });
      }
      res.json(clinica);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { body } = req;
    try {
      const clinica = await Clinica.create(body);
      res.status(201).json(clinica);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const clinica = await Clinica.findByPk(id);
      if (!clinica) {
        return res.status(404).json({ error: 'clinica not found' });
      }
      await clinica.update(body);
      res.json(clinica);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const clinica = await Clinica.findByPk(id);
      if (!clinica) {
        return res.status(404).json({ error: 'clinica not found' });
      }
      await clinica.destroy();
      res.json({ message: 'clinica deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = clinicaController;
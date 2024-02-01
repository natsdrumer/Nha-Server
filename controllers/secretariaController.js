const { Secretaria } = require('../models');

const secretariaController = {
  getAll: async (req, res) => {
    try {
      const secretarias = await Secretaria.findAll();
      res.json(secretarias);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const secretaria = await Secretaria.findByPk(id);
      if (!secretaria) {
        return res.status(404).json({ error: 'secretaria not found' });
      }
      res.json(secretaria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { body } = req;
    try {
      const secretaria = await Secretaria.create(body);
      res.status(201).json(secretaria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const secretaria = await Secretaria.findByPk(id);
      if (!secretaria) {
        return res.status(404).json({ error: 'secretaria not found' });
      }
      await secretaria.update(body);
      res.json(secretaria);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const secretaria = await Secretaria.findByPk(id);
      if (!secretaria) {
        return res.status(404).json({ error: 'secretaria not found' });
      }
      await secretaria.destroy();
      res.json({ message: 'secretaria deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = secretariaController;
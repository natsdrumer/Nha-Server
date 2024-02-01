const { Especialidade } = require('../models');

const especialidadeController = {
  getAll: async (req, res) => {
    try {
      const especialidades = await Especialidade.findAll();
      res.json(especialidades);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  getById: async (req, res) => {
    const { id } = req.params;
    try {
      const especialidade = await Especialidade.findByPk(id);
      if (!especialidade) {
        return res.status(404).json({ error: 'especialidade not found' });
      }
      res.json(especialidade);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  create: async (req, res) => {
    const { body } = req;
    try {
      const especialidade = await Especialidade.create(body);
      res.status(201).json(especialidade);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const especialidade = await Especialidade.findByPk(id);
      if (!especialidade) {
        return res.status(404).json({ error: 'especialidade not found' });
      }
      await especialidade.update(body);
      res.json(especialidade);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const especialidade = await Especialidade.findByPk(id);
      if (!especialidade) {
        return res.status(404).json({ error: 'especialidade not found' });
      }
      await especialidade.destroy();
      res.json({ message: 'especialidade deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = especialidadeController;
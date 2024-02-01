// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const medicoRoutes = require('./routes/medicoRoutes');
const especialidadeRoutes = require('./routes/especialidadeRoutes');
const secretariaRoutes = require('./routes/secretariaRoutes');
const clinicaRoutes = require('./routes/clinicaRoutes');
const pacienteRoutes = require('./routes/pacienteRoutes');
const consultaRoutes = require('./routes/consultaRoutes');
const agendaRoutes = require('./routes/agendaRoutes');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/usuarioRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/medicos', medicoRoutes);
app.use('/especialidades', especialidadeRoutes);
app.use('/secretarias', secretariaRoutes);
app.use('/clinicas', clinicaRoutes);
app.use('/pacientes', pacienteRoutes);
app.use('/consultas', consultaRoutes);
app.use('/agendas', agendaRoutes);
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

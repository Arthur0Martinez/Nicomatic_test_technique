const express = require('express');
const bodyParser = require('body-parser');
const passwordRoutes = require('./routes/passwords');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use('/api/passwords', passwordRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

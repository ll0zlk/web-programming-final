const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running');
});

/* API 정보 */
app.get('/:name', (req, res) => {
  const name = req.params.name;
  const members = {
    '이효진': { where: 'atv', genre: 'hiphop', position: 'member'},
    '김성환': { where: 'atv', genre: 'hiphop', position: 'leader'},
    '한소민': { where: 'atv', genre: 'waacking', position: 'leader'},
    '임다희': { where: 'atv', genre: 'locking', position: 'member'},
    '최서원': { where: 'atv', genre: 'hiphop', position: 'member'},
    '유승주': { where: 'pre', genre: 'bboying', position: 'leader'},
    '한이윤': { where: 'reserve', genre: 'hiphop', position: 'leader'}
  };

  if (members[name]) {
    res.json(members[name]);
  } else {
    res.status(404).json({ error: 'Member not found' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

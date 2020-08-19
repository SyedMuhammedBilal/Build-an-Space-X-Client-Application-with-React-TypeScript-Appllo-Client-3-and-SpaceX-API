const express = require('express');
const cors = require('cors');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');

const app = express();

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.use(express.static('client/build'));

app.get('*', (req: any, res: { sendFile: (arg0: any) => void; }) => {
  res.sendFile(path.resolve(__dirname, '../../client', "build", 'index.html'))
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}⭕️`));

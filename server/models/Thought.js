const mongoose = require('mongoose');

const ThoughtSchema = mongoose.Schema({
  questions: {
    type: [], // {date, event, thought, reaction}
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  clientId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('thought', ThoughtSchema);

// {
//   name,
//   clientId,
//   questions: [
//     {
//       question,
//       answer
//     }
//   ]
// }
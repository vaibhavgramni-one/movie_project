const mongoose = require('mongoose');

// configurations for mongoose...//
mongoose.connect(process.env.DB_URL,{
    useCreateIndex : true,
    useUnifiedTopology : true,
    useNewUrlParser : true
})
  .then(() => console.log('connected to mongodb successfully'))
  .catch((err) => console.log(err));

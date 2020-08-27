const mongoose = require('mongoose');

try {
  mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  }) .then( (res) => {console.log('Connected to MongoDB');});
  
} catch (e) {
  console.log("consosoososo=====>",e.toString());
}

//DATA BASE CONNECTION
const mongoose =  require('mongoose');

mongoose.connect('mongodb://localhost/WEB-SITE_EXE', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false
})
.then(db => console.log('DB is connect'))
.catch(err => console.log(err))
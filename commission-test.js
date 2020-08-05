const { commission } = require('./commission');

function commissionTest(text, flyDate, res) {
    if (commission(flyDate) === res) {
        console.log(text,' Success');
    } else {
        console.log(text, ' Fail');
    }
}
module.exports = { commissionTest };

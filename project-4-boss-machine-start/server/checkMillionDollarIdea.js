const checkMillionDollarIdea = (req, res, next) => {
    const numWeeks = req.query.numWeeks;
    const weeklyRevenue = req.query.weeklyRevenue;
    console.log(numWeeks, weeklyRevenue);
    if (numWeeks && weeklyRevenue) {
        console.log('testing million dollar idea');
        if(numWeeks * weeklyRevenue >= 1000000) {
            next();
        } else {
            return res.status(400).send(`Not a million dollar idea`);
        }
    }
    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

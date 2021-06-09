const checkMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weeklyRevenue} = req.body;
    if (numWeeks && weeklyRevenue) {
        if(numWeeks * weeklyRevenue >= 1000000) {
            return next();
        }
    }
    return res.status(400).send(`Not a million dollar idea`);
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;

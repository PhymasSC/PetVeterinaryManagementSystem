const LocalStrategy = require("passport-local").Strategy;

function initialize(passport, getUserByName, getUserById) {
    authUser = async (user, password, done) => {
        let authenticated_user = await getUserByName(user).then(
            (res) => res[0]
        );
        if (!authenticated_user)
            return done(null, false, { status: 400, desc: "User not exist" });

        if (authenticated_user.password !== password)
            return done(null, false, { status: 401, desc: "Wrong password" });

        return done(null, authenticated_user, { status: 202 });
    };

    passport.use(new LocalStrategy(authUser));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) =>
        done(null, await getUserById(id).then((res) => res[0]))
    );
}

module.exports = initialize;

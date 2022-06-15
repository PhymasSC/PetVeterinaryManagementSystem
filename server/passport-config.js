const LocalStrategy = require("passport-local").Strategy;

function initialize(passport, getUserByName, getUserById) {
	const authenticateUser = async (username, password, done) => {
		const user = await getUserByName(username);
		if (user === null)
			return done(null, false, { msg: "not_found", name: username });

		try {
			if (await password == user.password) {
				return done(null, user);
			} else {
				return done(null, false, { msg: "wrong_password", name: username });
			}
		} catch (e) {
			return done(e);
		}
	};

	passport.use(
		new LocalStrategy({ usernameField: "username" }, authenticateUser)
	);
	passport.serializeUser((user, done) => done(null, user.id));
	passport.deserializeUser(async (id, done) =>
		done(null, await getUserById(id))
	);
}

module.exports = initialize;
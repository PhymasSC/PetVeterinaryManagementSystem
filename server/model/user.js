const db = require("./../config/database"); // import the connection from the config to the database to make db queries

// Build a user Model to export to the controllers
const User = {
    selectAll: (cb) => {
        const queryString = `SELECT userId, username, phoneno, password, icno, address, email, job_detail 
      FROM users 
      ORDER BY userId ASC;`;
        db.query(queryString, (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    getUserByUsernameWithPassword: (username, password, done) => {
        const queryString = `SELECT userId, username, phoneno, password, icno, address, email, job_detail 
        FROM users 
        ORDER BY userId ASC
        WHERE username=? AND password=?
        LIMIT 1;`;
        db.execute(queryString, [username, password], (err, user) => {
            if (err) {
                return done(err, user);
            }
            return done(null, user[0]);
        });
    },
    getUserById: (id, done) => {
        const queryString = `SELECT userId, username, phoneno, password, icno, address, email, job_detail 
        FROM users 
        ORDER BY userId ASC
        WHERE userId=? 
        LIMIT 1;`;
        db.execute(queryString, [id], (err, user) => {
            if (err) {
                return done(err, user);
            }
            return done(null, user[0]);
        });
    },
    ////////////////
    selectOneByUsername: (username, cb) => {
        const queryString = `SELECT u.userId, u.username, u.accessId, a.type 
      FROM users AS u 
      INNER JOIN accessLevels AS a 
      ON u.accessId=a.permissionLevel 
      WHERE username=? 
      LIMIT 1;`;
        db.execute(queryString, [username], (err, results) => {
            if (err) throw err;
            cb(results);
        });
    },
    deleteOne: (id, cb) => {
        const queryString = `DELETE FROM users 
    WHERE userId=?;`;
        db.execute(queryString, [id], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: (vals, cb) => {
        const queryString = `INSERT INTO users 
    (username, password, accessId)
     VALUES (?,?,?)`;
        db.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: (vals, id, cb) => {
        vals.push(id);
        const queryString =
            "UPDATE users SET username=?, password=?, accessId=? WHERE userId=?;";
        db.execute(queryString, vals, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
};
module.exports = User;

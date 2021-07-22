const passport = require('passport');
const Strategy = require('passport-local');
const crypto = require('crypto');
const db = require('./db');

export const isBrowser = () => typeof window !== "undefined"
export const getUser = () =>
    isBrowser() && window.localStorage.getItem("gatsbyUser")
        ? JSON.parse(window.localStorage.getItem("gatsbyUser"))
        : {}
const setUser = user =>
    window.localStorage.setItem("gatsbyUser", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
    passport.use(new Strategy(function(username, password, cb) {
        db.get('SELECT rowid AS id, * FROM users WHERE username = ?', [ username ], function(err, row) {
            if (err) { return cb(err); }
            if (!row) { return cb(null, false, { message: 'Incorrect username or password.' }); }
            
            crypto.pbkdf2(password, row.salt, 10000, 32, 'sha256', function(err, hashedPassword) {
                if (err) { return cb(err); }
                if (!crypto.timingSafeEqual(row.hashed_password, hashedPassword)) {
                    return cb(null, false, { message: 'Incorrect username or password.' });
                }
                
                var user = {
                    id: row.id.toString(),
                    username: row.username,
                    displayName: row.name
                };

                return cb(null, user);
            });
        });
    }));

    passport.serializeUser(function(user, cb) {
        process.nextTick(function() {
          cb(null, { id: user.id, username: user.username });
        });
    });
    
      passport.deserializeUser(function(user, cb) {
        process.nextTick(function() {
          return cb(null, user);
        });
    });
}
export const isLoggedIn = () => {
  const user = getUser()
  return !!user.username
}
export const logout = callback => {
  setUser({})
  callback()
}

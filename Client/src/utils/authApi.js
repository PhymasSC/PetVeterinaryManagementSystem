import axios from "axios";

const isLogin = async () => {
    try {
        const res = await axios.get("/auth/status");
        return res.data;
    } catch (err) {
        return console.log(err);
    }
};

export {
    isLogin
    // postUserLogin: async (user, done) => {
    //     try {
    //         const res = await axios.post("/auth/login", user);
    //         // Async function for logging in, setting up callback to return two params, ( error: false if no error, res.data: userData from server )
    //         return done(false, res.data || "error logging in");
    //     } catch (err) {
    //         // console.log('serverside error thrown failed log in attempt')
    //         return done(true, false);
    //     }
    // },
    // getLoggedOut: async () => {
    //     try {
    //         const res = await axios.get("/auth/logout");
    //         return res;
    //     } catch (err) {
    //         return console.log(err);
    //     }
    // },
    // postNewUser: async newUser => {
    //     // Example POST: { "vals": ["test_user", "111111", 1] }
    //     // console.log(newUser)
    //     try {
    //         const { username, password, accessId } = newUser;
    //         const res = await axios.post("/auth/user", {
    //             vals: [username, password, accessId],
    //         });
    //         // console.log(res)
    //         return res;
    //     } catch (err) {
    //         return console.log(err);
    //     }
    // },
    // getAllUsers: async () => {
    //     try {
    //         const res = await axios.get("/auth/user");
    //         // console.log(res)
    //         return res.data;
    //     } catch (err) {
    //         return console.log(err);
    //     }
    // },
    // deleteUserById: async id => {
    //     try {
    //         const res = await axios.delete(`auth/user/${id}`);
    //         // console.log(res)
    //         return res;
    //     } catch (err) {
    //         return console.log(err);
    //     }
    // },
};

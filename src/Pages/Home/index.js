const home = (location, cb) => {
    require.ensure([], require => {
        cb(null, require("./home").default);
    }, 'home');
};
export default home
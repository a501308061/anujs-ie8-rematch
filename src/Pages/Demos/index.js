const demo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require("./demos").default);
    }, 'demo');
};
export default demo
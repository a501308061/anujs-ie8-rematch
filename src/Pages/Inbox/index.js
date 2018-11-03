export default function inbox(partialNextState, cb) {
  require.ensure([], (require) => {
      cb(null, require('./pageinbox').default);
  },'pageinbox');
}
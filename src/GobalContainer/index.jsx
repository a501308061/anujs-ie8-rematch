import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import React from "react";
import router from '../Pages'
import store from '../Modules/index'
export default class GobalProvider extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store()}>
                <Router history={hashHistory}>
                    <Route path="/" >
                        <Route path="demo" getComponent={router.demo} />
                        <Route path="inbox" getComponent={router.inbox}/>
                        <Route path="home" getComponent={router.home}/>
                    </Route>
                </Router>
            </Provider>
        )
    }
}
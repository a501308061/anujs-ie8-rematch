import React from 'react'
import injectIntl from './injectIntl'
import lang from '../lang'

class IntlComponent extends React.Component{
    constructor(props){
        super(props)
        this.intl = props.intl;
    }
    getIntl(){
        return this.intl;
    }
}

export default injectIntl(lang)(IntlComponent)
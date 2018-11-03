import { Link } from 'react-router'
import IntlComponent from 'IntlComponent'
// import injectIntl from '../../HOC/injectIntl'

class PageInbox extends IntlComponent {
    constructor(props,getIntl) {
        super(props)
        this.state = {list:[]}
    }

    async componentWillMount () {
    }

    render() {
        const intl = this.getIntl()
        console.log(intl)

        return (
            <div>
                <h2>{intl.title}</h2>
                <div>{intl.msg}</div>
                <ul>
                    {this.state.list.map((el, index)=>(
                        <li><Link to={"/inbox/messages/"+index} dangerouslySetInnerHTML={{__html: el.note}}></Link></li>
                    ))}
                </ul>
                {this.props.children || "Welcome to your Inbox"}
            </div>
        )
    }
}

export default (PageInbox);
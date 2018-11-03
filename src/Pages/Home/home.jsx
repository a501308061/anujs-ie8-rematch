import IntlComponent from 'IntlComponent'
import { DatePicker } from 'antd';
import './home.scss'
import {connect} from 'react-redux'
class Home extends IntlComponent {
    componentDidMount(){
        // console.log(Util)
        // this.props.getswitch()
    }
    onPanelChange=(value, mode)=> {
        console.log(value, mode);
      }
    render() {
        console.log(this.props.switchcase)
        return(
        <div>
            <div class="current-align">
                <div>{this.props.count}</div>
                <span>您当前的位置:</span>
                <a >首页</a>&gt;
                <a >服务大厅</a>&gt;
            </div>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.incrementAsync}>incrementAsync</button>
            <div style={{ width: 290, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <DatePicker onChange={this.onPanelChange} />
            </div>
        </div>
        )
    }
}
const mapState = state => ({
    count: state.count,
    switchcase:state.switchcase
  })
const mapDispatch = ({ count: { increment, incrementAsync },switchcase:{getswitch}}) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1),
    getswitch:(para)=>getswitch(para)
})
export default connect(mapState,mapDispatch)(Home)
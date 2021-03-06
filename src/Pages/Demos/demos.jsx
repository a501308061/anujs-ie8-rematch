import React from "react";
import {hashHistory} from 'react-router'
/**
 * 富文本编辑器demo
 */

class DemoEditor extends React.Component{
    constructor(props){
        super(props)
        this.state = {text:"今天忘记吃药啦, 感觉自己萌萌哒 ^_^"}
    }

    componentDidMount(){
        let el = document.getElementById("testEditor")
        let input = document.createElement("textarea")
        input.id = "editor"+parseInt(Math.random()*100000)
        el.appendChild(input)
        this.editor = window.CKEDITOR.replace(input.id);
        this.editor.setData(this.state.text)
    }

    componentWillUnmount(){
        if (this.editor) this.editor.destroy();
    }

    getText(){
        return this.editor.getData();
    }

    render () {
        return <div id="testEditor"></div>
    }
}

class PageDemos extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()}
        this.getText = this.getText.bind(this);
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            this.setState({date:new Date()})
        }, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    getText(){
        alert(this.editor.getText())
    }

    click(){
        hashHistory.push('inbox')
    }
    
    render (){
        return (
            <div className="PageDemos">
                <p>{this.state.date.toLocaleTimeString()}</p>
                <div>
                    <h1>Demo CKEditor</h1>
                    <p><button type="button" onClick={this.getText}>提交</button></p>
                </div>
                <div><button type="button" onClick={this.click}>跳转</button></div>
            </div>
        )
    }
}

export default PageDemos;
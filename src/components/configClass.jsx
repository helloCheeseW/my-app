import React,{Component} from "react";
import {Select,Icon} from "antd";
import { findDOMNode } from 'react-dom';
import eventListener from 'rc-util/lib/Dom/addEventListener';
import contains from 'rc-util/lib/Dom/contains';
const Option=Select.Option;

export default class Breadcrumb extends Component {
    constructor(props){
        super(props);
        this.state={
            visible:false,
            text:this.props.text
        }
    }

    onDocumentClick(event) {
        const target = event.target;
        const root = findDOMNode(this);
        if (!contains(root, target)) {
            this.setState({
                visible:false
            })
        }
    };

    componentWillReceiveProps(nextProps) {
        if(nextProps.text !== this.props.text) {
            this.setState({text: nextProps.text})
        }
    };

    componentDidMount(){
        this.clickOutsideHandler = eventListener(document.body, 'mousedown', this.onDocumentClick.bind(this));
    };

    componentWillUnmount(){
        if (this.clickOutsideHandler) {
            this.clickOutsideHandler.remove();
            this.clickOutsideHandler = null;
        }
    };

    handleClick=()=>{
        this.setState({
            visible:true
        })
    };

    handleChange=(value,option)=>{
        this.setState({
            visible:false,
            text:value
        });
        this.props.onChange(option.props.code)
    };

    render(){
        const {visible,text}=this.state;
        //const {ciTypies}=this.props;
        if(!visible){
            return (<span style={{marginRight:10}}>{text}<Icon onClick={this.handleClick} type="edit" /></span>)
        }
        return (
            <div className="edit-class" style={{marginRight:10}}>
                <Select onSelect={this.handleChange}
                        getPopupContainer={(el)=>el.parentNode} defaultValue={text}>
                    <Option key="1" value="亮黑 240">亮黑 240</Option>
                    <Option key="2"  value="黑 38码">黑 38码</Option>
                </Select>
            </div>
        )
    }

}

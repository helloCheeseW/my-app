import React, { Component } from 'react';
import { Table,Button,Modal,Form,Input,Checkbox} from 'antd';

import ConfigClass from '../components/configClass';
const FormItem = Form.Item;
const CheckboxGroup = Checkbox.Group;

const plainOptions = [
    ['1', 'Pear', 'Orange','c2', 'b3','Apple', 'd4', 'e5'],
    ['2', 'g','h', 'i', 'j','k', 'l','m'],
    ['3', 'or','p', 'q','r', 'u', 'x','aa'],
    [ '4','fr', 't', 'ttt1','ee', 'eee','yy', 'u2'],
    [ '5','ii', 'o','ooo', 'm1', 'mmm','lll', 'pp'],
    ['6', 'kk', 's','v', 'y','aae', 'dd', 'ff'],
    ['7', 'ttt','e', 'ys', 'yyy','uu', 'i1','iii'],
    ['8', 'mm','l1', 'll','p1', 'ppp', 'kkk','b'],
    ['9','w', 'z', 'aak','ddd', 'fff']
];
const defaultCheckedList = [];

class Produce extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            attrVisible:false,
            localVisible:false,
            checkedList: defaultCheckedList,
            selectedList:[],
            checkAll: false,
            lineCheck: false
        }
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleCancel = () => {
        this.setState({
            visible: false,
            attrVisible:false,
            localVisible:false,
        });
    };
    produceInfo = () => {
        this.setState({
            attrVisible: true,
        });
    };
    configClassChange=(value,resourceId)=>{
        // const data={
        //     "id": resourceId,
        //     "ciTypeCode": value
        // };
        // const { id } = this.props.params;
        //this.props.dispatch(changeConfigClass(id,data))
    };
    showLocalModal = ()=>{
        this.setState({
            localVisible: true,
        });
    };

    onChange = (checkedList) => {
        this.setState({
            checkedList,
            selectedList:checkedList,
            checkAll: checkedList.length ===_.flattenDeep(plainOptions).length,
        });
    }
    onCheckAllChange = (e) => {
        let allData = _.flatten(plainOptions, true);

        this.setState({
            checkedList: e.target.checked ? allData : [],
            selectedList:e.target.checked ? allData : [],
            checkAll: e.target.checked,
            lineCheck:true
        });
    }
    onCheckAllLineChange = (e,data)=>{
        const selectData = this.state.selectedList;
        const linearArray = _.flattenDeep(selectData);
        let checkedList;
        if(_.intersection(linearArray,data).length>0){
            _.remove(linearArray,(item)=>{
                return data.indexOf(item)>-1
            })
            checkedList = linearArray
        }else{
            selectData.push(data);
            checkedList = _.flattenDeep(selectData);
        }
        this.setState({
            checkedList,
            selectedList:checkedList,
            checkAll: checkedList.length ===_.flattenDeep(plainOptions).length,
        });
    }
    render() {
        const dataSource = [{
            key: '1',
            name: '鞋子',
            alikeUrl: 'https://item.taobao.com/item.htm?id=552395437388',
            buyUrl: 'https://item.taobao.com/item.htm?id=552395437388',
            rule:'123',
        }];

        const columns = [{
            title: '宝贝信息',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '关联地址',
            dataIndex: 'alikeUrl',
            key: 'alikeUrl',
        },
        {
            title: '下单地址',
            dataIndex: 'buyUrl',
            key: 'buyUrl',
        },{
            title: '关联属性',
            dataIndex: 'attr',
            key: 'attr',
            render: (text, record) => (
                <div>
                    <Button className="ml5" onClick={this.produceInfo}>展开关联信息</Button>
                </div>
            )
        },{
            title: '分单规则',
            dataIndex: 'rule',
            key: 'rule',
        },{
            title: '操作',
            dataIndex: 'handel',
            key: 'handel',
            render: (text, record) => (
                <div>
                    <Button onClick={this.showLocalModal} className="ml5">增加关联地址</Button>
                </div>
            )
        }];

        const attrData = [{
            key: '1',
            produceAttr: '黑色 38 $12',
            alikeAttr: '亮黑 240 $22',
        },{
            key: '2',
            produceAttr: '黑色 38 $123',
            alikeAttr: '亮黑 240 $132',
        }];

        const attrColumns = [{
            title: '宝贝属性',
            dataIndex: 'produceAttr',
            key: 'produceAttr',
        }, {
            title: '关联属性',
            dataIndex: 'alikeAttr',
            key: 'alikeAttr',
            render:(text,record)=>{
                return(
                    <div>
                        <ConfigClass text={text} onChange={(value)=>this.configClassChange(value,record.id)} />
                        <ConfigClass text={text} onChange={(value)=>this.configClassChange(value,record.id)} />
                    </div>
                )
            }
        }];
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 16 },
        };
        const addFormItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 18 },
        };

        return (
            <div className="user">
                <div className="button-container">
                    <Button type="primary" onClick={this.showModal}>添加商品</Button>
                </div>
                <div className="clearfix">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <Modal title="添加商品"
                       visible={this.state.visible}
                       width={800}
                       onOk={this.handleOk}
                       confirmLoading={this.state.confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit} className="form">
                        <FormItem {...addFormItemLayout} label="商品链接">
                            {getFieldDecorator('link', {
                                rules: [{ required: true, message: '请输入商品链接' }],
                            })(
                                <Input placeholder="请输入商品链接" />
                            )}
                        </FormItem>
                        <FormItem {...addFormItemLayout} label="分单规则">
                            <div>
                                <Checkbox onChange={this.onCheckAllChange} checked={this.state.checkAll}>全选</Checkbox>
                            </div>
                            {
                                _.map(plainOptions,(item,i)=>{
                                    return(
                                        <div style={{marginTop:10}} key={i}>
                                            <div style={{display:'inline',marginRight:5}}>
                                                <Button onClick={(e)=>this.onCheckAllLineChange(e,item)}>选</Button>
                                            </div>
                                            <CheckboxGroup options={item} value={this.state.checkedList} onChange={this.onChange} />
                                        </div>
                                    )
                                })
                            }
                        </FormItem>
                    </Form>
                    {

                    }
                </Modal>
                <Modal title="关联属性"
                       visible={this.state.attrVisible}
                       width={1000}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                >
                    <div>
                        <Table pagination={false} dataSource={attrData} columns={attrColumns} />
                    </div>
                </Modal>
                <Modal title="关联地址"
                       visible={this.state.localVisible}
                       onOk={this.handleOk}
                       onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit} className="form">
                        <FormItem {...formItemLayout} label="关联地址">
                            {getFieldDecorator('link', {
                                rules: [{ required: true, message: '请输入关联地址' }],
                            })(
                                <Input placeholder="请输入关联地址" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="下单地址">
                            {getFieldDecorator('rule', {
                                rules: [{ required: false}],
                            })(
                                <Input placeholder="请选择下单地址" />
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

Produce = Form.create()(Produce);
export default Produce;

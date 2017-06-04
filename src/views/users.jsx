import React, { Component } from 'react';
import { Link } from 'react-router';
import { Table,Button,Modal,Form,Select,Input } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
        }
    };
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = () => {
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };
    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const dataSource = [{
            key: '1',
            name: '胡彦斌',
            pageCookie: 62234523678,
            almCookie: 42124142423,
            type:'123',
            status:'qe',
            rule:'qe'
        }, {
            key: '2',
            name: '胡彦祖',
            pageCookie: 42124142423,
            almCookie: 42124142423,
            type:'223',
            status:'status',
            rule:'status',
        }];

        const columns = [{
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '订单页面cookie',
            dataIndex: 'pageCookie',
            key: 'pageCookie',
        }, {
            title: '阿里妈妈cookie',
            dataIndex: 'almCookie',
            key: 'almCookie',
        },{
            title: '类型',
            dataIndex: 'type',
            key: 'type',
        },{
            title: '状态',
            dataIndex: 'status',
            key: 'status',
        },{
            title: '操作',
            key: 'handle',
            render: (text, record) => (
                <div>
                    <Link to={`/users/edit`}><Button>编辑</Button></Link>
                    <Button className="ml5">删除</Button>
                </div>
            ),
        }];
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 7 },
            wrapperCol: { span: 16 },
        };
        return (
            <div className="user">
                <div className="button-container">
                    <Button type="primary" onClick={this.showModal}>添加用户</Button>
                </div>
                <div className="clearfix">
                    <Table dataSource={dataSource} columns={columns} />
                </div>
                <Modal title="添加新用户"
                       visible={this.state.visible}
                       onOk={this.handleOk}
                       confirmLoading={this.state.confirmLoading}
                       onCancel={this.handleCancel}
                >
                    <Form onSubmit={this.handleSubmit} className="form">
                        <FormItem {...formItemLayout} label="用户名">
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input placeholder="请输入用户名" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="订单页面">
                            {getFieldDecorator('page-password', {
                                rules: [{ required: true, message: '请输入订单页面cookie' }],
                            })(
                                <Input type="password" placeholder="请输入订单页面cookie" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="阿里妈妈">
                            {getFieldDecorator('alm-password', {
                                rules: [{ required: true, message: '请输入阿里妈妈cookie' }],
                            })(
                                <Input type="password" placeholder="请输入阿里妈妈cookie" />
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="类型">
                            {getFieldDecorator('select', {
                                rules: [
                                    { required: true, message: '请选择类型' },
                                ],
                            })(
                                <Select placeholder="请选择类型">
                                    <Option value="0">店铺</Option>
                                    <Option value="1">阿里妈妈</Option>
                                    <Option value="2">小号</Option>
                                </Select>
                            )}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

Users = Form.create()(Users);
export default Users;

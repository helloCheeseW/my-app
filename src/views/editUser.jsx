import React, { Component } from 'react';
import { Link } from 'react-router';
import {Form,Button,Input } from 'antd';

const FormItem = Form.Item;

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 15 },
        };
        return (
            <div className="user-edit">
                <div>编辑</div>
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
                    <FormItem {...formItemLayout}>
                        <Button type="primary" htmlType="submit" className="ml90">更新</Button>
                        <Link to={`/users`}><Button className="ml5">取消</Button></Link>
                    </FormItem>
                </Form>
            </div>
        );
    }
}

EditUser = Form.create()(EditUser);
export default EditUser;

import React, { Component } from 'react';
import { Form, Input, Button,Select } from 'antd';
import {Link} from 'react-router';
const FormItem = Form.Item;
const Option = Select.Option;


class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
  render() {
      const { getFieldDecorator } = this.props.form;
      const formItemLayout = {
          labelCol: { span: 7 },
          wrapperCol: { span: 16 },
      };
      return (
      <div className="wrapper">
          <div className="body">
              <div className="title">Welcome</div>
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

                  <FormItem>
                      <Button type="primary" htmlType="submit" className="btn">创建</Button>
                      <div>
                          <Link to={`/users`}>操作已存在用户</Link>
                      </div>
                  </FormItem>
              </Form>
          </div>
      </div>
    );
  }
}

Login = Form.create()(Login);
export default Login;

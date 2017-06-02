import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import {Link} from 'react-router';
const FormItem = Form.Item;

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
      return (
      <div className="wrapper">
          <div className="body">
              <div className="title">Welcome</div>
              <Form onSubmit={this.handleSubmit} className="form">
                  <FormItem>
                      {getFieldDecorator('userName', {
                          rules: [{ required: true, message: '请输入用户名' }],
                      })(
                          <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入用户名" />
                      )}
                  </FormItem>
                  <FormItem>
                      {getFieldDecorator('password', {
                          rules: [{ required: true, message: '请输入密码' }],
                      })(
                          <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
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

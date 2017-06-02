import React, { Component } from 'react';
import { Table,Button,Modal } from 'antd';


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
            age: 32,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '胡彦祖',
            age: 42,
            address: '西湖区湖底公园1号'
        }];

        const columns = [{
            title: '用户名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'cookie密码',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: 'cookie密码',
            dataIndex: 'address',
            key: 'address',
        }];
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
                    <p>123</p>
                </Modal>
            </div>
        );
    }
}

export default Users;

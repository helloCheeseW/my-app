import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;

class LayoutNav extends Component{
    render(){
        return(
            <div>
                <Layout>
                    <Header style={{ position: 'fixed', width: '100%' }}>
                        <div className="logo" />
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}>
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64, height:'100%' }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            {this.props.children}
                        </div>
                    </Content>

                </Layout>
            </div>
        )
    }
}

export default LayoutNav;
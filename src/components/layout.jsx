import React, { Component } from 'react';
import lodash from 'lodash';
import jquery from 'jquery';
import classNames from 'classnames';
import { Icon } from 'antd';
import { Link } from 'react-router';
window._ = lodash;
window.$ = jquery;

class LayoutNav extends Component{
    render(){
        const pathname=this.props.location.pathname;
        return(
            <div>
                <header className="header">

                </header>

                <main className="main">
                    <div className="menu">
                        <ul>
                            <li className={classNames({'active':pathname.indexOf('/users')>=0})}>
                                <Link to={`/users`}><Icon type="user"/> 用户管理</Link>
                            </li>
                            <li className={classNames({'active':pathname.indexOf('/produce')>=0})}>
                                <Link to={`/produce`}><Icon type="menu-unfold" /> 商品关联</Link>
                            </li>
                            <li className={classNames({'active':pathname.indexOf('/order')>=0})}>
                                <Link to={`/order`}><Icon type="shopping-cart" />  订单管理</Link>
                            </li>
                            <li className={classNames({'active':pathname.indexOf('/buy')>=0})}>
                                <Link to={`/buy`}><Icon type="credit-card" />  自助下单</Link>
                            </li>
                            <li className={classNames({'active':pathname.indexOf('/monitor')>=0})}>
                                <Link to={`/monitor`}><Icon type="desktop" />  价格监控</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        <div className="container">
                            {this.props.children}
                        </div>
                    </div>
                </main>
            </div>

        )
    }
}

export default LayoutNav;
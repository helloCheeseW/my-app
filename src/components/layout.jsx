import React, { Component } from 'react';
import classNames from 'classnames';
import { Icon } from 'antd';
import { Link } from 'react-router';

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
                                <Link to={`/produce`}><Icon type="user"/> 用户管理</Link>
                            </li>
                            <li className={classNames({'active':pathname.indexOf('/buy')>=0})}>
                                <Link to={`/buy`}><Icon type="user"/> 用户管理</Link>
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
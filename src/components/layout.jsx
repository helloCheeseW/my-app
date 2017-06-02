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
                            <li className={classNames({'active':pathname.indexOf('/circle/dynamic/relation/')>=0})}>
                                <Link to={`/data`}><Icon type="user"/> 用户管理</Link>
                            </li>
                            <li className={classNames({'active':pathname.indexOf('/circle/dynamic/config/')>=0})}>
                                <Link to={`/date`}><Icon type="user"/> 用户管理</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="content">
                        {this.props.children}
                    </div>
                </main>
            </div>

        )
    }
}

export default LayoutNav;
import React from 'react'
import '../static/styles/components/header.css'
import { Row, Col, Icon, Menu } from 'antd'
import { YoutubeOutlined, BankOutlined, SkinOutlined } from '@ant-design/icons';

const Header = () => {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">doudoubeier</span>
                    <span className="header-text">冲冲冲</span>
                </Col>
                <Col className="menu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <BankOutlined />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <YoutubeOutlined />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <SkinOutlined />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header
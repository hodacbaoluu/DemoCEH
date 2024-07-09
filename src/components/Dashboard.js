import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Card, Row, Col } from 'antd';
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from '@ant-design/icons';
import '../styles/App.scss'; 

const { Header, Content, Sider } = Layout;

class Dashboard extends Component {
  render() {
    const { user } = this.props;

    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Profile</Menu.Item>
            <Menu.Item key="3">Settings</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <Menu.Item key="1" icon={<UserOutlined />}>
                Users
              </Menu.Item>
              <Menu.Item key="2" icon={<LaptopOutlined />}>
                Devices
              </Menu.Item>
              <Menu.Item key="3" icon={<NotificationOutlined />}>
                Notifications
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <div className="dashboard-container">
                <Row gutter={[16, 16]}>
                  <Col span={24}>
                    <Card className="welcome-card" title="WEB DEMO XIN CHÀO">
                      {user ? (
                        <p>Welcome, {user.username}!</p>
                      ) : (
                        <p>Please login</p>
                      )}
                    </Card>
                  </Col>
                </Row>
                <Row gutter={[16, 16]} className="statistic-card">
                  <Col span={8}>
                    <Card title="Chiến lược">Nội dung 1</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Mục đích 2">Nội dung 2</Card>
                  </Col>
                  <Col span={8}>
                    <Card title="Kết quả 3">Nội dung 3</Card>
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);



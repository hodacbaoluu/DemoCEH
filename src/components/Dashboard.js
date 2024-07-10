import React from 'react';
import { Layout, Menu, Avatar, Card, Row, Col, Statistic, Divider, Table, Badge, Carousel, Image, Tooltip, Progress, List, Breadcrumb, Typography, FloatButton } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, AreaChartOutlined, PieChartOutlined, SettingOutlined, TeamOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import '../styles/Dashboard.scss';

const { Content, Sider, Header, Footer } = Layout;
const { Paragraph, Title } = Typography;

const dataSource = [
  {
    key: '1',
    name: 'Device 1',
    status: 'Active',
  },
  {
    key: '2',
    name: 'Device 2',
    status: 'Inactive',
  },
  {
    key: '3',
    name: 'Device 3',
    status: 'Active',
  },
];

const columns = [
  {
    title: 'Device Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: status => (
      <Badge status={status === 'Active' ? 'success' : 'error'} text={status} />
    ),
  },
];

const NewDashboard = ({ user }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu mode="inline" defaultSelectedKeys={['1']} style={{ height: '100%', borderRight: 0 }}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            Users
          </Menu.Item>
          <Menu.Item key="2" icon={<LaptopOutlined />}>
            Devices
          </Menu.Item>
          <Menu.Item key="3" icon={<NotificationOutlined />}>
            Notifications
          </Menu.Item>
          <Menu.Item key="4" icon={<AreaChartOutlined />}>
            Analytics
          </Menu.Item>
          <Menu.Item key="5" icon={<PieChartOutlined />}>
            Reports
          </Menu.Item>
          <Menu.Item key="6" icon={<TeamOutlined />}>
            Teams
          </Menu.Item>
          <Menu.Item key="7" icon={<SettingOutlined />}>
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div className="site-layout-background" style={{ padding: 24 }}>
            <Row gutter={16}>
              <Col span={8}>
                <Card bordered={false}>
                  <Statistic title="Active Users" value={1128} valueStyle={{ color: '#3f8600' }} />
                </Card>
              </Col>
              <Col span={8}>
                <Card bordered={false}>
                  <Statistic title="Inactive Users" value={93} valueStyle={{ color: '#cf1322' }} />
                </Card>
              </Col>
              <Col span={8}>
                <Card bordered={false}>
                  <Statistic title="Total Devices" value={1128} valueStyle={{ color: '#1890ff' }} />
                </Card>
              </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Device List" bordered={false}>
                  <Table dataSource={dataSource} columns={columns} pagination={false} />
                </Card>
              </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
              <Col span={12}>
                <Card title="Project Progress" bordered={false}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <Progress type="circle" percent={75} />
                      <Title level={5}>Project A</Title>
                    </Col>
                    <Col span={12}>
                      <Progress type="circle" percent={50} />
                      <Title level={5}>Project B</Title>
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col span={12}>
                <Card title="Notifications" bordered={false}>
                  <List
                    itemLayout="horizontal"
                    dataSource={[
                      { title: 'Notification 1', description: 'Content of Notification 1' },
                      { title: 'Notification 2', description: 'Content of Notification 2' },
                      { title: 'Notification 3', description: 'Content of Notification 3' },
                    ]}
                    renderItem={item => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar icon={<NotificationOutlined />} />}
                          title={item.title}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
            <Divider />
            <Row gutter={16}>
              <Col span={24}>
                <Card title="Image product" bordered={false}>
                  <Carousel autoplay>
                    <div>
                      <Image src="https://i.pravatar.cc?u=1" />
                    </div>
                    <div>
                      <Image src="https://i.pravatar.cc?u=2" />
                    </div>
                    <div>
                      <Image src="https://i.pravatar.cc?u=13" />
                    </div>
                    <div>
                      <Image src="https://i.pravatar.cc?u=12" />
                    </div>
                  </Carousel>
                </Card>
              </Col>
            </Row>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Dashboard ©2024 Created by HDBLuu</Footer>
      </Layout>
      <FloatButton
        shape="circle"
        type="primary"
        style={{ right: 80 }}
        icon={<CustomerServiceOutlined />}
      />
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(NewDashboard);

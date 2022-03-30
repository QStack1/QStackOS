import React, { useState } from 'react';
import './index.css';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';
import Iframe from 'react-iframe';

const { Header, Content, Sider } = Layout;

const Home = () => {
  const [url, setUrl] = useState('http://localhost:1212/');
  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="main-box" style={{ width: '100%', display: 'flex' }}>
            <div style={{ width: '40%' }}>Test Results</div>
            <div style={{ width: '50%', display: 'flex', margin: 'auto' }}>
              <ReloadOutlined
                style={{ fontSize: '25px' }}
                onClick={() => console.log('logggggged')}
              />
              <Input
                style={{ marginLeft: '15px', height: '40px' }}
                placeholder="Please Enter Url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
            <div style={{ width: '10%' }}>
              {`${window.innerWidth} x ${window.innerHeight}`}
            </div>
          </div>
        </Header>
        <Layout>
          <Sider
            width={400}
            style={{ border: '1px solid gray' }}
            className="site-layout-background"
          >
            <div
              style={{
                textAliign: 'center',
                color: 'black',
                fontWeight: 'bold',
              }}
            >
              Tests
            </div>
          </Sider>
          <Layout style={{ padding: '0 24px 24px', marginTop: '15px' }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Iframe
                url={url}
                width="100%"
                height="650px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative"
              />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default Home;

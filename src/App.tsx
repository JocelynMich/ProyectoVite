import React, {useState } from "react";;
import { Button, Layout, Menu} from "antd";
import { UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import TablaProductos from "./tabla/tablaProductos";
import TablaUsuarios from "./tabla/tablaUsuarios";
import TablaSesiones from "./tabla/tablaSesiones";
import TablaGenero from "./tabla/tablaGenero";
import TablaDireccion from "./tabla/tablaDireccion";
import TablaCliente from "./tabla/tablaClientes";
import TablaCategorias from "./tabla/tablaCategorias";
import TablaSesionesProductos from "./tabla/tablaSesionesProductos";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  const [collapsed, setCollapsed] = useState(false);

  const handleMenuClick = (item: any) => {
    setSelectedKey(item.key);
  };

  const renderContent = () => {
        switch (selectedKey) {
      case '1':
        return <TablaCategorias />;
        break;
      case '2':
        return <TablaCliente />;
        break;
      case '3':
        return <TablaDireccion />;
        break;
      case '4':
        return <TablaGenero />; break;
      case '5':
        return <TablaProductos />; break;
      case '6':
        return <TablaSesiones />; break;
      case '7':
        return <TablaSesionesProductos />; break;
      case '8':
        return <TablaUsuarios />; break;
      default:
        return null;
    }
  };


  const colorBgContainer = '#f0f2f5'; // Color de fondo del área de contenido
  const borderRadiusLG = '8px'; // Radio de borde grande

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={handleMenuClick}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>Categorías</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>Clientes</Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>Dirección</Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>Género</Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}>Productos</Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}>Sesiones</Menu.Item>
          <Menu.Item key="7" icon={<UserOutlined />}>SesionesProductos</Menu.Item>
          <Menu.Item key="8" icon={<UserOutlined />}>Usuarios</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {renderContent()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
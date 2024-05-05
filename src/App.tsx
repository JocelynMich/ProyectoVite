import React, { useEffect, useState } from "react";
import { getProductos } from "./services/productos";
import { getCategorias } from "./services/categorias";
import { getCliente } from "./services/clientes";
import { getDireccion } from "./services/direccion";
import { getGenero } from "./services/genero";
import { getSesionProductos } from "./services/sesiones_productos";
import { getSesiones } from "./services/sesiones";
import { getUsuarios } from "./services/usuarios";
import { Table } from "antd";
import { Layout,Menu,MenuProps } from "antd";
import { DesktopOutlined, TableOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: 'products', label: 'Productos', icon: <TableOutlined /> },
  { key: 'users', label: 'Usuarios', icon: <TableOutlined /> },
  { key: 'sessions', label: 'Sesiones', icon: <TableOutlined /> },
  { key: 'gender', label: 'Generos', icon: <TableOutlined /> },
  { key: 'direction', label: 'Direcciones', icon: <TableOutlined /> },
  { key: 'clients', label: 'Clientes', icon: <TableOutlined /> },
  { key: 'category', label: 'Categorias', icon: <TableOutlined /> },
  { key: 'sessionproduct', label: 'Sesiones de Productos', icon: <TableOutlined /> },
];

const App: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData;
        switch (selectedOption) {
          case 'products':
            fetchedData = await getProductos();
            break;
          case 'users':
            fetchedData = await getUsuarios();
            break;
          case 'sessions':
            fetchedData = await getSesiones();
            break;
            case 'gender':
              fetchedData = await getGenero();
              break;
            case 'direction':
              fetchedData = await getDireccion();
              break;
            case 'clients':
              fetchedData = await getCliente();
              break;
            case 'category':
              fetchedData = await getCategorias();
              break;
            case 'sessionproduct':
              fetchedData = await getSesionProductos();
              break;
          default:
            fetchedData = [];
        }
        setData(fetchedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (selectedOption) {
      fetchData();
    }
  }, [selectedOption]);

  const handleMenuClick = (selected: { key: string }) => {
    setSelectedOption(selected.key);
  };

  const columns = {
    products:[   
      {
      title: 'ID_Producto',
      dataIndex: 'id_producto',
      key: 'id_Producto',
      
    },
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },

    {
      title: 'Descripcion',
      dataIndex: 'descripcion',
      key: 'descripcion',
    },

    {
      title: 'Precio',
      dataIndex: 'precio',
      key: 'precio',
    },

    {
      title: 'ID_Categoria',
      dataIndex: 'idcategoria',
      key: 'idcategoria',
    },

    {
      title: 'FechaCreacion',
      dataIndex: 'fechacreacion',
      key: 'fechacreacion',
    },

    {
      title: 'fk_CreadoPor',
      dataIndex: 'fk_creadopor',
      key: 'fk_creadopor',
    },
    {
      title: 'FechaActu',
      dataIndex: 'fechaactualizacion',
      key: 'fechaactualizacion',
    },

    {
      title: 'fk_ActualizadoPor',
      dataIndex: 'fk_actualizadopor',
      key: 'fk_actualizadopor',
    },

    {
      title: 'FechaEliminado',
      dataIndex: 'fechaeliminacion',
      key: 'fechaeliminacion',
    },

    {
      title: 'fk_EliminadoPor',
      dataIndex: 'fk_eliminadopor',
      key: 'fk_eliminadopor',
    }],

    sessions:[   
      {
      title: 'ID_Sesion',
      dataIndex: 'id_sesion',
      key: 'id_sesion',
      
    },
    {
      title: 'Fecha_Sesion',
      dataIndex: 'fecha_sesion',
      key: 'fecha_sesion',
    },

    {
      title: 'Hora_Sesion',
      dataIndex: 'hora_sesion',
      key: 'hora_sesion',
    },

    {
      title: 'ID_Cliente',
      dataIndex: 'idcliente',
      key: 'idcliente',
    },

    {
      title: 'Fecha_Venta',
      dataIndex: 'fechaventa',
      key: 'fechaventa',
    },

    {
      title: 'FechaCreacion',
      dataIndex: 'fechacreacion',
      key: 'fechacreacion',
    },

    {
      title: 'fk_CreadoPor',
      dataIndex: 'fk_creadopor',
      key: 'fk_creadopor',
    },
    {
      title: 'FechaActu',
      dataIndex: 'fechaactualizacion',
      key: 'fechaactualizacion',
    },

    {
      title: 'fk_ActualizadoPor',
      dataIndex: 'fk_actualizadopor',
      key: 'fk_actualizadopor',
    },

    {
      title: 'FechaEliminado',
      dataIndex: 'fechaeliminacion',
      key: 'fechaeliminacion',
    },

    {
      title: 'fk_EliminadoPor',
      dataIndex: 'fk_eliminadopor',
      key: 'fk_eliminadopor',
    }],

    direction:[   
      {
      title: 'ID_Direccion',
      dataIndex: 'id_direccion',
      key: 'id_direccion',
      
    },
    {
      title: 'Codigo_Postal',
      dataIndex: 'codigopostal',
      key: 'codigopostal',
    },

    {
      title: 'Calle',
      dataIndex: 'calle',
      key: 'calle',
    },

    {
      title: 'Num_Exterior',
      dataIndex: 'numext',
      key: 'numext',
    },

    {
      title: 'Num_Interior',
      dataIndex: 'numint',
      key: 'numint',
    },

    {
      title: 'Ciudad',
      dataIndex: 'ciudad',
      key: 'ciudad',
    },

    {
      title: 'FechaCreacion',
      dataIndex: 'fechacreacion',
      key: 'fechacreacion',
    },
    {
      title: 'fk_CreadoPor',
      dataIndex: 'fk_creadopor',
      key: 'fk_creadopor',
    },

    {
      title: 'FechaActu',
      dataIndex: 'fechaact',
      key: 'fechaact',
    },

    {
      title: 'fk_ActualizadoPor',
      dataIndex: 'fk_actualizadopor',
      key: 'fk_actualizadopor',
    },

    {
      title: 'FechaEliminado',
      dataIndex: 'fechaeliminado',
      key: 'fechaeliminado',
    },
    {
    title: 'fk_EliminadoPor',
    dataIndex: 'fk_eliminadopor',
    key: 'fk_eliminadopor',
  }
  ],

  clients:[   
    {
    title: 'ID_Cliente',
    dataIndex: 'id_cliente',
    key: 'id_cliente',
    
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },

  {
    title: 'Apellido',
    dataIndex: 'apellido',
    key: 'apellido',
  },
  {
    title: 'Fecha_Nacimiento',
    dataIndex: 'fechanac',
    key: 'fechanac',
  },

  {
    title: 'ID_Genero',
    dataIndex: 'idgenero',
    key: 'idgenero',
  },

  {
    title: 'Telefono',
    dataIndex: 'telefono',
    key: 'telefono',
  },

  {
    title: 'Correo',
    dataIndex: 'correo',
    key: 'correo',
  },

  {
    title: 'ID_Direccion',
    dataIndex: 'iddireccion',
    key: 'iddireccion',
  },
  {
    title: 'FechaCreacion',
    dataIndex: 'fechacreacion',
    key: 'fechacreacion',
  },

  {
    title: 'fk_CreadoPor',
    dataIndex: 'fk_creadopor',
    key: 'fk_creadopor',
  },

  {
    title: 'FechaActu',
    dataIndex: 'fechaactualizacion',
    key: 'fechaactualizacion',
  },

  {
    title: 'fk_ActualizadoPor',
    dataIndex: 'fk_actualizadopor',
    key: 'fk_actualizadopor',
  },
  {
  title: 'FechaEliminado',
  dataIndex: 'fechaeliminacion',
  key: 'fechaeliminacion',
},
{
  title: 'fk_EliminadoPor',
  dataIndex: 'fk_eliminadopor',
  key: 'fk_eliminadopor',
}
],
 category:[   
  {
  title: 'ID_Categoria',
  dataIndex: 'id_categoria',
  key: 'id_categoria',
  
},
{
  title: 'Nombre',
  dataIndex: 'nombre',
  key: 'nombre',
},

{
  title: 'FechaCreacion',
  dataIndex: 'fechacreacion',
  key: 'fechacreacion',
},

{
  title: 'fk_CreadoPor',
  dataIndex: 'fk_creadopor',
  key: 'fk_creadopor',
},

{
  title: 'FechaActu',
  dataIndex: 'fechaactualizacion',
  key: 'fechaactualizacion',
},

{
  title: 'fk_ActualizadoPor',
  dataIndex: 'fk_actualizadopor',
  key: 'fk_actualizadopor',
},

{
  title: 'FechaEliminado',
  dataIndex: 'fechaeliminacion',
  key: 'fechaeliminacion',
},
{
  title: 'fk_EliminadoPor',
  dataIndex: 'fk_eliminadopor',
  key: 'fk_eliminadopor',
}],

gender:[   
  {
  title: 'ID_Genero',
  dataIndex: 'id_genero',
  key: 'id_genero',
  
},
{
  title: 'Genero',
  dataIndex: 'genero',
  key: 'genero',
},

{
  title: 'FechaCreacion',
  dataIndex: 'fechacreacion',
  key: 'fechacreacion',
},

{
  title: 'fk_CreadoPor',
  dataIndex: 'fk_creadopor',
  key: 'fk_creadopor',
},

{
  title: 'FechaActu',
  dataIndex: 'fechaact',
  key: 'fechaact',
},

{
  title: 'fk_ActualizadoPor',
  dataIndex: 'fk_actualizadopor',
  key: 'fk_actualizadopor',
},

{
  title: 'FechaEliminado',
  dataIndex: 'fechaeliminado',
  key: 'fechaeliminado',
},
{
  title: 'fk_EliminadoPor',
  dataIndex: 'fk_eliminadopor',
  key: 'fk_eliminadopor',
}],

users:[   
  {
  title: 'ID_Usuario',
  dataIndex: 'id_usuario',
  key: 'id_usuario',
  
},
{
  title: 'Nombre',
  dataIndex: 'nombre',
  key: 'nombre',
},

{
  title: 'FechaCreacion',
  dataIndex: 'fechacreacion',
  key: 'fechacreacion',
},

{
  title: 'fk_CreadoPor',
  dataIndex: 'fk_creadopor',
  key: 'fk_creadopor',
},

{
  title: 'FechaActu',
  dataIndex: 'fechaactu',
  key: 'fechaactu',
},

{
  title: 'fk_ActualizadoPor',
  dataIndex: 'fk_actualizadopor',
  key: 'fk_actualizadopor',
},

{
  title: 'FechaEliminado',
  dataIndex: 'fechaeliminado',
  key: 'fechaeliminado',
},
{
  title: 'fk_EliminadoPor',
  dataIndex: 'fk_eliminadopor',
  key: 'fk_eliminadopor',
}],

sessionproduct:[   
  {
  title: 'ID_Sesion',
  dataIndex: 'idsesion',
  key: 'idsesion',
  
},
{
  title: 'ID_Producto',
  dataIndex: 'idproducto',
  key: 'idproducto',
},

{
  title: 'Cantidad',
  dataIndex: 'cantidad',
  key: 'cantidad',
}
],
   
    
  }

  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['products']} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: '#001529', color: '#fff', textAlign: 'center' }}>Header</Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            <Table columns={columns[selectedOption || 'products']} dataSource={data} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
export default App;
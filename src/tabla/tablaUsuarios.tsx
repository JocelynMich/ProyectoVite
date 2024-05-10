import React, { useEffect, useState } from "react";
import { getUsuarios } from "../services/usuarios";
import { Table, Drawer, Button, Form, Input } from "antd";
import { User } from "../models/user";
import DrawerFooter from "./DrawerFooter";


const TablaUsuarios: React.FC = () => {
  const [users, setUser] = useState<User[]>([]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getUsuarios();
        setUser(user);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchUser();
  }, []);

  const columns = [
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
      }
  ];

  return (
    <>
     <Button type="primary" onClick={showDrawer}>
        Agregar usuario
      </Button>
      <Table columns={columns} dataSource={users}/>
      <Drawer title="Agregar Usuarios" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<User>
            label="ID_Usuario"
            name="ID_Usuario"
            rules={[{ required: true, message: "Agrega el ID del usuario" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<User>
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: "Agrega el nombre" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<User>
            label="FechaCreacion"
            name="FechaCreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<User>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<User>
            label="FechaActu"
            name="FechaActu"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<User>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<User>
            label="FechaEliminado"
            name="FechaEliminado"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<User>
            label="fk_EliminadoPor"
            name="fk_EliminadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>

    </>
  );
}

export default TablaUsuarios;
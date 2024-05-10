import React, { useEffect, useState } from "react";
import { getCliente } from "../services/clientes";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Client } from "../models/client";
import DrawerFooter from "./DrawerFooter";


const TablaCliente: React.FC = () => {
  const [clients, setCliente] = useState<Client[]>([]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientes = await getCliente();
        setCliente(clientes);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchClients();
  }, []);

  const columns = [
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
  ];

  return (
    <>
    <Button type="primary" onClick={showDrawer}>
        Agregar cliente
      </Button>
      <Table columns={columns} dataSource={clients}
      />
   <Drawer title="Agregar Cliente" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<Client>
            label="ID_Cliente"
            name="ID_Cliente"
            rules={[{ required: true, message: "Agrega el ID" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: "Agrega el nombre" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="Apellido"
            name="Apellido"
            rules={[{ required: true, message: "Agrega el apellido" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="Fecha_Nacimiento"
            name="Fecha_Nacimiento"
            rules={[{ required: true, message: "Agrega fecha de nacimiento" }]}
          >
            <Input />
          </Form.Item>
          
          <Form.Item<Client>
            label="ID_Genero"
            name="ID_Genero"
            rules={[{ required: true, message: "Agrega ID de Genero" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="Telefono"
            name="Telefono"
            rules={[{ required: true, message: "Agrega número de telefono" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="Correo"
            name="Correo"
            rules={[{ required: true, message: "Agrega correo electrónico" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="ID_Direccion"
            name="ID_Direccion"
            rules={[{ required: true, message: "Agrega ID de la dirección" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="FechaCreacion"
            name="FechaCreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="FechaActu"
            name="FechaActu"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
            label="FechaEliminado"
            name="FechaEliminado"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Client>
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

export default TablaCliente;
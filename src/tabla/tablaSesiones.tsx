import React, { useEffect, useState } from "react";
import { getSesiones } from "../services/sesiones";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Session } from "../models/session";
import DrawerFooter from "./DrawerFooter";


const TablaSesiones: React.FC = () => {
  const [session, setSessions] = useState<Session[]>([]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSesiones();
        setSessions(session);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchSession();
  }, []);

  const columns = [
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
      }
  ];

  return (
    <>
     <Button type="primary" onClick={showDrawer}>
        Agregar sesiones
      </Button>
      <Table columns={columns} dataSource={session}/>
      <Drawer title="Agregar Sesiones" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<Session>
            label="ID_Sesion"
            name="ID_Sesion"
            rules={[{ required: true, message: "Agrega el ID de la sesión" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="Fecha_Sesion"
            name="Fecha_Sesion"
            rules={[{ required: false}]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="Hora_Sesion"
            name="Hora_Sesion"
            rules={[{ required: false}]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="ID_Cliente"
            name="ID_Cliente"
            rules={[{ required: true, message: "Agrega ID de la sesión" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="Fecha_Venta"
            name="Fecha_Venta"
            rules={[{ required: true, message: "Agrega fecha de la venta" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="FechaCreacion"
            name="FechaCreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="FechaActu"
            name="FechaActu"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
            label="FechaEliminado"
            name="FechaEliminado"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Session>
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

export default TablaSesiones;
import React, { useEffect, useState } from "react";
import { getDireccion } from "../services/direccion";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Direction } from "../models/direction";
import DrawerFooter from "./DrawerFooter";


const TablaDireccion: React.FC = () => {
  const [direction, setDirection] = useState<Direction[]>([]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchDirection = async () => {
      try {
        const direction = await getDireccion();
        setDirection(direction);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchDirection();
  }, []);

  const columns = [
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
  ];

  return (
    <>
     <Button type="primary" onClick={showDrawer}>
        Agregar dirección
      </Button>
      <Table columns={columns} dataSource={direction}
      />
        <Drawer title="Agregar Categoria" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<Direction>
            label="ID_Direccion"
            name="ID_Direccion"
            rules={[{ required: true, message: "Agrega el ID" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="Codigo_Postal"
            name="Codigo_Postal"
            rules={[{ required: true, message: "Agrega el código postal" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="Calle"
            name="Calle"
            rules={[{ required: true, message: "Agrega la calle" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="Num_Exterior"
            name="Num_Exterior"
            rules={[{ required: true, message: "Agrega el número exterior" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="Num_Interior"
            name="Num_Interior"
            rules={[{ required: true, message: "Agrega el número interior" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="Ciudad"
            name="Ciudad"
            rules={[{ required: true, message: "Agrega la ciudad" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="FechaCreacion"
            name="FechaCreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="FechaActu"
            name="FechaActu"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
            label="FechaEliminado"
            name="FechaEliminado"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Direction>
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

export default TablaDireccion;
import React, { useEffect, useState } from "react";
import { getGenero } from "../services/genero";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Gender } from "../models/gender";
import DrawerFooter from "./DrawerFooter";

const TablaGenero: React.FC = () => {
  const [gender, setGender] = useState<Gender[]>([]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchGender = async () => {
      try {
        const gender = await getGenero();
        setGender(gender);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchGender();
  }, []);

  const columns = [
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
      }
  ];

  return (
    <>
     <Button type="primary" onClick={showDrawer}>
        Agregar genero
      </Button>
      <Table columns={columns} dataSource={gender}/>
      <Drawer title="Agregar Categoria" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<Gender>
            label="ID_Genero"
            name="ID_Genero"
            rules={[{ required: true, message: "Agrega el ID" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Gender>
            label="Genero"
            name="Genero"
            rules={[{ required: true, message: "Agrega el género" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Gender>
            label="FechaCreacion"
            name="FechaCreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Gender>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Gender>
            label="FechaActu"
            name="FechaActu"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Gender>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Gender>
            label="FechaEliminado"
            name="FechaEliminado"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Gender>
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

export default TablaGenero;
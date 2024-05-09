import React, { useEffect, useState } from "react";
import { getCategorias } from "../services/categorias";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Category } from "../models/category";
import DrawerFooter from "./DrawerFooter";

const TablaCategorias: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categories = await getCategorias();
        setCategory(categories);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchCategory();
  }, []);

  const columns = [
    {
      title: "ID_Categoria",
      dataIndex: "id_categoria",
      key: "id_categoria",
    },
    {
      title: "Nombre",
      dataIndex: "nombre",
      key: "nombre",
    },

    {
      title: "FechaCreacion",
      dataIndex: "fechacreacion",
      key: "fechacreacion",
    },

    {
      title: "fk_CreadoPor",
      dataIndex: "fk_creadopor",
      key: "fk_creadopor",
    },

    {
      title: "FechaActu",
      dataIndex: "fechaactualizacion",
      key: "fechaactualizacion",
    },

    {
      title: "fk_ActualizadoPor",
      dataIndex: "fk_actualizadopor",
      key: "fk_actualizadopor",
    },

    {
      title: "FechaEliminado",
      dataIndex: "fechaeliminacion",
      key: "fechaeliminacion",
    },
    {
      title: "fk_EliminadoPor",
      dataIndex: "fk_eliminadopor",
      key: "fk_eliminadopor",
    },
  ];

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Agregar categoria +
      </Button>
      <Table columns={columns} dataSource={category} />
      <Drawer title="Agregar Categoria" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<Category>
            label="ID_Categoria"
            name="ID_Categoria"
            rules={[{ required: true, message: "Agrega el ID" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Category>
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: "Agrega el nombre" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Category>
            label="FechaCreacion"
            name="FechaCreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Category>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Category>
            label="FechaActu"
            name="FechaActu"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Category>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Category>
            label="FechaEliminado"
            name="FechaEliminado"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Category>
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
};

export default TablaCategorias;

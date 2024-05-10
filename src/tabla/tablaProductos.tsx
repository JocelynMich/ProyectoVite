import React, { useEffect, useState } from "react";
import { getProductos } from "../services/productos";
import { Table, Drawer, Button, Form, Input } from "antd";
import { Product } from "../models/product";
import DrawerFooter from "./DrawerFooter";


const TablaProductos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProductos();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const columns = [
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
    }
  ];

  return (
    <>
     <Button type="primary" onClick={showDrawer}>
        Agregar producto
      </Button>
      <Table columns={columns} dataSource={products}/>
      <Drawer title="Agregar Categoria" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<Product>
            label="ID_Producto"
            name="ID_Producto"
            rules={[{ required: true, message: "Agrega el ID del producto" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: "Agrega el nombre del producto" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="Descripcion"
            name="Descripcion"
            rules={[{ required: true, message: "Agrega la descripción del producto" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="Precio"
            name="Precio"
            rules={[{ required: true, message: "Agrega el precio" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="ID_Categoria"
            name="ID_Categoria"
            rules={[{ required: true, message: "Agrega el ID de la categoria del producto" }]}
          >
            <Input />
          </Form.Item>


          <Form.Item<Product>
            label="FechaCreacion"
            name="FechaCreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="FechaActu"
            name="FechaActu"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
            label="FechaEliminado"
            name="FechaEliminado"
            rules={[{ required: false }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<Product>
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

export default TablaProductos;
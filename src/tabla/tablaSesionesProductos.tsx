import React, { useEffect, useState } from "react";
import { getSesionProductos } from "../services/sesiones_productos";
import { Table, Drawer, Button, Form, Input } from "antd";
import { SessionProduct } from "../models/session_product";
import DrawerFooter from "./DrawerFooter";


const TablaSesionesProductos: React.FC = () => {
  const [session_product, setSessionProduct] = useState<SessionProduct[]>([]);

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchSessionProduct = async () => {
      try {
        const session_product = await getSesionProductos();
        setSessionProduct(session_product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchSessionProduct();
  }, []);

  const columns = [
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
  ];

  return (
    <>
     <Button type="primary" onClick={showDrawer}>
        Agregar sesiones productos
      </Button>
      <Table columns={columns} dataSource={session_product}/>
      <Drawer title="Agregar Sesiones Productos" onClose={onClose} open={open} footer={<DrawerFooter/>}>
        <Form>
          <Form.Item<SessionProduct>
            label="ID_Sesion"
            name="ID_Sesion"
            rules={[{ required: true, message: "Agrega el ID de la sesión" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<SessionProduct>
            label="ID_Producto"
            name="ID_Producto"
            rules={[{ required: true, message: "Agrega el ID del producto" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<SessionProduct>
            label="Cantidad"
            name="Cantidad"
            rules={[{ required: true, message: "Agrega cantidad del producto" }]}
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

export default TablaSesionesProductos;
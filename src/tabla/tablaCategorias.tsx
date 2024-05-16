import React, { useEffect, useState } from "react";
import { getCategorias } from "../services/categorias";
import { createCategoria } from "../services/categorias";
import { Table, Drawer, Button, Form, Input} from "antd";
import { Category } from "../models/category";
import DrawerFooter from "./DrawerFooter";
import supabase from "../utils/supabase";

const TablaCategorias: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState<string>('');
 

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
        console.error("Error fetching categorias:", error);
      }
    };

    fetchCategory();
  }, []);

  const handleSubmit = async () => {
  const randomID =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;

    try {
      const currentDateTime = new Date();
      const maxIdResponse = await supabase
        .from("categorias")
        .select("id_categoria")
        .order("id_categoria", { ascending: false })
        .limit(1);

        const maxId = maxIdResponse.data?.[0]?.id_categoria || 0;
        const newId = maxId + 1;
      // Crear el objeto de dirección con el nuevo ID
      const categoryInput: Category = {
        id_categoria: newId,
        nombre,
        fechacreacion:currentDateTime,
        fk_creadopor:randomID
      };
  
      await createCategoria(categoryInput);
  
      const updateCategory = await getCategorias();
      setCategory(updateCategory);
      onClose();
    } catch (error) {
      console.error("Error creating categorias:", error);
    }
  };

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
        Agregar categoria
      </Button>
      <Table columns={columns} dataSource={category} />
      <Drawer title="Agregar Categoría" onClose={onClose} open={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>     
      <Form onFinish={handleSubmit}>
          <Form.Item<Category>
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Agrega el nombre" }]}
          >
  <Input value={nombre} onChange={(e) => setNombre(e.target.value)} />          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default TablaCategorias;

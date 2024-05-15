import React, { useEffect, useState } from "react";
import { getCategorias } from "../services/categorias";
import { createCategoria } from "../services/categorias";
import { Table, Drawer, Button, Form, Input, InputNumber, DatePicker  } from "antd";
import { Category } from "../models/category";
import DrawerFooter from "./DrawerFooter";
import type { InputNumberProps } from 'antd';
import type { DatePickerProps } from 'antd';


const TablaCategorias: React.FC = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);
  const [ID_Categoria, setIDCategoria] = useState<number>(0);
  const [Nombre, setNombre] = useState<string>('');
  const [fechacreacion, setFechaCreacion] = useState<Date>(new Date());
  const [fk_CreadoPor, setfk_CreadoPor] = useState<number>(0);
  const [fechaactualizacion, setFechaActu] = useState<Date>(new Date());
  const [fk_ActualizadoPor, setfk_ActualizadoPor] = useState<number>(0);
  const [fechaeliminacion, setFechaEliminado] = useState<Date>(new Date());
  const [fk_EliminadoPor, setfk_EliminadoPor] = useState<number>(0);


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

  const onChange: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setIDCategoria(value);
    } else {
      setIDCategoria(0);
    }
  };

  const onChangefkCreado: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setfk_CreadoPor(value);
    } else {
      setfk_CreadoPor(0);
    }
  };

  const onChangefkActualizado: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setfk_ActualizadoPor(value);
    } else {
      setfk_ActualizadoPor(0);
    }
  };

  const onChangefkEliminado: InputNumberProps['onChange'] = (value) => {
    if (value !== null && typeof value === 'number') {
      setfk_EliminadoPor(value);
    } else {
      setfk_EliminadoPor(0);
    }
  };

  const handleSubmit = async () => {
    try {
      await createCategoria({
        ID_Categoria,
        Nombre,
        fechacreacion,
        fk_CreadoPor,
        fechaactualizacion,
        fk_ActualizadoPor,
        fechaeliminacion,
        fk_EliminadoPor
         }); 
      const updateCategorias = await getCategorias();
      setCategory(updateCategorias);
      onClose(); // Cierra el Drawer después de crear el usuario
    } catch (error) {
      console.error("Error creating categorias:", error);
    }
    
  };


  

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Agregar categoria
      </Button>
      <Table columns={columns} dataSource={category} />
      <Drawer title="Agregar Categoría" onClose={onClose} visible={open} footer={<DrawerFooter createRecord={handleSubmit}/>}>        <Form>
          <Form.Item<Category>
            label="ID_Categoria"
            name="ID_Categoria"
            rules={[{ required: true, message: "Agrega el ID"
             }]}
          >
   <InputNumber value={ID_Categoria} defaultValue={0} onChange={onChange}  />
          </Form.Item>

          <Form.Item<Category>
            label="Nombre"
            name="Nombre"
            rules={[{ required: true, message: "Agrega el nombre" }]}
          >
  <Input value={Nombre} onChange={(e) => setNombre(e.target.value)} />          </Form.Item>

          <Form.Item<Category>
            label="fechacreacion"
            name="fechacreacion"
            rules={[{ required: true, message: "Agrega fecha de creacion" }]}
          >
 <DatePicker onChange={onChange} />          </Form.Item>

          <Form.Item<Category>
            label="fk_CreadoPor"
            name="fk_CreadoPor"
            rules={[{ required: false }]}
          >
   <InputNumber value={fk_CreadoPor} defaultValue={0} onChange={onChangefkCreado}  />
          </Form.Item>

          <Form.Item<Category>
            label="fechaactualizacion"
            name="fechaactualizacion"
            rules={[{ required: false }]}
          >
 <DatePicker onChange={onChange} />          </Form.Item>

          <Form.Item<Category>
            label="fk_ActualizadoPor"
            name="fk_ActualizadoPor"
            rules={[{ required: false }]}
          >
   <InputNumber value={fk_ActualizadoPor} defaultValue={0} onChange={onChangefkActualizado}  />
          </Form.Item>

          <Form.Item<Category>
            label="fechaeliminacion"
            name="fechaeliminacion"
            rules={[{ required: false }]}
          >
 <DatePicker onChange={onChange} />          </Form.Item>
          <Form.Item<Category>
            label="fk_EliminadoPor"
            name="fk_EliminadoPor"
            rules={[{ required: false }]}
          >
   <InputNumber value={fk_EliminadoPor} defaultValue={0} onChange={onChangefkEliminado}  />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default TablaCategorias;

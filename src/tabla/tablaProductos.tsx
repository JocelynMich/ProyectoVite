import React, { useEffect, useState } from "react";
import { getProductos } from "../services/productos";
import { Table } from "antd";
import { Product } from "../models/product";

const TablaProductos: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
      <Table
        columns={columns}
        dataSource={products}
      />

    </>
  );
}

export default TablaProductos;
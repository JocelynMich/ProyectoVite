import React, { useEffect, useState } from "react";
import { getGenero } from "../services/genero";
import { Table } from "antd";
import { Gender } from "../models/gender";

const TablaGenero: React.FC = () => {
  const [gender, setGender] = useState<Gender[]>([]);

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
      <Table
        columns={columns}
        dataSource={gender}
      />

    </>
  );
}

export default TablaGenero;
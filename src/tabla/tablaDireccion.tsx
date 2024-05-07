import React, { useEffect, useState } from "react";
import { getDireccion } from "../services/direccion";
import { Table } from "antd";
import { Direction } from "../models/direction";

const TablaDireccion: React.FC = () => {
  const [direction, setDirection] = useState<Direction[]>([]);

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
      <Table
        columns={columns}
        dataSource={direction}
      />

    </>
  );
}

export default TablaDireccion;
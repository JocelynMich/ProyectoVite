import React, { useEffect, useState } from "react";
import { getSesiones } from "../services/sesiones";
import { Table } from "antd";
import { Session } from "../models/session";

const TablaSesiones: React.FC = () => {
  const [session, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const session = await getSesiones();
        setSessions(session);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchSession();
  }, []);

  const columns = [
    {
        title: 'ID_Sesion',
        dataIndex: 'id_sesion',
        key: 'id_sesion',
        
      },
      {
        title: 'Fecha_Sesion',
        dataIndex: 'fecha_sesion',
        key: 'fecha_sesion',
      },
  
      {
        title: 'Hora_Sesion',
        dataIndex: 'hora_sesion',
        key: 'hora_sesion',
      },
  
      {
        title: 'ID_Cliente',
        dataIndex: 'idcliente',
        key: 'idcliente',
      },
  
      {
        title: 'Fecha_Venta',
        dataIndex: 'fechaventa',
        key: 'fechaventa',
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
        dataSource={session}
      />

    </>
  );
}

export default TablaSesiones;
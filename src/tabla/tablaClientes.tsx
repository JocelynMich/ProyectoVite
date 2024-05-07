import React, { useEffect, useState } from "react";
import { getCliente } from "../services/clientes";
import { Table } from "antd";
import { Client } from "../models/client";

const TablaCliente: React.FC = () => {
  const [clients, setCliente] = useState<Client[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const clientes = await getCliente();
        setCliente(clientes);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchClients();
  }, []);

  const columns = [
    {
        title: 'ID_Cliente',
        dataIndex: 'id_cliente',
        key: 'id_cliente',
        
      },
      {
        title: 'Nombre',
        dataIndex: 'nombre',
        key: 'nombre',
      },
    
      {
        title: 'Apellido',
        dataIndex: 'apellido',
        key: 'apellido',
      },
      {
        title: 'Fecha_Nacimiento',
        dataIndex: 'fechanac',
        key: 'fechanac',
      },
    
      {
        title: 'ID_Genero',
        dataIndex: 'idgenero',
        key: 'idgenero',
      },
    
      {
        title: 'Telefono',
        dataIndex: 'telefono',
        key: 'telefono',
      },
    
      {
        title: 'Correo',
        dataIndex: 'correo',
        key: 'correo',
      },
    
      {
        title: 'ID_Direccion',
        dataIndex: 'iddireccion',
        key: 'iddireccion',
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
        dataSource={clients}
      />

    </>
  );
}

export default TablaCliente;
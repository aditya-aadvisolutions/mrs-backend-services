import {config } from './database/mrs_db_connection';
import sql, { ConnectionPool } from 'mssql';
import express from 'express';

export async function connectToDatabase(): Promise<void> {
    try {
      const pool: ConnectionPool = await sql.connect(config);
      console.log('Connected to SQL Server');
  
      // Use the pool as needed here
  
      // Example: Querying data
      const query = `
        SELECT COUNT(*) AS table_count
        FROM INFORMATION_SCHEMA.TABLES
        WHERE TABLE_TYPE = 'BASE TABLE' 
      `;
  
      const result = await pool.request().query(query);
      const tableCount = result.recordset[0].table_count;
  
      console.log(`Table count: ${tableCount}`);
  
      // Close the pool when done
      await pool.close();
    } catch (err) {
      console.error('Error connecting to SQL Server:', err.message);
    }
  }
connectToDatabase();
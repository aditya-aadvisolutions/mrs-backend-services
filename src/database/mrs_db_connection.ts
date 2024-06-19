import sql, { ConnectionPool } from 'mssql';

// Configuration for your SQL Server
export const config: sql.config = {
  server: 'maxtran.database.windows.net',
  authentication: {
    type: 'default',
    options: {
      userName: 'maxtran-dev',
      password: '$Admin@123',
    },
  },
  database: 'maxtran_dev',
  options: {
    encrypt: true, // Use encryption (if applicable)
    trustServerCertificate: true, // For self-signed certificates
  },
};

// Function to connect to SQL Server



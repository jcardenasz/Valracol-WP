// src/testDatabaseConnection.ts
import client from './connection';

export async function testDatabaseConnection() {
    try {
        await client.query('SELECT NOW()');
        console.log('Database connection is successful');
    } catch (error) {
        console.error('Database connection failed', error);
    }
}
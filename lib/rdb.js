'use strict';
const mysql = require('mysql2/promise');
require('dotenv').config();

module.exports = {
  /**
   * 血圧データを mysql から取得します。
   */
  fetchBpRecords: async () => {
    const conn = await mysql.createConnection({
      host: process.env.MYSQL_ENDPOINT,
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
    });
    try {
      const sql =
        'select * from blood_pressure order by `測定日時` desc limit 21';
      const rows = await conn.execute(sql);
      return rows;
    } catch (error) {
      console.log(error);
    } finally {
      conn.end();
    }
  },
};

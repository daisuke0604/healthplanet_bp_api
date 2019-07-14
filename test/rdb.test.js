'use strict';
const rdb = require('../lib/rdb.js');

test('fetchBpRecords', async () => {
  const results = await rdb.fetchBpRecords();
  console.log(results);
});

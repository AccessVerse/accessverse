import { ComposeClient } from '@composedb/client';
import { definition } from 'data/compiled/runtime-composite';

const compose = new ComposeClient({
  ceramic: 'http://localhost:7007',
  definition,
});
export default compose;

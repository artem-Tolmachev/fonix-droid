import { createRoot } from 'react-dom/client';

import './index.css';
import AddToAnkiButton from './AddToAnkiButton';

createRoot(document.getElementById('root')!).render(
  <>
      <AddToAnkiButton/>
  </>
)

import * as React from 'react';
import Button from '@mui/material/Button';
import { Search } from './pages/search/search.component';
import { onSearchAction } from './actions/search.api';

export default function App() {
  return <Search onSearchClick={onSearchAction} />
}


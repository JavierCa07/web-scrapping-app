import * as React from 'react';
import Button from '@mui/material/Button';
import { Search } from './pages/search/search.component';
import { onSearchAction } from './actions/search.api';
import { useState } from 'react';

export default function App() {
  const [results, setResults] = useState() as any; // TODO: remove this any

  const searchAction = (query: string) => {
    onSearchAction(query)
    .then((response) => {
      setResults(response);
    })
  }
  return <Search onSearchClick={searchAction} results={results} />
}


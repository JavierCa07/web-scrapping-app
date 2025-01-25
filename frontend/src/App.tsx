import { Search } from './pages/search/search.component';
import { onSearchAction } from './actions/search.api';
import { useState } from 'react';

export default function App() {
  const [results, setResults] = useState() as any; // TODO: remove this any

  const resetResults = () => {
    setResults(null);
  }

  const searchAction = (query: string) => {
    onSearchAction(query)
    .then((response: any) => { // TODO: remove this any
      setResults(response);
    })
  }
  return <Search onSearchClick={searchAction} results={results} resetResults={resetResults} />;
}


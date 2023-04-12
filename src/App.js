
import './App.css'
import AbsoluteDifferencePage from './components/AbsoluteDifference';
import AbsoluteDataTable from './components/AbsoluteDataTable';
import S from './style'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <S.HomeApp>
      <AbsoluteDifferencePage />
      <AbsoluteDataTable />
    </S.HomeApp>
    </QueryClientProvider>
  )
}

export default App

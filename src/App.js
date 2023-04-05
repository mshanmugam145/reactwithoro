import logo from './logo.svg';
import './App.css';
import { FetchData } from './components/FetchData';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FetchData />
      </header>
    </div>
    </QueryClientProvider>
  );
}

export default App;

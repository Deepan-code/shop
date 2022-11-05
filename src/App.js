import ErrorBoundary from './components/utils/errorBoundary/ErrorBoundary';
import { Routing } from './route';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Routing />
      </ErrorBoundary>
    </div>
  );
}

export default App;

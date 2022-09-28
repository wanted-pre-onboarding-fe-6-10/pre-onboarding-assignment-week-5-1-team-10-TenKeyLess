import { ThemeProvider } from 'styled-components';
import { InputContextProvider } from './contexts/InputContext';
import { RecommendContextProvider } from './contexts/RecommendContext';
import Main from './pages/Main';
import GlobalStyle from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme';

const cache = new Map();
const searchHistory: Array<string> = [];

function App() {
  return (
    <InputContextProvider searchHistory={searchHistory}>
      <RecommendContextProvider cache={cache}>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyle />
          <Main />
        </ThemeProvider>
      </RecommendContextProvider>
    </InputContextProvider>
  );
}

export default App;

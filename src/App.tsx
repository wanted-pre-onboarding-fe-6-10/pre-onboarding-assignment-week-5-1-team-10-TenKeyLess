import { ThemeProvider } from 'styled-components';
import { InputContextProvider } from './contexts/InputContext';
import Main from './pages/Main';
import GlobalStyle from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <InputContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </InputContextProvider>
  );
}

export default App;

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import { defaultTheme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

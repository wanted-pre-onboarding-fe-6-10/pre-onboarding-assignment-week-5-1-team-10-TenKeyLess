import styled from 'styled-components';

interface IHighlighter {
  text: string;
  highlight: string;
}

const Highlighter = ({ text, highlight }: IHighlighter) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <Text>
      {parts.map((part: string, idx: number) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <HighlightedText key={idx}>{part}</HighlightedText>
        ) : (
          <Text key={idx}>{part}</Text>
        )
      )}
    </Text>
  );
};

const HighlightedText = styled.span`
  color: ${(props) => props.theme.colors.textHighlighted};
`;

const Text = styled.span`
  white-space: nowrap;
`;

export default Highlighter;

import styled from 'styled-components';

interface IHighlighter {
  text: string;
  highlight: string;
}

const Highlighter = ({ text, highlight }: IHighlighter) => {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));

  return (
    <HighlighterWrapper>
      {parts.map((part: string, idx: number) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <HighlightedText key={idx}>{part}</HighlightedText>
        ) : (
          <Text key={idx}>{part}</Text>
        )
      )}
    </HighlighterWrapper>
  );
};

const HighlighterWrapper = styled.span`
  width: max-content;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HighlightedText = styled.span`
  color: ${(props) => props.theme.colors.textHighlighted};
  font-weight: bold;
`;

const Text = styled.span`
  /* white-space: nowrap; */
`;

export default Highlighter;

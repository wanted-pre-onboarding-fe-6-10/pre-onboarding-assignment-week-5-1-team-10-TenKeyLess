const highlighter = (text: string, input: string) => {
  const highlightText = text.split(new RegExp(`(${input})`, 'gi'));
  console.log(highlightText);

  return (
    <>
      {highlightText.map((str, idx) => {
        return str === input ? (
          <span key={idx} style={{ color: '#2196f3', fontWeight: 'bold' }}>
            {str}
          </span>
        ) : (
          str
        );
      })}
    </>
  );
};

export default highlighter;

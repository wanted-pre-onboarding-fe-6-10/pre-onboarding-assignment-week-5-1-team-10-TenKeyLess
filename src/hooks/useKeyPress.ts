const useKeyPress = () => {
  const handleKeyArrow = (e: React.KeyboardEvent) => {
    if ([].length > 0) {
      // switch (e.key) {
      //   case ArrowDown:
      //     setIndex(index + 1);
      //     if (autoRef.current?.childElementCount === index + 1) setIndex(0);
      //     break;
      //   case ArrowUp:
      //     setIndex(index - 1);
      //     if (index <= 0) {
      //       setKeyItems([]);
      //       setIndex(-1);
      //     }
      //     break;
      //   case Escape:
      //     setKeyItems([]);
      //     setIndex(-1);
      //     break;
      // }
    }
  };

  return { handleKeyArrow };
};

export default useKeyPress;

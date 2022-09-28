import { RefObject, useRef, useState } from 'react';

interface IUseFocus {
  ref:
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  setFocus: () => void;
  setBlur: () => void;
  isFocus: boolean;
}
const useFocus = (): IUseFocus => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const ref = useRef<any>();
  const setFocus = () => {
    ref.current && ref.current.focus();
    setIsFocus(true);
  };

  const setBlur = () => {
    ref.current && ref.current.blur();
    setIsFocus(false);
  };

  return { ref, setFocus, setBlur, isFocus };
};

export default useFocus;

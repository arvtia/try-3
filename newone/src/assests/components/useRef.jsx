import { useRef, useEffect } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus the input field on mount
  }, []);

  return <input ref={inputRef} type="text" placeholder="Type something..." className="input field control" />;
}

export default InputFocus;
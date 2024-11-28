import {  
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  ReactElement,
  useRef,
  useCallback,
  RefObject,
} from "react";

import TextArea from "./TextArea";
import TextInput from "./Input";
import IconLabel from "./IconLabel";

type InputPropsType = InputHTMLAttributes<HTMLInputElement>;
type TextareaPropsType = TextareaHTMLAttributes<HTMLTextAreaElement>;

interface BaseProps {
  placeholder: string;
  error?: string;
  icon: ReactElement;
  area?: boolean;
}

type InputProps = BaseProps & (InputPropsType | TextareaPropsType);

export default function Input({
  icon,
  placeholder,
  error,
  id,
  area = false,
  ...props
}: InputProps) {

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  const handleInputClick = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div
      id={id}
      onClick={handleInputClick}
      className={`px3 m:py-2.5 sm:3.5 flex w-full max-w-[400px] cursor-text justify-start
      gap-2.5 overflow-hidden rounded-lg border border-200 bg-50 px-3 py-2 shadow-little transition-colors ease-in-out focus-within:border-400 md:px-4 md:py-3
      ${error ? "border-l-error" : "border-200"} ${area ? "items-start" : "items-center"}`}
    >
      
      <IconLabel area={area}>{icon}</IconLabel>
      
      {area ? (
        <TextArea ref={inputRef as RefObject<HTMLTextAreaElement>} placeholder={placeholder} {...props} />
      ) : (
        <TextInput ref={inputRef as RefObject<HTMLInputElement>} placeholder={placeholder} {...props} />
      )}
    </div>
  );
}

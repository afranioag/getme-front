import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  required?: boolean;
  label?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  icon,
  required = false,
  ...rest
}) => {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-2 text-gray-700">{label}</label>}
      <div className="relative flex items-center text-gray-700">
        {icon && <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <i className={icon} aria-hidden="true"></i>
        </span>}
        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="pl-8 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          style={{ transition: 'all 0.15s ease-in-out' }}
          {...rest}
        />
      </div>
    </div>
  );
};

export default InputField;

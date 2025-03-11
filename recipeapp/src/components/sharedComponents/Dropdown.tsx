import React from "react";
export type OptionItem<T> = {
  value: T;
  label: string;
};
interface DropdownProps<T> {
  options: OptionItem<T>[];
}
const Dropdown = <T extends string | number>({ options }: DropdownProps<T>) => {
  return (
    <div>
      <select>
        {options.map((item: OptionItem<T>, index: number) => (
          <option key={index} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;

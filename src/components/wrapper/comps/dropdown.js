import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

export default function Dropdown({item, handleChange, options}) {
    console.log("asdasdasdasd ", item);
  return (
    <div>
      <FormControl>
        <NativeSelect
          value={item}
          onChange={handleChange}
          name="age"
          inputProps={{ "aria-label": "selector" }}
        >
          {options?.map((val) => (
            <>
              <option value={val.value}>{val.name}</option>
            </>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

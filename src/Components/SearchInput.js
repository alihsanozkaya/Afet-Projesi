import React from "react";
import { List } from "antd";
import PlacesAutocomplete from "react-places-autocomplete";

const SearchInput = ({ address, setAddress, handleSelect }) => {
  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              className="form-control"
              style={{ borderRadius: "10px" }}
              {...getInputProps({ placeholder: "Adres giriniz" })}
            />
            <List>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? "#e6e6e6" : "#fff",
                };
                return (
                  <List.Item {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </List.Item>
                );
              })}
            </List>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default SearchInput;

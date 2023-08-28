import React, { useState } from "react";
import {HeroCarousel} from "./HeroCarousel";
import Autosuggest from 'react-autosuggest';
import { locations } from "../data/locations";

export const MainHero = () => {

  const options = locations;

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
  
    return inputLength === 0
      ? []
      : options.filter((option) =>
          option.name.toLowerCase().includes(inputValue)
        );
  };
  
  const renderSuggestion = (suggestion) => (
    <div>{suggestion.name}</div>
  );
  
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
  
    const onChange = (event, { newValue }) => {
      setValue(newValue);
    };
  
    const onSuggestionsFetchRequested = ({ value }) => {
      setSuggestions(getSuggestions(value));
    };
  
    const onSuggestionsClearRequested = () => {
      setSuggestions([]);
    };
  
    const onSuggestionSelected = (event, { suggestion }) => {
      window.location.href = suggestion.link;
    };

    const shouldRenderSuggestions = (value) => value.trim().length > 0;

  
    const inputProps = {
      placeholder: 'Search for destination',
      value,
      className: 'bg-gray-200 text-gray-700 py-3 px-3 w-full rounded focus:outline-none',
      onChange,
    };

  return (
    <div className="lg:py-20 lg:pb-10" style={{ backgroundColor: "#FFF7F5" }}>
      <div className="flex justify-between items-start px-0 lg:px-20">
        <div className="w-full hidden lg:block lg:w-2/5">
          <h1 className="text-4xl font-bold">London is Calling !</h1>
          <div className="bg-white shadow-sm p-5 mt-5 rounded-lg">
            {/* <input
              type="text"
              className="bg-gray-200 text-gray-700 py-3 px-3 w-full rounded focus:outline-none"
              placeholder="Search your destination"
            /> */}

          <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  onSuggestionSelected={onSuggestionSelected}
                  getSuggestionValue={(suggestion) => suggestion.name}
                  renderSuggestion={renderSuggestion}
                  inputProps={inputProps}
                  shouldRenderSuggestions={shouldRenderSuggestions}
                />

            <div className="flex my-4">
              <label htmlFor="" className="mr-5 text-gray-600">
                #beach
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #mountain
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #climb
              </label>
              <label htmlFor="" className="mr-5 text-gray-600">
                #dive
              </label>
            </div>
          </div>
        </div>
        <div className="lg:w-2/5 lg:block">
          <HeroCarousel />
        </div>
      </div>
    </div>
  );
};

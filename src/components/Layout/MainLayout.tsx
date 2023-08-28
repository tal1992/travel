import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Autosuggest from 'react-autosuggest';
import { locations } from "../../data/locations";

const BottomBar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 left-0 w-full z-30 lg:hidden">
      <div className="flex justify-center bg-white border-t border-gray-300">
        <Link
          href=""
          className={`py-2 w-3/12 flex flex-col justify-center items-center ${
            router.pathname == "/" ? "text-red-500" : "text-gray-500"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="fill-current h-8 w-8 inline-block"
          >
            <g data-name="Layer 2">
              <g data-name="home">
                <rect width="24" height="24" opacity="0" />
                <path d="M20.42 10.18L12.71 2.3a1 1 0 0 0-1.42 0l-7.71 7.89A2 2 0 0 0 3 11.62V20a2 2 0 0 0 1.89 2h14.22A2 2 0 0 0 21 20v-8.38a2.07 2.07 0 0 0-.58-1.44zM10 20v-6h4v6zm9 0h-3v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H5v-8.42l7-7.15 7 7.19z" />
              </g>
            </g>
          </svg>
          <label htmlFor="" className="inline-block text-xs pt-1">
            Home
          </label>
        </Link>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [pastSplash, setPastSplash] = useState("");
  const [showSearch, setShowSearch] = useState(false);

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
      className: 'px-5 py-2 rounded-full border  focus:outline-none text-sm w-full placeholder-gray-800',
      onChange,
    };


  function handleScroll(e) {
    if (window.scrollY > Math.round(window.innerHeight / 2)) {
      setPastSplash(
        "fixed shadow-sm transition-colors duration-500 ease-in-out bg-white z-40"
      );
      setShowSearch(true);
    } else {
      setPastSplash("bg-red-100");
      setShowSearch(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`p-4 px-5 md:px-20  grid grid-cols-2 gap-4 w-full ${pastSplash}`}
    >
      <h4 className="col-span-1 text-2xl font-semibold text-red-600">
        <Link href="/">
          <span>Exploring</span>
          <span className="pt-2"> England</span>
        </Link>
      </h4>
      <div className="col-span-1 ml-auto md:block">
        <div className="flex items-center justify-between overflow-hidden">
          {showSearch && (
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
          )}
          <Link
            href=""
            className="px-5 py-2 text-white rounded-full bg-red-600 mx-4 text-sm hidden"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      {/* <BottomBar /> */}
    </>
  );
};

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Autosuggest from 'react-autosuggest';
import { locations } from "../../data/locations";

// Define the Modal component
const SearchModal = ({ isOpen, onClose }) => {
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
    className: 'px-5 py-2 rounded-full border focus:outline-none text-md w-full placeholder-gray-800',
    onChange,
  };

  return (
    // Modal backdrop
    <div className={`fixed inset-0 flex items-center justify-center ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-300`}>
      {/* Modal content */}
      <div className="bg-white rounded-lg p-6 w-full search-modal overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4">Search</h2>
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
        <button className="mt-4 p-2 px-4 bg-red-600 text-white rounded-full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [pastSplash, setPastSplash] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();

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
    <nav className={`p-4 px-5 md:px-20  grid grid-cols-2 gap-4 w-full ${pastSplash}`}>
      <h4 className="col-span-1 text-lg md:text-2xl  font-semibold text-red-600">
        <Link href="/" title="home">
          <span>Exploring</span>
          <span className="pt-2"> England</span>
        </Link>
      </h4>
      <div className="col-span-1 ml-auto md:block overflow-hidden">
        <div className="flex items-center justify-between overflow-hidden search-container">
          {showSearch && (
            <>
              <button
                className="px-5 py-2 text-white rounded-full bg-red-600 mx-4 text-sm"
                onClick={() => setIsModalOpen(true)}
              >
                Search
              </button>
              <SearchModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </>
          )}
          {!showSearch && <Link href="/listing" className="text-red-600 underline">Destinations</Link>}
          <Link href="" title="register" className="px-5 py-2 text-white rounded-full bg-red-600 mx-4 text-sm hidden">
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

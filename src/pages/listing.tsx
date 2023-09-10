import React, { useState, useEffect } from "react";
import { locations } from "../data/locations";
import FilteredDestinations from "../components/FilteredDestinations";
import { MainLayout } from "../components/Layout/MainLayout";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { Footer } from "../components/Footer";

const ListingPage: React.FC = () => {
  const router = useRouter();
  const { search, category } = router.query;

  const [landingTagFilter, setLandingTagFilter] = useState<string>(
    search
      ? locations.some((location) => location.landingTag === (search as string))
        ? (search as string)
        : "All Featured Locations"
      : "All Featured Locations"
  );
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [filteredLocations, setFilteredLocations] = useState(locations);

  useEffect(() => {
    // Apply filters based on selected landingTag
    let filtered = locations;

    if (landingTagFilter !== "All Featured Locations") {
      filtered = filtered.filter(
        (location) => location.landingTag === landingTagFilter
      );
    }

    // Apply filters based on selected category
    if (categoryFilter) {
      // Split the selected category by commas
      const selectedCategories = categoryFilter
        .split(",")
        .map((cat) => cat.trim());

      filtered = filtered.filter((location) =>
        selectedCategories.every((selectedCategory) =>
          location.category.includes(selectedCategory)
        )
      );
    }

    setFilteredLocations(filtered);
  }, [landingTagFilter, categoryFilter]);

  const clearFilter = (filterType: "landingTag" | "category") => {
    if (filterType === "landingTag") {
      setLandingTagFilter("All Featured Locations");
    } else if (filterType === "category") {
      setCategoryFilter(null);
    }
  };

  const handleLandingTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLandingTag = e.target.value;
    setLandingTagFilter(newLandingTag);
    clearFilter("category");
    router.push(
      {
        pathname: "/listing",
        query: {
          search:
            newLandingTag === "All Featured Locations"
              ? undefined
              : newLandingTag,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategoryFilter(newCategory);
    clearFilter("landingTag");
  };

  // Convert selected values to PascalCase with spaces
  const pascalCaseLandingTag = landingTagFilter
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const pascalCaseCategory = categoryFilter
    ? categoryFilter
        .split(",")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(", ")
    : "";

  return (
    <>
      <NextSeo
        title={`${pascalCaseLandingTag}`} // Dynamic title
        description={`Check out ${pascalCaseLandingTag} in UK.`} // Dynamic text
      />
      <MainLayout>
        <div className="container px-5 md:px-20 py-10">
          <h1 className="text-3xl font-semibold mb-4">
            {pascalCaseLandingTag}
          </h1>{" "}
          {/* Dynamic heading */}
          <div className="mb-4">
            {/* Dropdown filter for landingTag */}
            <select
              className="px-4 py-2 border rounded bg-red-200 text-red-600 focus:outline-none mt-5 w-3/4 md:w-auto"
              value={landingTagFilter}
              onChange={handleLandingTagChange}
            >
              <option value="All Featured Locations">
                All Featured Locations
              </option>
              {locations
                .map((location) => location.landingTag)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((tag, index) => (
                  <option
                    key={index}
                    value={tag}
                    className="px-4 py-2 my-1 border rounded bg-white text-gray-800 hover:bg-gray-200 focus:bg-gray-300 transition-colors"
                  >
                    {tag
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </option>
                ))}
            </select>

            {/* Dropdown filter for category */}
            <select
              className="px-4 py-2 border rounded bg-red-200 text-red-600 focus:outline-none mt-5 w-3/4 md:w-auto md:ml-5"
              value={categoryFilter || ""}
              onChange={handleCategoryChange}
            >
              <option value="">All Categories</option>
              {Array.from(
                new Set(
                  locations
                    .map((location) => location.category)
                    .flat()
                    .map(
                      (categories) =>
                        categories
                          .split(",") // Split categories by comma
                          .map((cat) => cat.trim()) // Trim whitespace
                    )
                    .flat() // Flatten the nested arrays
                )
              ).map((uniqueCategory, index) => (
                <option
                  key={index}
                  value={uniqueCategory}
                  className="px-4 py-2 my-1 border rounded bg-white text-gray-800 hover:bg-gray-200 focus:bg-gray-300 transition-colors"
                >
                  {uniqueCategory
                    .split("-")
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(", ")}
                </option>
              ))}
            </select>
          </div>
          <FilteredDestinations locations={filteredLocations} />
        </div>
      </MainLayout>
      <Footer />
    </>
  );
};

export default ListingPage;

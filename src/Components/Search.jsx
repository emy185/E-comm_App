import React from "react";

function Search() {
  return (
    <div className="py-20 flex justify-center">
      <form className="border-2 border-[#BCDDFE] rounded-md lg:w-[635px] sm:w-[500px] flex">
        <input
          type="text"
          name="search"
          placeholder="Search query"
          className="lg:w-[537px] sm:w-[400px] h-[64px] pl-5 outline-none"
        />
        
        <button className="p-5 bg-[#40BFFF] text-white font-semibold">
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;

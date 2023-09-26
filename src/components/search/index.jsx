const Search = () => {
  return (
    <div className="search py-[120px]">
      <div className="text-center">
        <h1 className="lg:text-5xl text-3xl font-bold text-[#0B0B0B] mb-[40px]">
          I Grow By Helping People In Need
        </h1>

        <form action="">
          <input
            type="text"
            placeholder="Search here..."
            className="border text-sm border-[#FF444A] rounded-l-[10px] py-[16px] px-[16px] w-[400px] focus:outline-none"
          />
          <input
            type="submit"
            value="Search"
            className="bg-[#FF444A] border text-sm border-[#FF444A] text-white rounded-r-[10px] py-[16px] px-[30px] cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default Search;

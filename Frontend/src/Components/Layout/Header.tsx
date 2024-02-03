import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import Input from "../../UI_Shared/Input";
import Button from "../../UI_Shared/Button";
import { IoIosArrowForward } from "react-icons/io";

function Header() {
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-around items-center my-3">
        <div>
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        {/* search */}
        <div className="w-[50%] relative">
          <Input variant="search" placeholder="Search Product..."  />
          <AiOutlineSearch
            size={30}
            className="absolute right-2 top-1.5 cursor-pointer"
          />
        </div>
        {/* button */}
        <div>
          <Button variant="seller">
            <h1 className="text-[#fff] flex items-center">
              Become seller
              <IoIosArrowForward className="ml-1" />
            </h1>
          </Button>
        </div>
      </div>

      <div>
        
      </div>
    </div>
  );
}

export default Header;

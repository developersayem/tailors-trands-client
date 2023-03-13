import { useState } from "react";
import { FaShoppingCart, FaRegBell } from "react-icons/fa";

const NavigationBar = () => {
  const [shoppingCartData, setShoppingCartData] = useState(0);
  return (
    <>
      <div className="navbar bg-[#ffffff] rounded-md">
        <div className="navbar-start">
          <a className="btn btn-ghost normal-case text-xl">
            <span className="text-red-500">Tailor</span>Trands
          </a>
        </div>
        <div>
          <ul className="flex justify-evenly">
            <li>
              <div className="indicator">
                {shoppingCartData >= 1 ? (
                  <span className="indicator-item badge badge-ghost text-red-500">
                    {`${shoppingCartData}`}
                  </span>
                ) : (
                  <></>
                )}
                <button className="p-2">
                  <FaShoppingCart className="text-xl hover:text-red-500"></FaShoppingCart>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => setShoppingCartData(shoppingCartData + 1)}
            className="px-5 py-2 bg-red-500 rounded-md text-white font-bold hover:bg-white hover:text-red-500 hover: border border-red-500"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;

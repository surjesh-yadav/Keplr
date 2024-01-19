import React from "react";

const Footer = () => {
  return (
    <div className="text-[14px]">
      <a
        href="#scrollToTopBtn" 
        id="scrollToTopBtnmain"
        className="bg-[#224BC1] fixed bottom-20 py-5 hover:bg-blue-700 text-white font-semibold px-4 rounded"
      >
        <img src="./scrollup.svg" />
      </a>
      <footer className=" md:bg-[#080b18] pt-10 pb-10">
       <div className="md:flex justify-between">
           <div className="my-3"> <img className="w-[90px]" src="/main_logo.svg"/></div>
           <div >
               <ul className="flex flex-wrap space-x-4 mt-5">
                   <li>Source Code</li>
                   <li>Documentation</li>
                   <li>Help Desk</li>
                   <li>Brand Kit</li>
                  <li className="text-xs bg-cyan-500 pt-1 px-1 text-white rounded-full">NEW</li>
               </ul>
           </div>
       </div>
       <hr  className="border-gray-600"/>
       
        <div className="mx-auto w-full max-w-screen-xl py-6 lg:py-8">
          <h2 className="my-3 text-white font-semibold">Native Chains</h2>
          <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 mobile_footer">
            
            <div className="md:mx-auto">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Osmosis
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Terra Classic
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                   Quicksilver
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Axelar
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Agoric
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Gitopia
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mx-auto">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Cosmos Hub
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Terra
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    IRISnet
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Stride
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Shentu
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Noble
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mx-auto">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Mars
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Secret Network
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Sentinel
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                   Bostrom
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                   Quasar
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                   LikeCoin
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mx-auto">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Akash
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Kava
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Cyrpto.org
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Injective
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    OmniFlix
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Archway
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mx-auto">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Stargaze
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Sifchain
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Persistence
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Juno
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    KYVE
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Celestia
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:mx-auto">
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Sommelier
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Regen
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Gravity Bridge
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    UX
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    Neutron
                  </a>
                </li>
               <li className="mb-4">
                  <a href="#" className="hover:text-gray-600 text-white font-semibold">
                    dYdX
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
          <hr className="border-gray-600"/>
          <p className="m-2 flex text-gray-600">© 2024, Keplr Wallet is proudly built by <img className="mx-2"  src="/logo.svg"/></p>
      </footer>
    </div>
  );
};

export default Footer;

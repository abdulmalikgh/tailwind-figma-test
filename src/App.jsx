import { useEffect, useState } from "react";
import './assets/scrollbar.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleChange = (e) => {
      console.log('event', e);
    };
  
    window.addEventListener('change', handleChange);
  
    return () => {
      window.removeEventListener('change', handleChange);
    };
  })
  return (
    <div className="min-h-screen flex flex-col">
    {/* Header */}
    <header className="h-[80px] border-b border-customGray">
      <div className="container mx-auto flex items-center h-full">
        <h1 className="text-lg font-bold ">
          <img src="../public/logo.svg" alt="" />
        </h1>
        {/* Input here */}
        <div className="w-full flex items-center justify-center px-5">
        <div className="relative w-full max-w-[598px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src="../public/fi-br-search.svg" alt="Search Icon" />
          </div>

          <input 
            type="text" 
            className="pl-10 pr-16 h-[40px] rounded-[8px] border border-[#B4B4B4] bg-[#F5F5F5] w-full focus:outline-none focus:ring-0 box-border placeholder-gray-400" 
            placeholder="Search Creative OS" 
          />

          <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500">
            ⌘ + K
          </div>
        </div>
        </div>
      </div>
    </header>

     
    <main className="">
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`fixed top-[80px] left-0 h-[calc(100vh-80px)] bg-[#F5F5F5] border-r border-customGray transition-transform transform ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            } w-[250px] p-5 overflow-y-auto`}
          >
            <div className="nav-content">
              <ul>
                <li className="cursor-pointer">
                  <div className="flex items-center ps-3 py-2.5 font-semibold text-[14px] leading-[16.94px]">
                    <div className="flex items-center w-full gap-3">
                      <img src="../public/compass.svg" alt="" />
                      Inspirations
                    </div>
                    
                    <button className="" onClick={toggleSidebar}>
                      <img src="../public/btn-nav-chevron.svg" alt="" />
                    </button>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <div className="flex items-center ps-3 py-2.5 font-semibold text-[14px] leading-[16.94px]">
                    <div className="flex items-center w-full gap-3">
                      <img src="../public/templates.svg" alt="" />
                      Templates
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <div className="flex items-center ps-3 py-2.5 font-semibold text-[14px] leading-[16.94px]">
                    <div className="flex items-center w-full gap-3">
                      <img src="../public/collections.svg" alt="" />
                      Collections
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <div className="flex items-center ps-3 py-2.5 font-semibold text-[14px] leading-[16.94px] rounded-lg border border-[#A259FF]">
                    <div className="flex items-center w-full gap-3">
                      <img src="../public/brands.svg" alt="" />
                      Brands
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="border-b border-customGray w-[190px] my-5"></div>
            <div className="">
              <h3 className="text-textMuted text-xs">FEATURED</h3>
              <div className="">
                <ul>
                  <li className="flex items-center gap-5 text-sm py-2 px-5 cursor-pointer">
                    <span>Hidden gems</span>
                    <img src="../public/tag-pro.svg" alt="" />
                  </li>
                  <li className="flex items-center gap-5 text-sm py-2 px-5 cursor-pointer">
                    <span>Evergreen ads</span>
                    <img src="../public/tag-pro.svg" alt="" />
                  </li>
                  <li className="flex items-center gap-5 text-sm py-2 px-5 cursor-pointer">
                    <span>Testing lab</span>
                    <img src="../public/tag-pro.svg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-b border-customGray w-[190px] my-5"></div>
            <div className="mb-10">
              <div className="flex justify-between mb-3">
                <h4 className="text-sm text-textMuted">Saved</h4>
                <button>
                  <img src="../public/add-collection.svg" alt="" />
                </button>
              </div>

              <div className="ms-5 h-[220px] overflow-auto scrollbar-left">
                  <ul>
                    <li className="cursor-pointer text-sm py-2.5 px-5">
                      All Saved
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="../public/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="../public/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="../public/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="../public/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="../public/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="../public/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="../public/dots-expand.svg" alt="" />
                    </li>
                  </ul>
              </div>
              <div className="text-sm mt-2">View all boards</div>
            </div>
            <div className="border-b border-customGray w-[190px] my-5"></div>
            <div className="">
              <ul>
                <li className="cursor-pointer text-base pb-2">Settings</li>
                <li className="cursor-pointer text-base pb-2">Help & Feedback</li>
                <li className="cursor-pointer text-base pb-2">Join the CreativeOS Slack</li>
              </ul>
            </div>
            <div className="border-b border-customGray w-[190px] my-5"></div>
            <div className="flex items-center gap-5">
              <div className="h-10 w-10 rounded-full bg-customPurple"></div>
              <p>My Account</p>
            </div>
          </div>

          {/* Main Content */}
          <div className={`transition-all duration-300 p-5 ${
            isSidebarOpen ? 'ml-[250px] w-[calc(100vw-250px)]' : 'w-full'
          }`}
          >
            {
              !isSidebarOpen && (
                <button
                  className=""
                  onClick={toggleSidebar}
                >
                
                  <MdKeyboardDoubleArrowRight size={24} />
                </button>
              )
            }
            
            <div className=""> 
                <div className="flex justify-between">
                  <div className="">
                    <button className="bg-white rounded-lg border border-dark text-sm p-2 me-3">
                      Back
                    </button>
                    <span className="text-xl bg-gradient-to-b font-bold from-customPurple to-customPurpleDark inline-block text-transparent bg-clip-text">Brand name</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <span>Show:</span>
                    <button className="flex items-center rounded-lg border border-dark text-sm px-3 py-2 gap-2"><img src="../public/filter-icons.svg" alt="" /> <span>Templates</span> <img src="" alt="" /></button>
                    <button className="flex items-center rounded-lg border border-dark text-sm px-3 py-2 gap-2"><img src="../public/filter-icons (1).svg" alt="" />Email<img src="../public/tag-pro.svg" /></button>
                    <button className="flex items-center rounded-lg border border-dark text-sm px-3 py-2 gap-2"><img src="../public/filter-icons (2).svg" alt="" />Landers<img src="../public/tag-pro.svg" /></button>
                    <button className="flex items-center rounded-lg bg-gradient-to-b  from-customPurple to-customPurpleDark text-white text-sm px-3 py-2 gap-2"><img src="../public/filter-icons (3).svg" alt="" /><span>Funnel</span><img src="../public/tag-pro.svg" /></button>
                  </div>
                  <div className="">
                  <button className="bg-white rounded-lg border border-dark text-sm p-2 me-2">
                      Save
                    </button>
                    <button className="bg-white rounded-lg border border-dark text-sm p-2">
                      Share
                    </button>
                  </div>
                </div>
                <div className="border-b border-customGray  my-5"></div>
            </div>
          </div>
        </div>
    </main>

       
    </div>
  )
}

export default App

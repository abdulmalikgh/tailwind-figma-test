import { useEffect, useState } from "react";
import './assets/scrollbar.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import DashboardCard from "./components/DashboardCard";
import { TiThMenu } from "react-icons/ti";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setSidebarOpen(false);
      setIsSmallScreen(true)
    }
    if (window.innerWidth > 767) {
      setIsSmallScreen(false)
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 

  return (
    <div className="min-h-screen flex flex-col font-inter">
    {/* Header */}
    <header className="h-[80px] border-b px-5 border-customGray fixed top-0 right-0 left-0 z-10 bg-white">
      <div className="mx-auto flex items-center h-full">
        <h1 className="text-lg font-bold flex items-center">
          <button className="flex md:hidden" onClick={toggleSidebar}>
            <TiThMenu size={24} color="#000"/>
          </button>
          {
              !isSidebarOpen && (
                <button
                  className="hidden md:flex"
                  onClick={toggleSidebar}
                >
                
                  <MdKeyboardDoubleArrowRight size={24} />
                </button>
              )
            }
          <img src="/logo.svg" alt="" />
        </h1>
        {/* Input here */}
        <div className="w-full flex items-center justify-center px-5">
        <div className="relative w-full max-w-[598px]">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img src="/fi-br-search.svg" alt="Search Icon" />
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
    {/* HEADER */}
    <main className="">
        <div className="flex">
          {/* Sidebar */}
          <div
            className={`fixed top-[80px] md:z-10 left-0 h-[calc(100vh-80px)] bg-secondary border-r border-customGray transition-transform transform w-[250px] ${
              isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }   p-5 overflow-y-auto`}
          >
            <div className="nav-content">
              <ul>
                <li className="cursor-pointer">
                  <div className="flex items-center ps-3 py-3 font-semibold text-[14px] leading-[16.94px]">
                    <div className="flex items-center w-full gap-3">
                      <img src="/compass.svg" alt="" />
                      Inspirations
                    </div>
                    
                    <button className="" onClick={toggleSidebar}>
                      <img src="/btn-nav-chevron.svg" alt="" />
                    </button>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <div className="flex items-center ps-3 py-3 font-semibold text-[14px] leading-[16.94px]">
                    <div className="flex items-center w-full gap-3">
                      <img src="/templates.svg" alt="" />
                      Templates
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <div className="flex items-center ps-3 py-3 font-semibold text-[14px] leading-[16.94px]">
                    <div className="flex items-center w-full gap-3">
                      <img src="/collections.svg" alt="" />
                      Collections
                    </div>
                  </div>
                </li>
                <li className="cursor-pointer">
                  <div className="flex items-center font-semibold text-[14px] leading-[16.94px] h-[46px] rounded-lg bg-gradient-to-b from-customPurple to-customPurpleDark p-[1px]">
                    <div className="flex items-center w-full gap-3 h-full bg-secondary rounded-lg ps-3">
                      <img src="/brands.svg" alt="" />
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
                  <li className="flex items-center gap-5 text-sm py-1.5 px-5 cursor-pointer">
                    <span>Hidden gems</span>
                    <img src="/tag-pro.svg" alt="" />
                  </li>
                  <li className="flex items-center gap-5 text-sm py-1.5 px-5 cursor-pointer">
                    <span>Evergreen ads</span>
                    <img src="/tag-pro.svg" alt="" />
                  </li>
                  <li className="flex items-center gap-5 text-sm py-1.5 px-5 cursor-pointer">
                    <span>Testing lab</span>
                    <img src="/tag-pro.svg" alt="" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-b border-customGray w-[190px] my-4"></div>
            <div className="mb-12">
              <div className="flex justify-between mb-3 ps-3">
                <h4 className="text-sm text-textMuted">Saved</h4>
                <button>
                  <img src="/add-collection.svg" alt="" />
                </button>
              </div>

              <div className="ms-5 h-[220px] overflow-auto scrollbar-left">
                  <ul>
                    <li className="cursor-pointer text-sm py-2.5 px-5">
                      All Saved
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="/dots-expand.svg" alt="" />
                    </li>
                    <li className="cursor-pointer text-sm flex justify-between py-2 px-5">
                      <span>Board Name</span>
                      <img src="/dots-expand.svg" alt="" />
                    </li>
                  </ul>
              </div>
              <div className="text-sm mt-3">View all boards</div>
            </div>
            <div className="border-b border-customGray w-[190px] my-3"></div>
            <div className="">
              <ul>
                <li className="cursor-pointer text-base pb-2">Settings</li>
                <li className="cursor-pointer text-base pb-2">Help & Feedback</li>
                <li className="cursor-pointer text-base">Join the CreativeOS Slack</li>
              </ul>
            </div>
            <div className="border-b border-customGray w-[190px] my-3"></div>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-10 w-10 rounded-full bg-customPurple"></div>
              <p>My Account</p>
            </div>
          </div>

          {/* Main Content */}
          <div className={`flex flex-col mt-[80px] transition-all duration-300 p-5 ${
            isSidebarOpen && !isSmallScreen ? 'ml-[250px] w-[calc(100vw-250px)]' : 'w-full'
          }`}
          >
          
          <div className="w-full flex-1 justify-between border-b border-customGray pb-5 mb-5"> 
            <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <button className="bg-white rounded-lg border border-dark text-sm p-2">
                    Back
                  </button>
                  <span className="text-xl bg-gradient-to-b font-[600px] from-customPurple to-customPurpleDark inline-block text-transparent bg-clip-text">Brand name</span>
                </div>
                <div className="hidden lg:flex items-center gap-5">
                  <span>Show:</span>
                <div className="flex items-center gap-5">
                  <button className="flex items-center rounded-lg border border-dark text-sm px-3 py-2 gap-2"><img src="/filter-icons.svg" alt="" /> <span className="hidden min-1220:block">Templates</span> <img src="" alt="" /></button>
                    <button className="flex items-center rounded-lg border border-dark text-sm px-3 py-2 gap-2"><img src="/filter-icons (1).svg" alt="" /><span className="hidden min-1220:block">Email</span><img src="/tag-pro.svg" /></button>
                    <button className="flex items-center rounded-lg border border-dark text-sm px-3 py-2 gap-2"><img src="/filter-icons (2).svg" alt="" /><span className="hidden min-1220:block">Landers</span><img src="/tag-pro.svg" /></button>
                    <button className="flex items-center rounded-lg bg-gradient-to-b  from-customPurple to-customPurpleDark text-white text-sm px-3 py-2 gap-2"><img src="/filter-icons (3).svg" alt="" /><span><span className="hidden min-1220:block">Funnel</span></span><img src="/tag-pro.svg" /></button>
                </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-white rounded-lg border border-dark text-sm p-2 ">
                    Save
                  </button>
                  <button className="bg-white rounded-lg border border-dark text-sm p-2">
                    Share
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-5 max-width">
              <DashboardCard />
              <DashboardCard />
            </div>
            <div className="flex flex-wrap gap-5 max-width mt-5">
              <DashboardCard />
              <DashboardCard />
            </div>
          </div>
        </div>
    </main>


       
    </div>
  )
}

export default App

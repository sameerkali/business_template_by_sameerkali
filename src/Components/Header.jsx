import React from 'react'
import UpperHeader from './UpperHeader';

const Header = () => {
    return (
        <div>
          <UpperHeader />
          <header className="bg-gray-100  py-4 px-36">
            <div className="container mx-auto flex justify-between items-center">
              <div className="text-black text-lg font-bold">ultraNet</div>
              <nav className="text-white">
                <ul className="flex">
                  <li className="mr-4 text-black">HOME</li>
                  <li className="mr-4 text-black">ABOUT US</li>
                  <li className="mr-4 text-black">SERVICES</li>
                  <li className="mr-4 text-black">PACKAGE STYLES</li>
                  <li className="mr-4 text-black">SUPPORT</li>
                  <li className="mr-4 text-black">CONTACTS</li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
      );
}

export default Header
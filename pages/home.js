import WR1 from "../public/Rolexitem.png";
import Image from 'next/image';


export default function home (){
return(
    <div >
        <div className="p-10">

          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image className="w-max" src={WR1} alt="Mountain" />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Warrenty Card</div>
              <p className="text-gray-700 text-base">
                Warrenty for- ROLEX DAYTONA
                Expiring- 26th February 2025
                Transaction ID : 0xac87eabev773hvuh38hv
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">ROLEX</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">26-2-2025</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">5/8</span>
            </div>
          </div>
        </div>

      </div>
)
}
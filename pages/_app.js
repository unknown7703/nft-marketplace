import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <div className="flex border-b p-2 bg-blue-600 ">
      <div className=" ml-6 mr-4">
        <Image src={Logo} alt="Picture of the author"
          width="45px"
          height="45px" />
      </div>

      <div className=" w-1/2 ml-6 italic">
        <Link href="/">
          <a className="text-3xl font-bold text-[#f3f4f6]">NFT-Kart</a>
        </Link>
      </div>

      <div className="w-1/3  flex justify-end mt-4 ml-6 ">
        <Link href="/">
          <a className="ml-6 text-[#facc15]">Home</a>
        </Link>
        <Link href="/create-item">
          <a className="ml-6 text-[#facc15]">My Warrenties</a>
        </Link>
        <Link href="/my-assets">
          <a className="ml-6 text-[#facc15]">Seller Login</a>
        </Link>
        <Link href="/creator-daskboard">
          <a className="ml-6 text-[#facc15]">More</a>
        </Link>
      </div>
    </div>
    <div>

    </div>
    

    <Component {...pageProps} />
  </div>
  );
}

export default MyApp;

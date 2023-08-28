import Link from "next/link";
export const Footer = () => {
  return (
    <div className="" style={{ backgroundColor: "#403E56" }}>
      <div className="px-5 md:px-20 flex flex-col md:flex-row py-10 md:py-20">
        <div className="menu mr-20 ">
          <h4 className="text-lg font-semibold text-white">MENU</h4>
          <ul className="mt-2 text-white text-sm">
            <li className="py-3">
              <Link href="/">Home</Link>
            </li>
            <li className="py-3">
              <Link href="#">About Us</Link>
            </li>
            <li className="py-3">
              <Link href="#">Contact</Link>
            </li>
            <li className="py-3">
              <Link href="#">FAQ</Link>
            </li>
          </ul>
        </div>
        {/* <div className="legal mr-20 mt-5 md:mt-0">
          <h4 className="text-lg font-semibold text-white">LEGAL</h4>
          <ul className="mt-2 text-white text-sm">
            <li className="py-3">
              <Link href="#">Term Of Service</Link>
            </li>
            <li className="py-3">
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div> */}
        <div className="legal mt-5 md:mt-0">
          <h4 className="text-lg font-semibold text-white">Social</h4>
          <ul className="mt-2 text-white text-sm flex">
            <li className="mr-3">
              <Link href="https://www.facebook.com/weloveearth" target="_blank">
                <img
                  src="/assets/sosmed/facebook.svg"
                  className="h-5 w-5"
                  alt=""
                />
              </Link>
            </li>
            <li className="mr-3">
              <Link href="#">
                <img
                  src="/assets/sosmed/instagram.svg"
                  className="h-6 w-6"
                  alt=""
                />
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/">
                <img
                  src="/assets/sosmed/twitter.svg"
                  className="h-6 w-6"
                  alt=""
                />
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-0 md:ml-auto mt-5 md:mt-0">
          <h2 className="text-2xl font-bold text-white">Exploring England.</h2>
        </div>
      </div>
    </div>
  );
};

import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bg-footer_bg_color ">
      <div className="flex flex-col md:flex-row p-6 container m-[auto] w-[60%]">
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/image.png"
            alt="ZBC Logo"
            className="h-24  "
          />
        </div>

        <div className="  p-5 flex-1">
          <h4 className="text-white text-semi_heading_color  mb-5 font-semibold">
            Useful Links
          </h4>
          <ul className="flex flex-col space-y-4 text-white">
            <li className="t">
              <a href="/" className=" hover:text-gray-300">
                <p className="text-white font-heading_secondary  text-sm">
                  Home
                </p>
              </a>
            </li>
            <li className="">
              <a
                href="/services"
                className="text-white font-heading_secondary hover:text-gray-300"
              >
                <p className="text-white font-heading_secondary  text-sm">
                  Services
                </p>
              </a>
            </li>
            <li className="">
              <a
                href="/ministries"
                className="text-white font-heading_secondary  hover:text-gray-300"
              >
                <p className="text-white font-heading_secondary  text-sm">
                  Ministries
                </p>
              </a>
            </li>
            <li className="">
              <a
                href="/contact"
                className="text-white font-heading_secondary  hover:text-gray-300"
              >
                <p className="text-white font-heading_secondary  text-sm">
                  Contact
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div className="  p-5 flex-1">
          <h4 className="text-white text-semi_heading_color  mb-5 font-semibold">
            Meet the Team
          </h4>
          <ul className="flex flex-col space-y-4 text-white">
            <li className="t">
              <a href="/" className=" hover:text-gray-300">
                <p className="text-white font-heading_secondary  text-sm">
                  Resident Pastor
                </p>
              </a>
            </li>
            <li className="">
              <a
                href="/services"
                className="text-white font-heading_secondary hover:text-gray-300"
              >
                <p className="text-white font-heading_secondary  text-sm">
                  Chief Deacon
                </p>
              </a>
            </li>
            <li className="">
              <a
                href="/ministries"
                className="text-white font-heading_secondary  hover:text-gray-300"
              >
                <p className="text-white font-heading_secondary  text-sm">
                  Chief Deaconess
                </p>
              </a>
            </li>
          </ul>
        </div>
        <div className=" p-5 gap-4  flex-1 bg-[#404048]">
          <div>
            <p className="font-heading_secondary text-white font-semibold text-sm mb-5">
              For More information
            </p>
            <p className="text-white font-heading_secondary">
              Zomba Baptist Church
            </p>
            <p className="text-white font-heading_secondary">
              Post Office Box 000
            </p>
            <p className="text-white font-heading_secondary">Zomba, Malawi</p>
          </div>

          <div className="font-heading_secondary text-white font-semibold text-xl mt-6">
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/zombabaptist"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADK0lEQVR4nO2Zz08TQRTHNzM0MQHixaMnI2jE4Mmr/4A/okej3r0oAn+AiYke9IYkpDNFDAkRqokHL4bEEzFelIqAJP5IDPvetrXQAhXSsrRjplYMboGdnd0th/0m79TN7Pcz8+bN7KthRIoUKZJUbNg8Qxj0UYZJwnCGcsxTjpv1yBOGH2u/cbNXPmscCCVy7YRDP2XwmXIUSsFgXgIbg9m28I3fFS1yJinDZWXjDhBcIgzvyDHDMR/Hk4RjStv4f0EYThsJOBGodxqHS5RD0W/z9F9arVEOFwMxTxLWDcrBDsw8/xtgE25dD2LmQzCP2xCUwQV/3A+ZHX+WVs9U24glOiey4uzLn6LreVZ0jGfE4afWXhBFud98qDbeN2wLR3H1TV5Mpctis1IVjXR5cnn3jc3hg1Z1qpVKj+YPDVti4vuG2E9X9gCoQcSxx5v70XQr5ZDzCvBwpriveTcA8pyQB6aH2Yd+r+aPjmVEeZeUUQbg8oyAPmUAT9eDevS+W2lotlCuiPupNXFzqrAdx55l9h+TwbySeXnZ0qk4498a5/65VznPY8YS6dOhpI+Mt5myw/zs8qbn8ajqZpbXXp2XzeVtB8DY1w0tAMpwXGEF8JPOyxYKToDHc7/0VoBjSmUFlvwGGNAEoBxyKgDlgweApUAA7k2viXypsiO2GhwBpa2q47l8qSK6X2QDAXCdQo9cnriNVBVCtI9Y/qeQyibWAfhR3ApsEyfDAJiEUkBlVLZHQgAYUNjYhONt1wAxbnarfKgcGU3viC8rzirEFtYdz7U+cZv/KGIs3eUaoL4KswolLtgyyhQvc6ppFDQA4WZvqB80vgIwXPLcvZMds2YDEIa3DK2PeobTzQIgHN4bSUENLfHF45TBavgA4ENbpS7Z7lNpbOkDgE0T5nnDT8l2n1sIPQCwCcNrRhCS7T43XTrPAAxWfZ95hxh0yo6Z3wBEbtghs8MIRbI6xbFnt2u3GgDkaqVSu9p40WC2TZ7YhMOcKoC8qhB5wjblL6YGkpet2qpwnHhtlgqLRbuybleFDLNoVx6kVi15Ja61R4atU832GylSJONg6DekIcfGE7hs2QAAAABJRU5ErkJggg=="
                  alt="facebook-new"
                  className="w-10 h-10 hover:scale-110 transition-transform ease-in duration-200 cursor-pointer"
                />
              </a>
              <a
                href="https://www.facebook.com/zombabaptist"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEB0lEQVR4nO1ZXWwNQRSe7NwSIiRFJBSJRwkvQkg8efDilZA23kiIFw8SQqISCULEA1INESJiZrlFaTUtikQJTUVLWom/ItrbP9WZ3e7eu7tHZm9dP73dne1u7yW5X3KSJrud+b6z55w5cy5CBRRQQHiogGOqvkqhfK9CeRwT/hpTPoApS6aNDyiEvxLPxDsxoq1E5aCgvOOKPh8TdgQT9gVTDoGMsM+YsMMorpXknrg6NBsTVokJMwMTHy3ExIRVoMtDs3LCXVFZKSa8PzTxUUJ4n0LYpoljXglFmLKzkROnfxs7I/aKlnw1TFUoq5148tw1hbIasWc05CuhKJfkcUYEb0AqTArNPzdhw8dK8IpQ5BXCyvJGno58CZVtHB/7qu8zMeW9+RaACe8fV4l163y+ydOMnQ7GPq6VRHJIjdhklcOuFya0D9mQtAF6DAeqPqdgRYPuPp92jcOmJgMOtJlj5YKJVH1BEO8f8SK0v83MbO5nMcpdstlg2gD3ui3QLYC2QRvm3NA8QokdlmNfDorbp3iQests6DMdWFrnL2LLMwP8cLfbgq3PDNjZYnoJ+CKaRl/+oqv0IzWUctyNE4YDaxqHPd992meDDDo1BxZWa95fU9VW+AoQ7a6fgKZeK7Ox5QDsfWm6oZLtXZ49ev6A7QAsuuVNXpii8j3+Agir8lto/ePRYfGwx4Ll9aNDSgaWA1L5pBB+VUIAfyWz2IUP2V37IGHB9mYDltzRYXpcTkDCcGQFtPoKkGmVGxMWbHtuQF3Xr1AKg9ZvtpQAcbBKCPCv//cT0RD/iUsfU3ICCDMiESDOABG3UaHsiRGlALnb1rpHw9BrhFehWQCzr2vRhZBsEk+5ymFxrQ41X8OF0/GOpCx5uSSWKaPCSKdEgffB96QDc29Ke1+yjEocZMJmxDU4/z4FYYJoY5Nk7P8UQPluXwFi6BRk0WX1OhzrSMKLARu+JeXlnHgjHzp4xGJEWy7XzFH2Keji4uCqlcyHg6+TY7YeeOwK1Ck9zROtq9dion8XjdfaB8Owr9WUbtjEPWDz02BhgzPGDqEoLjSr7+lQ32UFin3R0B1tT0JxlXzC4j+9byBVmycvIP0VKrwWnV+twY5mEy5+SEHLgO32M4advqQITz/vt+HcuxSUPjHchB+f1/mIAH4SBYY6WPyPXOr7xj03FbPK/AtgG1AYiFllHr1/CoWGClih7HquySuE3UaNEEMRDndrckaeslvRDXd/H6/7VKbIwqYxKs9ngZhVTkh1IrwndMIGnJueFgdMeOLMcOu8OliMcg5Vm5duO4L3Tun/YYcCn7ATgnJQxNBJzG1Ezy4uHu7NLv0Dnin+Vih/6T6jfLfbVf4TP7MWUAD67/EDlwi7n4ewC6gAAAAASUVORK5CYII="
                  alt="twitter-circled--v1"
                  className="w-10 h-10 hover:scale-110 transition-transform ease-in duration-200 cursor-pointer"
                />
              </a>
              <a>
                <img
                  src="data:image/png;base64,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"
                  alt="instagram-new--v1"
                  className="w-10 h-10 hover:scale-110 transition-transform ease-in duration-200 cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-[80%] md:w-[40%] mx-auto border-black mt-1 mb-5" />
      <p className="w-full text-white text-center px-4 pb-4 font-bold text-sm md:text-base font-heading_secondary">
        © 2024 Zomba Baptist Church. All rights reserved. Join us in spreading
        love and hope through our faith and community initiatives.
      </p>
    </footer>
  );
};
export default FooterComponent;

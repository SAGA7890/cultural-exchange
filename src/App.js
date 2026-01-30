import {
  FaHome,
  FaUser,
  FaCalendarAlt,
  FaEnvelope,
  FaGlobe,
  FaSmile,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function App() {
  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 md:px-[80px] pt-[50px] pb-[50px]">

      {/* MAIN HEADING – NOTO SERIF */}
      <h1 className="serif-heading text-[26px] sm:text-[30px] leading-[33px] text-[#1A1A1A] mb-[50px]">
        Cultural Exchange & Archive Collaboration
      </h1>

      {/* MAIN LAYOUT */}
      <div className="flex flex-col md:flex-row gap-[40px] md:gap-[60px] items-start">

        {/* LEFT SECTION */}
        <div className="w-full md:w-[60%]">

          {/* SUB HEADING – NOTO SERIF */}
          <h2 className="serif-heading text-[20px] font-semibold text-black  mb-[35px]">
            Volunteering & Employment Details
          </h2>

          {/* LEFT CONTENT – MONTSERRAT */}
          <div className="body-text">

            {/* Provisions */}
            <div className="flex gap-[15px] mb-[28px]">
              <div className="w-[45px] h-[45px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <FaHome className="text-orange-500 text-[18px]" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                  Provisions Offered by the Centre :
                </p>
                <p className="text-[15px] leading-[24px] text-[#1A1A1A]">
                  We provide accommodation for devotees/students in exchange for
                  their collaboration.
                </p>
              </div>
            </div>

            {/* Type */}
            <div className="flex gap-[15px] mb-[28px]">
              <div className="w-[45px] h-[45px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <FaUser className="text-orange-500 text-[18px]" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                  Type :
                </p>
                <p className="text-[15px] leading-[24px] text-[#1A1A1A]">
                  Unpaid / Short-term Residential Exchange
                </p>
              </div>
            </div>

            {/* Deadline */}
            <div className="flex gap-[15px] mb-[30px]">
              <div className="w-[45px] h-[45px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                <FaCalendarAlt className="text-orange-500 text-[18px]" />
              </div>
              <div>
                <p className="text-[15px] font-semibold text-[#1A1A1A] mb-1">
                  Application Deadline :
                </p>
                <p className="text-[15px] text-[#1A1A1A]">
                  2026-02-20
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="text-[15px] leading-[24px] text-[#213547] max-w-[620px]">
              We are looking for devotees of Sri Aurobindo and The Mother to join us
              for a period of mutual collaboration. We seek to connect with other
              centers to share and organize materials related to our Masters. As
              part of this exchange, we offer to teach the Italian language and
              traditional hand-work (crafts). Volunteers will assist in organizing
              our spiritual materials and participate in the daily life of our APS,
              fostering a bridge between Italy and the global community related to
              Sri Aurobindo and The Mother.
            </p>

          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="w-full md:w-[40%] md:mt-[30px] border border-gray-200 rounded-2xl px-[28px] py-[28px] body-text">


          <h3 className="serif-heading text-[20px] text-[#1A1A1A] mb-[28px]">
            Contact Info of the Centre
          </h3>

          {/* Name */}
          <div className="flex items-start gap-[14px] mb-[22px]">
            <div className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <FaUser className="text-orange-500 text-[16px]" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1A1A1A] mb-[2px]">
                Name :
              </p>
              <a
                href="https://www.centrodieducazioneintegrale.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-orange-600 hover:underline"
              >
                Centro Sri Aurobindo e Mère APS - Italy
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-[14px] mb-[22px]">
            <div className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <FaHome className="text-orange-500 text-[16px]" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1A1A1A] mb-[2px]">
                Address :
              </p>
              <p className="text-[15px] leading-[21px] text-[#1A1A1A]">
                Via Rio d'Orzo, 535, Savignano sul Panaro,<br />
                Modena, Italy - 41056
              </p>
            </div>
          </div>

          {/* Mail */}
          <div className="flex items-start gap-[14px] mb-[22px]">
            <div className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <FaEnvelope className="text-orange-500 text-[16px]" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1A1A1A] mb-[2px]">
                Mail Id :
              </p>
              <p className="text-[15px] text-[#1A1A1A]">
                sabina.germoglio@gmail.com
              </p>
            </div>
          </div>

          {/* Website */}
          <div className="flex items-start gap-[14px] mb-[22px]">
            <div className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <FaGlobe className="text-orange-500 text-[16px]" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1A1A1A] mb-[2px]">
                Website :
              </p>
              <a
                href="https://www.centrodieducazioneintegrale.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-orange-600 hover:underline break-all"
              >
                https://www.centrodieducazioneintegrale.com/
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="flex items-start gap-[14px]">
            <div className="w-[40px] h-[40px] rounded-full bg-orange-100 flex items-center justify-center shrink-0">
              <FaSmile className="text-orange-500 text-[16px]" />
            </div>
            <div>
              <p className="text-[15px] font-semibold text-[#1A1A1A] mb-[6px]">
                Social Media Links
              </p>
              <div className="flex gap-[10px] text-orange-600 text-[15px]">
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

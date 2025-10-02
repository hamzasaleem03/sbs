"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

type SharePopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SharePopup({ isOpen, onClose }: SharePopupProps) {
  //   const shareLink = "https://trollercat.io/buy?ref=TCAT123";

  if (!isOpen) return null;

  return (
    <>
      <div className="border border-[#f5e65e] fixed top-0 bottom-0 my-auto left-0 right-0 mx-auto bg-zinc-900 text-white p-5 rounded-lg md:w-[400px] w-[300px] shadow-xl z-[9999] h-[150px]">
        <div className="myflex justify-between items-center mb-4 al">
          <h3 className="text-lg font-semibold al">Share link</h3>
          <button onClick={onClose}>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-[#f5e65e] text-xl"
            />
          </button>
        </div>
        <div className="myflex justify-around mt-6 gap-4">
          <a
            href={`mailto:sbs.structures@gmail.com`}
            className="myflex items-center bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg w-full justify-center gap-2 al"
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
            <span className="text-sm al">Email</span>
          </a>
          <a
            href={`https://wa.me/447401650600`}
            target="_blank"
            rel="noopener noreferrer"
            className="myflex items-center bg-zinc-800 hover:bg-zinc-700 p-4 rounded-lg w-full justify-center gap-2 al"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-2xl text-green-400"
            />
            <span className="text-sm al">WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}

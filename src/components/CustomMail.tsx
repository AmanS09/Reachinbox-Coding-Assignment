import axios from "axios";
import { useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import {
  FaCaretDown,
  FaEye,
  FaImage,
  FaRegSmile,
  FaUserMinus,
} from "react-icons/fa";
import { IoMdCode } from "react-icons/io";
import { IoLinkSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TbSquareLetterA } from "react-icons/tb";



function CustomMail({ threadId, onClose }: any) {
  const [replyData, setReplyData] = useState({
    to: "",
    from: "",
    subject: "",
    body: "",
  });

  const handleSendReply = async () => {
    // Make a POST request to send the reply
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        `https://hiring.reachinbox.xyz/api/v1/onebox/reply/${threadId}`,
        {
          to: replyData.to,
          from: replyData.from,
          subject: replyData.subject,
          body: replyData.body,
        },

        {
          headers: {
            Authorization: token,
          },
        }
      );
    } catch {
      console.log("Reply sent successfully");
      onClose(); // Close the CustomMail component
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReplyData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-400/25 fixed top-0 left-0 flex justify-center items-center h-full w-full z-20">
      <div className="bg-[#141517] w-1/2 h-4/5 rounded-lg border border-[#41464B]">
        <div className="flex justify-between items-center px-4 bg-[#23272C] rounded-t-lg py-2 border-b border-[#41464B]">
          <div className="pl-4 text-sm">Reply</div>
          <div onClick={onClose}>
            {" "}
            {/* Close button */}
            <RxCross2 className="text-xl cursor-pointer" />
          </div>
        </div>
        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">To :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Recipient's Email"
            name="to"
            value={replyData.to}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div id="2" className="text-[#BAB9BD]">From :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Your Email"
            name="from"
            value={replyData.from}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] pl-8">
          <div className="text-[#BAB9BD]">Subject :</div>
          <input
            className="bg-transparent ml-4"
            placeholder="Subject"
            name="subject"
            value={replyData.subject}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex text-sm py-2 border-b border-[#41464B] px-4 pr-8 pt-8 h-2/3">
          <textarea
            className="bg-transparent ml-4 w-full h-full"
            placeholder="Message Body"
            name="body"
            value={replyData.body}
            onChange={handleTextAreaChange}
          />
        </div>

        <div className="flex space-x-8 items-center h-16 ml-8">
          <div
            className="bg-gradient-to-r from-[#4B63DD] to-[#0524BFFC] px-5 py-2 rounded-md flex items-center cursor-pointer"
            onClick={handleSendReply}
          >
            Send <FaCaretDown className="ml-4" />
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <BsLightningChargeFill className="mr-3" />
            Variables
          </div>
          <div className="flex items-center text-[#ADADAD]">
            <FaEye className="mr-3" />
            Preview Email
          </div>
          <div className="flex space-x-3 text-xl text-[#ADADAD]">
            <div>
              <TbSquareLetterA />
            </div>
            <div>
              <IoLinkSharp />
            </div>
            <div>
              <FaImage />
            </div>
            <div>
              <FaRegSmile />
            </div>
            <div>
              <FaUserMinus />
            </div>
            <div>
              <IoMdCode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomMail;

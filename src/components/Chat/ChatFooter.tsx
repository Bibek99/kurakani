import React, { useState } from "react";
import { AiFillPlusCircle, AiFillLike } from "react-icons/ai";
import { BsImage, BsEmojiSmileFill, BsSendFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";

function ChatFooter() {
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: any) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    console.log("hi");
  };
  return (
    <div className="basis-[8%] border-t-2 p-2 flex items-center gap-4">
      {message.length === 0 && (
        <>
          <AiFillPlusCircle size={20} className="cursor-pointer text-primary" />
          <BsImage size={20} className="cursor-pointer text-primary" />
        </>
      )}
      <div className="relative w-full">
        <BsEmojiSmileFill
          size={20}
          className="cursor-pointer absolute top-[6px] right-2 text-primary"
        />
        <form onSubmit={sendMessage}>
          <input
            type="text"
            className="p-2 w-full h-8 bg-gray-100 rounded-full transition-all focus:outline-none"
            placeholder="Aa"
            onChange={handleChange}
          />
        </form>
      </div>
      {message.length === 0 ? (
        <AiFillLike size={28} className="cursor-pointer text-primary" />
      ) : (
        <IoMdSend
          size={28}
          className="cursor-pointer text-primary"
          onClick={sendMessage}
        />
      )}
    </div>
  );
}

export default ChatFooter;
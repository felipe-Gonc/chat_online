import { SendHorizonal } from "lucide-react";
import React from "react";

const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="input w-full bg-transparent focus:bg-base-100/40 input-bordered h-10"
          placeholder="Enviar mensagem"
        />
        <button type="submit" className="absolute hover:text-red-600 text-red-500 inset-y-0 end-0 flex items-center pe-3">
            <SendHorizonal/>
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

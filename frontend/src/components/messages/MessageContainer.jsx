import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { MessagesSquare } from "lucide-react";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="md:min-w-[450px] flex flex-col">
            <>
              <div className="bg-red-500 px-4 py-2 mb-2">
                <span className="label-text text-gray-300">Para: </span>
                <span className="text-white font-bold"> João Pedro</span>
              </div>
              <Messages />
              <MessageInput />
            </>
          </div>
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Bem vindo João</p>
        <p>Selecione uma mensagem</p>
        <MessagesSquare className="size3 md:size-9 text-center" />
      </div>
    </div>
  );
};
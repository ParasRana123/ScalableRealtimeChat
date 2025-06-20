'use client'
import React, { createContext, useCallback } from "react";

interface SocketProviderProps {
  children?: React.ReactNode;
}

interface ISocketContext {
    sendMessage: (msg: string) => any;
}

const SocketContext = createContext<ISocketContext | null>(null);

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {

    const sendMessage: ISocketContext['sendMessage'] = useCallback((msg) => {
        console.log("Send Message" , msg);
    } , [])

  return (
    <SocketContext.Provider value={{ sendMessage }}>
      {children}
    </SocketContext.Provider>
  );
};

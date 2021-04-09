import React, { useState } from 'react';

interface IContextProps {
  config: {};
  setConfig: ({}: any) => void;
}
// 1. 使用 createContext 创建上下文
export const UserContext = React.createContext({} as IContextProps);

// 2. 创建 Provider
export const UserProvider = (props) => {
  const [config, setConfig] = useState({});

  return (
    <UserContext.Provider value={{ config, setConfig }}>
      {props.children}
    </UserContext.Provider>
  );
};

// 3. 创建 Consumer
export const UseConsumer = UserContext.Consumer;

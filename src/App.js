import React from 'react';
import './App.css';
import TodoDashboard from "./views/TodoDashboard/TodoDashboard";
import LoginPage from "./components/Auth/LoginPage";
import {useTodoList} from "./hooks/useTodoList";
import {useUser} from "./hooks/useUser";

function App() {

  const todoHook = useTodoList();
  const userHook = useUser(
      {
          isLoggedIn: false,
          email: "blazinaj@hotmail.com",
          firstName: "Jacob",
          lastName: "Blazina",
          avatarSrc: "//filepath here/",
          //avatarIcon:  <Image avatar /* src="/filepath" */ />
      }
  );

  return (
    <div>
        {
            userHook.isLoggedIn !== false ?
                <TodoDashboard todoHook={todoHook} userHook={userHook}/>
                :
                <LoginPage userHook={userHook}/>
        }
    </div>
  );
}

export default App;

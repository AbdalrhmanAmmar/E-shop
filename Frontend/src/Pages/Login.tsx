import { Fragment, useState } from "react";
import LoginList from "../Lists/LoginList";
import Input from "../UI_Shared/Input";
import Label from "../UI_Shared/Label";

interface ILogin {
  Email: string;
  Password: string;
}

function Login() {
  const [Login, setLogin] = useState<ILogin>({
    Email: "",
    Password: "",
  });
  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-shite py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="">
            {LoginList.map((input, index) => (
              <Fragment key={index}>
                <Label htmlFor={input.id}>{input.name}</Label>
                <Input
                  type={input.type}
                  name={input.name}
                  id={input.id}
                  placeholder={input.placeholder}
                  value={Login[input.name]}
                />
              </Fragment>
            ))}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

import { Fragment, useState } from "react";
import LoginList from "../../Lists/LoginList";
import Input from "../../UI_Shared/Input";
import Label from "../../UI_Shared/Label";
import Button from "../../UI_Shared/Button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

interface ILogin {
  Email: string;
  Password: string;
}

function Login() {
  const [Login, setLogin] = useState<ILogin>({
    Email: "",
    Password: "",
  });

  const [Visible, setVisible] = useState(false);

  return (
    <div className="min-h-screen w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-50">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Login to Your Account
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
        <div className="bg-shite py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" action="">
            <div>
              {LoginList.map((input, index) => (
                <Fragment key={index}>
                  <Label htmlFor={input.id}>{input.name}</Label>
                  <div className="mt-1 relative">
                    <Input
                      type={
                        input.name === "password"
                          ? Visible
                            ? "text"
                            : "password"
                          : input.type
                      }
                      name={input.name}
                      id={input.id}
                      value={Login[input.name]}
                    />
                    {input.name === "password" ? (
                      Visible ? (
                        <AiOutlineEye
                          className="absolute right-2 top-2"
                          size={25}
                          onClick={() => setVisible(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute right-2 top-2"
                          size={25}
                          onClick={() => setVisible(true)}
                        />
                      )
                    ) : null}
                  </div>
                </Fragment>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-row items-center">
                <Input
                  className="w-4 h-4 m-auto "
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                />
                <Label variant={"checkbox"} htmlFor="remember-me">
                  Remember-me
                </Label>
              </div>
              <a
                href=""
                className="font-medium text-blue-600 hover:text-blue-500 text-sm"
              >
                Forget Your Password
              </a>
            </div>

            <Button type="submit">Submit</Button>

            <div className="flex flex-row gap-2">
              <h4>Not have anh account?</h4>
              <Link to="/Signup" className="text-blue-600 ">
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

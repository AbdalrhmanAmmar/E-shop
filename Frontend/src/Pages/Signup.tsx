import { Fragment, useState } from "react";
import SignUpList from "../Lists/SignUpList";
import Input from "../UI_Shared/Input";
import Label from "../UI_Shared/Label";
import Button from "../UI_Shared/Button";

interface ISignup {
  Fullname: string;
  Email: string;
  password: string;
}

// py-12 sm:px-6 lg:px-8 bg-slate-50  sm:mx-auto sm:w-full sm:max-w-md
function Signup() {
  const [Signup, setSignup] = useState<ISignup>({
    Fullname: "",
    Email: "",
    password: "",
  });
  return (
    <div className="min-h-screen flex flex-col justify-center bg-state-50 py-12 sm:px-6 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register as a new User
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-shite py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="">
              <div>
                {SignUpList.map((input, index) => (
                  <Fragment key={index}>
                    <Label htmlFor={input.id}>{input.name}</Label>

                    <Input
                      type={input.type}
                      name={input.name}
                      id={input.id}
                      placeholder={input.placeholder}
                    />
                  </Fragment>
                ))}
              </div>
              <Button>Submit</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

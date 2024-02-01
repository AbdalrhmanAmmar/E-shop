import { ChangeEvent, Fragment, useState } from "react";
import SignUpList from "../../Lists/SignUpList";
import Input from "../../UI_Shared/Input";
import Label from "../../UI_Shared/Label";
import Button from "../../UI_Shared/Button";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";

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
  const [Visible, setVisible] = useState<boolean>(false);
  const [Avatar, setAvatar] = useState<File | null>(null);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setAvatar(file);
    }
  };
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

                    <div className="mt-1 relative">
                      <Input
                        type={
                          input.name === "password"
                            ? Visible
                              ? "Text"
                              : "password"
                            : input.type
                        }
                        name={input.name}
                        id={input.id}
                      />
                      {input.name === "password" ? (
                        Visible ? (
                          <AiOutlineEye
                            className="absolute top-2 right-2"
                            size={25}
                            onClick={() => setVisible(false)}
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            className="absolute top-2 right-2"
                            size={25}
                            onClick={() => setVisible(true)}
                          />
                        )
                      ) : null}
                    </div>
                  </Fragment>
                ))}
              </div>
              <div className="mt-2 flex items-center">
                <span className="inline-block h-8 w-8 rounded-full ">
                  {Avatar ? (
                    <img
                      src={URL.createObjectURL(Avatar)}
                      alt="Avatar"
                      className="h-full w-full rounded-full object-cover"
                    />
                  ) : (
                    <RxAvatar className="h-8 w-8" />
                  )}
                </span>
                <Label variant={"Upload"} htmlFor="File-input">
                  <span>Upload a File</span>
                  <Input
                    type="file"
                    name="Avatar"
                    id="File-input"
                    accept=".jpg,.png,.jpeg"
                    onChange={handleFile}
                    className="sr-only"
                  />
                </Label>
              </div>

              <Button className="my-2">Submit</Button>
            </form>
            <div className=" flex gap-2 mt-3">
              <h4>Already have account ? </h4>
              <Link to="/Login" className="text-blue-600">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

'use client'
import { login } from "@/lib/actions/actions";
import { useFormState } from "react-dom";

const LoginForm = () => {

  const [state, formAction] = useFormState<any, FormData>(login, undefined)
  return (
    <div className="flex flex-col w-full  ">
      <form
        action={formAction}
        className="mt-10 border-2 border-black  flex mx-auto flex-col gap-y-3 max-w-[300px]"
      >
        <input type="text" name="username" required placeholder="username" />
        <input
          type="password"
          name="password"
          required
          placeholder="password"
        />
        <button>Login</button>
        {state?.error && <p>{state.error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;

import { SignUp } from "@clerk/nextjs";
import "../../sign-in/[[...sign-in]]/signin.css";

export default function Page() {
  return (
    <div className="signin">
      <SignUp />;
    </div>
  );
}

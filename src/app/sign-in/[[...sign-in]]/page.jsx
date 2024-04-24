import { SignIn } from "@clerk/nextjs";
import "./signin.css";

export default function Page() {
  return (
    <div className="signin">
      <SignIn />
    </div>
  );
}

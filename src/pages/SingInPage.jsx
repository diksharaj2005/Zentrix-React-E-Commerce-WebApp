
import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 absolute z-50 w-full h-screen">
            <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
        </div>
    );
}

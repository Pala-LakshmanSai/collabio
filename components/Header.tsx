"use client";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
const Header = () => {
  const { user } = useUser();
  return (
    <div className="flex justify-between items-center p-5">
      {user && (
        <h1 className="text-2xl">
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}
      {/* Breadcurmbs */}
      <div>
        <SignedOut>
            <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
            <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
};
export default Header;

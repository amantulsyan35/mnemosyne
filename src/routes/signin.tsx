import { createFileRoute } from '@tanstack/react-router';
import { SignIn } from '@clerk/clerk-react';

export const Route = createFileRoute('/signin')({
  component: SignInPage,
});

function SignInPage() {
  return (
    <div className='dark flex justify-center items-center h-screen bg-background'>
      {/* Clerk's SignIn component */}
      <SignIn />
    </div>
  );
}

import { LoginForm } from "@/components/login/LoginForm";

export default function LoginPage() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome!</h1>
            <p className="text-sm text-muted-foreground">
              Choose your preferred sign in method
            </p>
          </div>
          <LoginForm />
        </div>
      </div>
    </section>
  );
}

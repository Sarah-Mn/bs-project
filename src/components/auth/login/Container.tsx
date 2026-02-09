import LoginForm from "./LoginForm";

const Container = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Container;

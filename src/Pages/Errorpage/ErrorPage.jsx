const ErrorPage = () => {
  return (
    <div className="h-screen grid  justify-center  items-center">
      <div>
        <h2 className="text-2xl "> Unexpected Application Error!</h2>
        <span className="text-xl ">
          404 Not Found 💿 Hey developer 👋 You can provide a way better UX{" "}
          <br />
          than this when your app throws errors by providing your own
          ErrorBoundary or errorElement prop on your route.
        </span>
      </div>
    </div>
  );
};

export default ErrorPage;

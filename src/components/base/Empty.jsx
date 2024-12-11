/* eslint-disable react/prop-types */
import Button from "./Button";

function Empty({ message }) {
  return (
    <div className="flex justify-center items-center flex-col pt-6">
      <h1 className="h1 mb-3">Empty</h1>
      {message ? (
        <p className="mb-5">{message}</p>
      ) : (
        <p className="mb-5">
          Please, be patient and try again or reload the window
        </p>
      )}
      <Button onClick={() => window.location.reload()}>Hard reload</Button>
    </div>
  );
}

export default Empty;

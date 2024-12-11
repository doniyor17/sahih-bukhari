/* eslint-disable react/prop-types */
function Empty({ message }) {
  return (
    <div className="flex justify-center items-center flex-col pt-6 text-colorDark">
      <h1 className="h1 mb-3">Error</h1>
      <p className="mb-5">{message}</p>
    </div>
  );
}

export default Empty;

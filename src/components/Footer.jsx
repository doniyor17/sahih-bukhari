/* eslint-disable react/prop-types */
function Footer({ styles }) {
  return (
    <footer className={`p-3 bg-colorTheme shadow-md` + " " + styles}>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
export default function Navbar() {
  return (
    <nav className="shadow-md p-4 md:mx-8 md:rounded-b-lg dark:bg-gray-800 dark:shadow-none">
      <div className="flex justify-between">
        <a href="/">
          <img
            className="max-h-10"
            src={window.matchMedia('(prefers-color-scheme: dark)').matches ? '/svg/long-dark.svg' : '/svg/long.svg'}
            alt="logo"
          />
        </a>
      </div>
    </nav>
  );
}

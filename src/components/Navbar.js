export default function Navbar() {
  return (
    <nav className="p-2 border-b border-gray-500 mb-1 dark:border-gray-800">
      <div className="flex justify-center">
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

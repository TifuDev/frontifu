export default function NotFound() {
  return (
    <div className="p-4 grid justify-items-center space-y-1">
      <img src="/404.svg" alt="Resource not found!" />
      <p className="text-center">{`Não consegui localizar a página '${window.location.pathname}' !`}</p>
      <a href="/">Voltar para a home</a>
    </div>
  );
}

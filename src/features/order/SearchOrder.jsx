
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) {
      setError('Please enter your order ID.');
      return;
    }

    if (!/^[a-zA-Z0-9]+$/.test(query)) {
      setError('Invalid order ID. Letters and numbers only.');
      return;
    }

    setError('');
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          setError('');
        }}
        required
        pattern="[a-zA-Z0-9]+"
        title="Invalid order ID. Letters and numbers only."
        aria-invalid={Boolean(error)}
        aria-describedby={error ? 'order-search-error' : undefined}
        className="w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />

      {error && (
        <p
          id="order-search-error"
          role="alert"
          className="absolute left-0 top-full z-50 mt-2 w-64 rounded-md bg-red-100 px-3 py-2 text-xs text-red-700 shadow-md"
        >
          {error}
        </p>
      )}
    </form>
  );
}

export default SearchOrder;

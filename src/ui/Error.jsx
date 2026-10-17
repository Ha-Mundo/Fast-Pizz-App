import { useRouteError } from 'react-router-dom';
import LinkButton from './LinkButton';

function Error() {
  const error = useRouteError();

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-semibold">
        Something went wrong 😢
      </h1>

      <p className="text-stone-500">
        {error.data || error.message}
      </p>

      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;

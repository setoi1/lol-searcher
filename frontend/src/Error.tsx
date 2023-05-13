import React from 'react';
import { useRouteError } from 'react-router-dom';

function Error() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="error-page">
      <h1>Oopsie Daisy !!!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default Error;

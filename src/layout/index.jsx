import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';

export default function SharedLayout() {
  return (
    <>
      <Header />

      <Suspense fallback={<h1>Loading...</h1>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}

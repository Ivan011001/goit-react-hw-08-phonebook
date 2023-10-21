import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Loading from 'components/Loading';
import Footer from 'components/Footer';
import { PageView, PageViewMain } from './SharedLayout.styled';

export default function SharedLayout() {
  return (
    <PageView>
      <Header />

      <PageViewMain>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </PageViewMain>

      <Footer />
    </PageView>
  );
}

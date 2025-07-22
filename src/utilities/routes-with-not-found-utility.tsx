import { Route, Routes } from 'react-router-dom';
import { JSX } from 'react';

interface Props {
  children: JSX.Element[] | JSX.Element;
}
function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}
export default RoutesWithNotFound;

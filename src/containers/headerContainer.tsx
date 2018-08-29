import * as React from 'react';

import ReHeader from '../components/reHeader';

interface IHeaderContainer {
  push?: (url: string) => void,
  invoicesCuont?: number,
}
class HeaderContainer extends React.Component<IHeaderContainer> {
  render() {
    return (
      <ReHeader />
    );
  }
}

export default HeaderContainer;

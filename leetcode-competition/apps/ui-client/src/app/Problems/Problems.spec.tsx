import { render } from '@testing-library/react';

import Problems from './Problems';

describe('Problems', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Problems />);
    expect(baseElement).toBeTruthy();
  });
});

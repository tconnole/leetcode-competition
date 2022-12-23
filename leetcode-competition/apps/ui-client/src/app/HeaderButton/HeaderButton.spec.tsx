import { render } from '@testing-library/react';

import HeaderButton from './HeaderButton';

describe('HeaderButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderButton />);
    expect(baseElement).toBeTruthy();
  });
});

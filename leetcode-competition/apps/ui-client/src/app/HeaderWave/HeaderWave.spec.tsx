import { render } from '@testing-library/react';

import HeaderWave from './HeaderWave';

describe('HeaderWave', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderWave />);
    expect(baseElement).toBeTruthy();
  });
});

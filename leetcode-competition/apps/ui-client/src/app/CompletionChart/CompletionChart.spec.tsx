import { render } from '@testing-library/react';

import CompletionChart from './CompletionChart';

describe('CompletionChart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompletionChart />);
    expect(baseElement).toBeTruthy();
  });
});

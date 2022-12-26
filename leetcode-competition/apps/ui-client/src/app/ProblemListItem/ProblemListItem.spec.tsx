import { render } from '@testing-library/react';

import ProblemListItem from './ProblemListItem';

describe('ProblemListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProblemListItem />);
    expect(baseElement).toBeTruthy();
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import App from './src/App';

describe('App', () => {
  it('renders headline', () => {
    const {container} = render(<App title="React" />);

    expect(container).toMatchSnapshot();
    // check if App components renders headline
  });
});
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './Layout';

describe('Layout', () => {
  it('renders with default className', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );

    const mainElement = screen.getByRole('main');
    expect(mainElement).toHaveClass('container mx-auto px-4 py-8');
  });

  it('applies custom className', () => {
    render(
      <BrowserRouter>
        <Layout className="custom-class" />
      </BrowserRouter>
    );

    const layoutElement = screen.getByRole('main').parentElement;
    expect(layoutElement).toHaveClass('custom-class');
  });
});
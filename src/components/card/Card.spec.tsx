import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('should render Card', () => {
    render(
      <Card
        card={{ opened: false, solved: false, index: 1 }}
        image="image"
        onClick={() => {}}
      />
    );
    const imageElement = screen.getByAltText(/card/i);
    expect(imageElement).toBeInTheDocument();
  });

  it('should add opened css to opened card', () => {
    const { container } = render(
      <Card
        card={{ opened: true, solved: false, index: 1 }}
        image="image"
        onClick={() => {}}
      />
    );
    const containers = container.getElementsByClassName('cardOpened');
    expect(containers.length).toBe(1);
  });

  it('should add solved css to solved card', () => {
    const { container } = render(
      <Card
        card={{ opened: false, solved: true, index: 1 }}
        image="image"
        onClick={() => {}}
      />
    );
    const containers = container.getElementsByClassName('cardSolved');
    expect(containers.length).toBe(1);
  });
});

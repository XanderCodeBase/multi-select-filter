import '@testing-library/jest-dom';
import { cleanup } from '@testing-library/react';
import { afterEach, beforeEach } from 'vitest';
import { vi } from 'vitest';

// Reset mocks before each test
beforeEach(() => {
  vi.clearAllMocks();
});

// Restore mocks after each test
afterEach(() => {
  vi.restoreAllMocks();
  cleanup();
});

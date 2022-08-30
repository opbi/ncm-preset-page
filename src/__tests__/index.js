import join from 'index';

describe('join', () => {
  it('works if input is string', () => {
    const result = join('hello', 'world');
    expect(result).toBe('hello world');
  });

  it('would fail if input is not string', () => {
    const corrupted = () => join(2, 'yes');
    expect(corrupted).toThrowErrorMatchingSnapshot();
  });
});

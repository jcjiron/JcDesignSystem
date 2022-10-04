import { useSessionStorage } from '../use-session-storage';
const sessionProvider = () => window.sessionStorage;
describe('useSessionStorage', () => {
  it('is truthy', () => {
    const { setItem, getItem } = useSessionStorage(sessionProvider());
    expect(setItem).toBeTruthy();
    expect(getItem).toBeTruthy();
  });
  it('should save and retrieve a string', () => {
    const { setItem, getItem } = useSessionStorage(sessionProvider());
    const value = 'value';
    const KEY = 'key1';
    setItem(KEY, value);
    const retrieve = getItem(KEY);
    expect(retrieve).toBe(value);
  });
  it('should save and retrieve an object', () => {
    const { setItem, getItem } = useSessionStorage(sessionProvider());
    const KEY = 'key2';
    const value = {
      prop1: 'value',
      prop2: 'value',
      prop3: {
        innerprop1: 'value',
        innerprop2: 'value',
        innerprop3: 'value',
      },
    };
    setItem(KEY, value);
    const retrieved = getItem(KEY);
    expect(retrieved).toStrictEqual(value);
  });
});

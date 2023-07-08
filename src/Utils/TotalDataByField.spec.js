import TotalDataByField from './TotalDataByField';

describe('TotalDataByField', () => {
  test('calculates total count by field correctly', () => {
    const data = [
      { id: 1, field: 'Engineering' },
      { id: 2, field: 'Engineering' },
      { id: 3, field: 'Sales' },
      { id: 4, field: 'Sales' },
      { id: 5 },
    ];
    const sortByField = 'field';

    const result = TotalDataByField({ data, sortByField });
    expect(result).toEqual({
      fields: ['Engineering', 'Sales'],
      count: [2, 2],
    });
  });

  test('returns an empty object if data is empty', () => {
    const data = [];
    const sortByField = 'field';

    const result = TotalDataByField({ data, sortByField });

    expect(result).toEqual({
      fields: [],
      count: [],
    });
  });

  test('returns an empty object if sortByField is not present in data', () => {
    const data = [
      { id: 1, field: 'Engineering' },
      { id: 2, field: 'Sales' },
    ];
    const sortByField = 'nonexistentField';

    const result = TotalDataByField({ data, sortByField });

    expect(result).toEqual({
      fields: [],
      count: [],
    });
  });
});

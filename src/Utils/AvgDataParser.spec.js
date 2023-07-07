import AverageSalaryByField from './AvgDataParser';

describe('AverageSalaryByField', () => {
  test('calculates average salary by field correctly', () => {
    const data = [
      { id: 1, field: 'Engineering', salary_in_usd: 50000 },
      { id: 2, field: 'Engineering', salary_in_usd: 60000 },
      { id: 3, field: 'Sales', salary_in_usd: 40000 },
      { id: 4, field: 'Sales', salary_in_usd: 45000 },
      { id: 5, salary_in_usd: 55000 },
    ];
    const sortField = 'field';

    const result = AverageSalaryByField({ data, sortField });
    expect(result).toEqual({
      fields: ['Engineering', 'Sales'],
      elements: [55000, 42500],
    });
  });

  test('returns an empty object if data is empty', () => {
    const data = [];
    const sortField = 'field';

    const result = AverageSalaryByField({ data, sortField });

    expect(result).toEqual({
      fields: [],
      elements: [],
    });
  });

  test('returns an empty object if sortField is not present in data', () => {
    const data = [
      { id: 1, field: 'Engineering', salary_in_usd: 50000 },
      { id: 2, field: 'Sales', salary_in_usd: 60000 },
    ];
    const sortField = 'nonexistentField';

    const result = AverageSalaryByField({ data, sortField });

    expect(result).toEqual({
      fields: [],
      elements: [],
    });
  });
});

export const departments = [
  { value: 'operations', label: 'Operations' },
  { value: 'internship', label: 'Internship' },
  { value: 'sales', label: 'Sales' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'design', label: 'Design' },
  { value: 'marketing', label: 'Marketing' },
  { value: 'hr', label: 'HR' },
  { value: 'finance', label: 'Finance' }
];

export const getDepartmentOptions = () => departments;

export const addDepartment = (value: string, label: string) => {
  departments.push({ value, label });
};

export const removeDepartment = (value: string) => {
  const index = departments.findIndex(dept => dept.value === value);
  if (index > -1) {
    departments.splice(index, 1);
  }
};

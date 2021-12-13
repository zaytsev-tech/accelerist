import { uniq } from 'lodash';

import { CompanyDetails } from '../../store/ducks/companies/types';

export function useGettingIndustries(obj: Record<string, CompanyDetails>) {
  const mas: Array<string> = [];
  Object.values(obj).forEach((company) => {
    mas.push(company.primaryIndustry[0]);
  });
  return uniq(mas).filter((value) => value !== null);
}

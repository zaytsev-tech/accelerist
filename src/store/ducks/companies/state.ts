import { CompanyData } from './types';

export const initialCompany: CompanyData = {
  items: {
    '0': {
      id: '0',
      zoomInfoId: '0',
      name: '',
      phone: '',
      fax: '',
      website: '',
      city: '',
      street: '',
      state: '',
      zipCode: '',
      country: '',
      descriptionList: '',
      revenueRange: '',
      employeeRange: '',
      primaryIndustry: [],
      revenue: '',
      employeeCount: 0,
      parentId: '',
      charitablePartners: [],
      employeeEngagementOpportunities: false,
      similarCompanies: [],
      favoriteCompanies: [{ id: '', companyId: '', userId: '' }],
      score: 0,
      like: false,
      crsFocus: [],
    },
  },
  meta: { totalItems: 0, itemCount: 0, itemsPerPage: '', totalPages: 0, currentPage: '' },
  error: '',
  isLoading: false,
};

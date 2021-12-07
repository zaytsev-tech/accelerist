export interface CompanyData {
  items: Record<string, CompanyDetails>;
  meta: Meta;
  error: string;
}

export interface CompanyDetails {
  id: string;
  zoomInfoId: string | null;
  name: string;
  logo?: null;
  ticker?: null;
  parentCompany?: null;
  phone: string;
  fax: string;
  website: string;
  city: string;
  street: string;
  state: string;
  zipCode: string;
  country: string;
  continent?: null;
  productsBrandDescription?: null;
  descriptionList: string;
  revenueRange: string;
  employeeRange: string;
  twitterHandle?: null;
  socialMediaUrls?: null;
  competitors?: null;
  subUnitIndustries?: null;
  primaryIndustry: Array<string>;
  industries?: null;
  revenue: string;
  employeeCount?: number;
  annualContributions?: null;
  cashContributions?: null;
  inKindContributions?: null;
  employeeContributions?: null;
  parentId: string;
  parentName?: null;
  type?: null;
  sdgGoals?: Array<string>;
  genders?: null;
  income?: null;
  age?: null;
  ethnicity?: null;
  nonprofit?: null;
  purchase?: null;
  affiliation?: null;
  brands?: null;
  interests?: null;
  typesOfInvestment?: null;
  errorLoadZoomInfo?: null;
  charitablePartners: [];
  statusZoomInfo?: string;
  loadZoomInfoDate?: null;
  errorLoadZoomInfoDate?: null;
  partnershipLink?: null;
  employeeEngagementOpportunities: boolean;
  similarCompanies: Array<string>;
  favoriteCompanies: Array<CompanyIds>;
  score: number;
  like: boolean;
  crsFocus: Array<string>;
}

export interface CompanyIds {
  id: string;
  companyId: string;
  userId: string;
}

export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: string;
  totalPages: number;
  currentPage: string;
}

export interface LikeSwitcher {
  id: string;
  key: boolean;
}

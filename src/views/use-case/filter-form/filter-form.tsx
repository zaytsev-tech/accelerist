import { FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectCompanyItems } from '../../../store/ducks/companies';
import { FilterDetails } from '../../../store/ducks/companies/types';
import { useGettingIndustries, useGettingLocations, useSortMas } from '../../hooks';
import { CheckBox } from '../../ui/checkbox';
import { Input } from '../../ui/input';
import { SelectInput } from '../../ui/select-input';

export const FilterForm: FC = () => {
  const companies = useSelector(selectCompanyItems);
  const industries: Array<string> = useGettingIndustries(companies);
  const geographics: Array<string> = useGettingLocations(companies);
  const [searchIndustry, setSearchIndustry] = useState('');
  const [searchGeographic, setSearchGeographic] = useState('');
  const sortIndustries = useSortMas(industries, searchIndustry);
  const sortGeographics = useSortMas(geographics, searchGeographic);
  function onSubmit(values: FilterDetails) {
    console.log(values);
  }

  const initialValue = {
    industry: [''],
    location: [''],
    scope: '',
    sdgGoals: '',
    csrFocus: [''],
    totalAnnual: '',
    minRevenue: 1,
    maxRevenue: 100000,
    gender: 'male',
    income: '',
    age: '',
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValue={initialValue}
      render={({ handleSubmit }) => (
        <Container>
          <HeaderText>Filters</HeaderText>
          <FilterContainer>
            <HeaderContainer>Company</HeaderContainer>
            <FilterItems>
              <ItemContainer>
                <ItemTitle>Industry</ItemTitle>
                <Input
                  placeholder="Search"
                  value={searchIndustry}
                  onChange={(e) => setSearchIndustry(e.currentTarget.value)}
                />
                <ListCheckbox>
                  {sortIndustries.map((industry) => (
                    <Field
                      name="industry"
                      key={industry}
                      render={({ input: { value, onChange } }) => (
                        <CheckBoxContainer
                          id={industry}
                          title={industry}
                          className={CheckBoxContainer}
                          onChange={() => onChange}
                        />
                      )}
                    />
                  ))}
                </ListCheckbox>
              </ItemContainer>
              <ItemContainer>
                <ItemTitle>Geographic location</ItemTitle>
                <Input
                  placeholder="Search"
                  value={searchGeographic}
                  onChange={(e) => setSearchGeographic(e.currentTarget.value)}
                />
                <ListCheckbox>
                  {sortGeographics.map((location) => (
                    <Field
                      name="location"
                      key={location}
                      render={({ input: { value, onChange } }) => (
                        <CheckBoxContainer
                          id={location}
                          title={location}
                          className={CheckBoxContainer}
                          onChange={() => onChange}
                        />
                      )}
                    />
                  ))}
                </ListCheckbox>
              </ItemContainer>
              <ItemContainer>
                <ItemTitle>Scope</ItemTitle>
                <Field
                  name="scope"
                  render={({ input: { value, onChange } }) => (
                    <SelectInput name="scope" items={['Local']} />
                  )}
                />
              </ItemContainer>
            </FilterItems>
          </FilterContainer>
          <FilterButtons>
            <Cancel>Cancel</Cancel>
            <Search onClick={() => handleSubmit()}>Search</Search>
          </FilterButtons>
        </Container>
      )}
    />
  );
};

const Container = styled.div`
  display: block;
  width: 100%;
  padding: 22px;
  background-color: ${({ theme: { colors } }) => colors.white};
`;

const HeaderText = styled.h3`
  font-size: 2rem;
  margin-top: 0px;
  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    margin: 16px;
  }
`;

const FilterContainer = styled.div`
  width: 100%;
`;

const HeaderContainer = styled.p`
  ${({ theme: { typography } }) => typography.body.bodySelect};
  margin-top: 24px;
`;

const ItemContainer = styled.div`
  padding-top: 15px;
  padding-right: 15px;
  width: 48.7%;
`;

const ItemTitle = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const FilterItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FilterButtons = styled.div``;

const Cancel = styled.button``;

const Search = styled.button``;

const ListCheckbox = styled.div`
  height: 200px;
  overflow: scroll;
`;

const CheckBoxContainer = styled(CheckBox)`
  display: flex;
  align-items: center;
  & > label {
    margin: 10px;
  }
`;

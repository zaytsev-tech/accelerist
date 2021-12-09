import { uniq } from 'lodash';
import { FC } from 'react';
import { Field, Form } from 'react-final-form';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectIndustry } from '../../../store/ducks/companies';
import { FilterDetails } from '../../../store/ducks/companies/types';
import { CheckBox } from '../../ui/checkbox';
import { Input } from '../../ui/input';

export const FilterForm: FC = () => {
  const companies = useSelector(selectIndustry);
  const industries: Array<string> = [];
  Object.values(companies).forEach((company) => {
    industries.push(company.primaryIndustry[0]);
  });
  const uniqIndustries = uniq(industries);
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
                <Input placeholder="Search" value="123" onChange={() => onSubmit} />
                <ListCheckox>
                  {uniqIndustries.map((industry) => (
                    <Field
                      name="industry"
                      key={industry}
                      render={({ input: { value, onChange } }) => (
                        <CheckBoxContainer>
                          <CheckBox title={value} onClick={() => onChange} />
                          <p>{industry}</p>
                        </CheckBoxContainer>
                      )}
                    />
                  ))}
                </ListCheckox>
              </ItemContainer>
              <ItemContainer>
                <ItemTitle>Geographic location</ItemTitle>
                <Field
                  name="location"
                  render={({ input: { value, onChange } }) => (
                    <Input placeholder="Search" value={value} onChange={onChange} />
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
  width: 50%;
`;

const ItemTitle = styled.p`
  ${({ theme: { typography } }) => typography.body.footnote};
  color: ${({ theme: { colors } }) => colors.grayDark};
`;

const FilterItems = styled.div`
  display: flex;
`;

const FilterButtons = styled.div``;

const Cancel = styled.button``;

const Search = styled.button``;

const ListCheckox = styled.div``;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
`;

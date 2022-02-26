import { FC, useState } from 'react';
import { Field, Form } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectCompanyItems } from '../../../store/ducks/companies';
import { getFilteredCompanies } from '../../../store/ducks/companies/actions';
import { FilterDetails } from '../../../store/ducks/companies/types';
import { useGettingIndustries, useGettingLocations, useSortMas } from '../../hooks';
import { CheckBox } from '../../ui/checkbox';
import { Input } from '../../ui/input';
import { RangeSlider } from '../../ui/range-slider';
import { SelectInput } from '../../ui/select-input';

interface FilterFormProps {
  onHandleSubmit: () => void;
}

export const FilterForm: FC<FilterFormProps> = ({ onHandleSubmit }) => {
  const companies = useSelector(selectCompanyItems);
  const industries: Array<string> = useGettingIndustries(companies);
  const geographics: Array<string> = useGettingLocations(companies);
  const [searchIndustry, setSearchIndustry] = useState('');
  const [searchGeographic, setSearchGeographic] = useState('');
  const sortIndustries = useSortMas(industries, searchIndustry);
  const sortGeographics = useSortMas(geographics, searchGeographic);
  const dispatch = useDispatch();
  function onSubmit(values: FilterDetails) {
    dispatch(getFilteredCompanies(values));
    onHandleSubmit();
  }

  const initialValue = {
    industry: [],
    location: [],
    scope: '',
    sdgGoals: '',
    csrFocus: [],
    totalAnnual: '',
    revenue: { minRevenue: 1, maxRevenue: 1000 },
    gender: 'male',
    income: '',
    age: '',
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValue}
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
                    <ContainerCheckList className={ContainerCheckList} key={industry}>
                      <label>
                        <Field
                          name="industry"
                          component="input"
                          type="checkbox"
                          value={industry}
                        />
                        <span></span>
                      </label>
                      <Title>{industry}</Title>
                    </ContainerCheckList>
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
                    <ContainerCheckList className={ContainerCheckList} key={location}>
                      <label>
                        <Field
                          name="location"
                          component="input"
                          type="checkbox"
                          value={location}
                        />
                        <span></span>
                      </label>
                      <Title>{location}</Title>
                    </ContainerCheckList>
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
              <ItemContainer>
                <ItemTitle>Revenue</ItemTitle>
                <Field
                  name="revenue"
                  render={({ input: { value, onChange } }) => (
                    <RangeSlider
                      firstValue={value.minRevenue}
                      secondValue={value.maxRevenue}
                      maxValue={100000}
                      onChange={onChange}
                    />
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

const ContainerCheckList = styled.div`
  margin: 0;

  & input {
    display: none;
  }

  & label span {
    content: '';
    position: relative;
    display: inline-block;
    vertical-align: bottom;
    width: 15px;
    height: 15px;
    margin-right: 0px;
    border-radius: 10%;
    margin-right: 10px;
    border: 1px solid ${({ theme: { colors } }) => colors.grayCheckbox};
    flex-shrink: 0;

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
      width: 10px;
      height: 10px;
    }
  }

  & input[type='checkbox']:checked + span::before {
    position: absolute;
    width: inherit;
    content: '✓';
    color: ${({ theme: { colors } }) => colors.black};
    line-height: 15px;
    text-align: center;
    vertical-align: bottom;
    background-color: ${({ theme: { colors } }) => colors.blueSecond};
    border-color: ${({ theme: { colors } }) => colors.blueSecond};

    @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
      line-height: 10px;
    }
  }
`;

const Title = styled.label`
  color: ${({ theme: { colors } }) => colors.black};
  font-size: 15px;

  @media (max-width: ${({ theme: { breakpoints } }) => breakpoints.body.mobile}) {
    font-size: 70%;
  }
`;

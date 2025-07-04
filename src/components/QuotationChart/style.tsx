import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const FilterGroup = styled.div`
  display: flex;
  gap: 8px;
  background: #f3f4f6;
  padding: 4px;
  border-radius: 6px;
`

export const FilterButton = styled.button`
  background: transparent;
  padding: 4px 12px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #6b7280;
  border-radius: 4px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
  border: none;

  &.active {
    background-color: #ffb400;
    color: white;
  }

  &:hover:not(.active) {
    background-color: #e5e7eb;
  }
`

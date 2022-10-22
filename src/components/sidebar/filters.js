import React from "react";
import { CheckboxList, CheckboxListItem, VirtualCheckbox, SidebarTitle } from '../styled/styledComponents'

export const Filter = () => {
    return (
        <>
            <SidebarTitle>Filters</SidebarTitle>
            <CheckboxList>
                <CheckboxListItem> <VirtualCheckbox type="checkbox" /> Phones </CheckboxListItem>
                <CheckboxListItem> <VirtualCheckbox type="checkbox" /> HeadPhones</CheckboxListItem>
                <CheckboxListItem> <VirtualCheckbox type="checkbox" /> Accessories</CheckboxListItem>
            </CheckboxList>

        </>
    )
}
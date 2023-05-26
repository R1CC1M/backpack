/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { ElementType } from 'react';
import { Component } from 'react';
import type { DateModifiers, SelectionConfiguration } from './custom-proptypes';
export type Props = DefaultProps & {
    DateComponent: ElementType;
    dateModifiers: DateModifiers;
    dates: Date[];
    formatDateFull: (date: Date) => Date | string;
    preventKeyboardFocus: boolean;
    markToday: boolean;
    markOutsideDays: boolean;
    isKeyboardFocusable: boolean;
    month: Date;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6;
    [rest: string]: any;
};
type DefaultProps = {
    dateProps: {};
    focusedDate: Date | number | null;
    ignoreOutsideDate: boolean;
    maxDate: Date | null;
    minDate: Date | null;
    onDateClick: () => void;
    onDateKeyDown: () => void;
    cellClassName: string | null;
    selectionConfiguration: SelectionConfiguration;
};
declare class Week extends Component<Props> {
    static defaultProps: DefaultProps;
    shouldComponentUpdate(nextProps: Props): boolean;
    render(): JSX.Element | null;
}
export default Week;

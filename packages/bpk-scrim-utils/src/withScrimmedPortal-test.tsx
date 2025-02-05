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

import { render, within } from '@testing-library/react';

import withScrimmedPortal from './withScrimmedPortal';

describe('withScrimmedPortal', () => {
  it('renders the wrapped component inside a portal correctly with fallback to document.body', () => {
    const DialogContent = () => <div>Dialog content</div>;
    const ScrimmedComponent = withScrimmedPortal(DialogContent);

    render(
      <div id="pagewrap">
        <div> Content hidden from AT</div>
        <ScrimmedComponent
          getApplicationElement={() => document.getElementById('pagewrap')}
        />
      </div>
    );
    expect(document.body).toMatchSnapshot();
  });

  it('renders the wrapped component inside a portal with renderTarget provided', () => {
    const WrappedComponent = () => <div>Wrapped Component</div>;
    const ScrimmedComponent = withScrimmedPortal(WrappedComponent);
      render(
        <div>
          <div id="pagewrap">
            <div> Content hidden from AT</div>
            <ScrimmedComponent
              getApplicationElement={() => document.getElementById('pagewrap')}
              renderTarget={() => document.getElementById('modal-container')}
              />
          </div>
          <div id="modal-container" />
       </div>
      );
      expect(document.body).toMatchSnapshot();
  });

  it('renders the wrapped component outside the applicationElement', () => {
    const WrappedComponent = () => <div>Wrapped Component</div>;
    const ScrimmedComponent = withScrimmedPortal(WrappedComponent);
    render(
      <div>
        <div id="pagewrap">
          <div> Content hidden from AT</div>
          <ScrimmedComponent
            getApplicationElement={() => document.getElementById('pagewrap')}
            renderTarget={() => document.getElementById('modal-container')}
          />
        </div>
        <div id="modal-container" />
      </div>
    );

    const hiddenElements = document.getElementById('pagewrap');
    expect(within(hiddenElements as HTMLElement).queryByText('Wrapped Component')).toBeNull();
  });
});
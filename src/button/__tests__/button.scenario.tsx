import * as React from 'react';

import { Button, KIND } from '..';

export function Scenario() {
  return (
    <table>
      <tbody>
        {Object.values(KIND).map((kind) => {
          return (
            <tr key={kind}>
              <td>
                <Button kind={kind}>Move</Button>
              </td>
              <td>
                <Button kind={kind} isSelected>
                  Move
                </Button>
              </td>
              <td>
                <Button kind={kind} isLoading>
                  Move
                </Button>
              </td>
              <td>
                <Button kind={kind} disabled>
                  Move
                </Button>
              </td>
              <td>
                <Button kind={kind} disabled isLoading>
                  Move
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

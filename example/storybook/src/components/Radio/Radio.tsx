import { Root, Icon, Group, Indicator, Label } from './styled-component';
import { createRadio } from '@universa11y/radio';
import { CircleIcon } from '@universa11y/icon';
import React from 'react';

const RadioTemp = createRadio({
  Root,
  Group,
  Icon,
  Indicator,
  Label,
});

export const Radio = () => {
  const [values, setValues] = React.useState('Label 1');
  console.log(createRadio({ Root, Group, Icon, Indicator, Label }), '123444');
  return (
    <>
      <RadioTemp.Group value={values} onChange={setValues}>
        <RadioTemp
          size="md"
          value="Label 1"
          accessibilityLabel="RadioTemp"
          onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        >
          <RadioTemp.Indicator>
            <RadioTemp.Icon
              sx={{
                // style: {
                //   color: '$primary600',
                // },
                // state: {
                //   focus: {
                //     style: {
                //       color: '$primary600',
                //     },
                //   },
                // },
                colorMode: {
                  dark: {
                    style: {
                      color: '$primary600',
                    },
                  },
                },
              }}
            >
              <CircleIcon />
            </RadioTemp.Icon>
          </RadioTemp.Indicator>
          <RadioTemp.Label>Label 1</RadioTemp.Label>
        </RadioTemp>
        <RadioTemp
          size="md"
          value="Label 2"
          accessibilityLabel="RadioTemp"
          onChange={(nextValue: boolean) => console.log(nextValue, 'nextValue')}
        >
          <RadioTemp.Indicator>
            <RadioTemp.Icon>
              <CircleIcon />
            </RadioTemp.Icon>
          </RadioTemp.Indicator>
          <RadioTemp.Label>Label 2</RadioTemp.Label>
        </RadioTemp>
        <RadioTemp
          size="md"
          value="Label 3"
          accessibilityLabel="RadioTemp"
          onChange={(isSelected: boolean) =>
            console.log(isSelected, 'isSelected')
          }
        >
          <RadioTemp.Indicator>
            <RadioTemp.Icon>
              <CircleIcon />
            </RadioTemp.Icon>
          </RadioTemp.Indicator>
          <RadioTemp.Label>Label 3</RadioTemp.Label>
        </RadioTemp>
      </RadioTemp.Group>
    </>
  );
};

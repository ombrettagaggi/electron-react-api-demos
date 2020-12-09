import React from 'react';

import Grid from '@material-ui/core/Grid';

import DemoSource from '../../../../components/DemoSource/DemoSource';
import TabPanel from '../../../../components/TabPanel/TabPanel';
import AddToTrayButton from './Demo';

export type Props = { value: number; index: number };

export default function OpenExternalUrlTab({ value, index }: Props) {
  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <DemoSource relativePahToCodeFile="screens/NativeUserInterface/OpenExternal/Url/demo/demo.ts" />
      }
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AddToTrayButton />
        </Grid>
      </Grid>
    </TabPanel>
  );
}

import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import DemoSource from '../../../components/DemoSource/DemoSource';
import ExternalUrl from '../../../components/ExternalUrl/ExternalUrl';
import TabPanel from '../../../components/TabPanel/TabPanel';
import captureScreenshot from './demo/demo';

export type Props = { value: number; index: number };

export default function ScreenshotTab({ value, index }: Props) {
  const [screenshotInfo, setScreenshotInfo] = useState('');

  return (
    <TabPanel
      value={value}
      index={index}
      sourceCode={
        <>
          <DemoSource relativePahToCodeFile="screens/Media/ScreenshotTab/demo/demo.ts" />
          <DemoSource relativePahToCodeFile="screens/Media/ScreenshotTab/Tab.tsx" />
        </>
      }
      documentation={
        <>
          <Typography paragraph>
            Per catturare delle schermate Electron.js fornisce il metodo{' '}
            <code>caputrePage</code> invocabile su un oggetto{' '}
            <code>webContents</code>. L&apos;immagine restituita è salvabile in
            diversi formati e codifiche.
          </Typography>
          <Typography paragraph>
            Attenzione: è possibile utilizzare{' '}
            <code>dialog.showSaveDialog</code> per chiedere all&apos;utente il
            path dove salvare lo screenshot. (
            <ExternalUrl
              url={
                new URL(
                  'https://www.electronjs.org/docs/api/dialog#dialogshowsavedialogbrowserwindow-options'
                )
              }
            >
              doc
            </ExternalUrl>
            )
          </Typography>
          <Typography paragraph>
            Vedi la{' '}
            <ExternalUrl
              url={
                new URL(
                  'https://www.electronjs.org/docs/api/web-contents#contentscapturepagerect'
                )
              }
            >
              documentazione ufficiale
            </ExternalUrl>
            .
          </Typography>
        </>
      }
    >
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Button
            color="primary"
            variant="contained"
            onClick={() =>
              captureScreenshot().then((screenshotPath) =>
                setScreenshotInfo(`Screenshot salvato in ${screenshotPath}`)
              )
            }
          >
            Cattura schermata
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography>{screenshotInfo}</Typography>
        </Grid>
      </Grid>
    </TabPanel>
  );
}
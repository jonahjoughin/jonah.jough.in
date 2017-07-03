import React from 'react';
import { reset } from '../styles/default.js'
import Head from 'next/head';

export default () => (
    <Head>
      <style> { reset } </style>
      <title>Joughin</title>
      <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
      Abril+Fatface
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
)

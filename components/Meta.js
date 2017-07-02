import React from 'react';
import { reset } from '../styles/default.js'
import Head from 'next/head';

export default () => (
    <Head>
      <style> { reset } </style>
      <title>Joughin</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
)

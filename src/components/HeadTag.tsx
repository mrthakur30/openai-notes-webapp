import Head from 'next/head'
import React from 'react'

type Props = {}

const HeadTag = (props: Props) => {
  return (
    <Head>
    <title>Home App</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com"  />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
      rel="stylesheet"
    />
    </Head>
  )
}

export default HeadTag
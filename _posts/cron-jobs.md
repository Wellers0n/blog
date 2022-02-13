---
title: 'Build a Cron-Job in Nodejs'
excerpt: 'Learn how to set up cron jobs in Node.js applications'
coverImage: '/assets/blog/cron-jobs/cron-jobs.jpeg'
date: '2022-02-13T05:35:07.322Z'
author:
  name: Wellerson
  picture: '/assets/blog/authors/wellerson.jpg'
ogImage:
  url: '/assets/blog/hello-world/cover.jpg'
---

## TL;DR
In this article we gonna learn how to create a simple clock alarm to wake us up at 7am using ***nodejs***. A cron job let you define a pattern of recurrence to perform a given task.
we are going to use the package cron to make the cron job handling easier a cron uses a specific syntax to create a recurrence pattern,
***[crontab.guru](https://crontab.guru)*** is a great place to learn more about the syntax and play and find what patterns do you need for your application

> You need to be aware of the basics about ***nodejs*** and ***express***, we build a server with these technologies.

## Introduction

Our cron jobs stayed in the backend, therefore we need to up a server in Nodejs, I’m using express but we can use koaJS too, to make it easier I created a repository on my [github](https://github.com/wellers0n/blog).  In app.js we will have a server importing a job service.

```js

import jobs from './app/jobs'

```

Let's understand how a job works, we will import it into ***index.js***

```js

import 'dotenv/config'
import './app/models'

import express from 'express'
import 'express-async-errors'
import cors from 'cors'

import { routes } from './routes'

import jobs from './app/jobs'

import { keys } from './configs/keys'

const port = keys.port || 3001

const app = express()

app.use(cors())
app.use(express.json({}))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

// Jobs
jobs.clock()

app.listen(port, () => {
  console.log(`We are live on ${port}`)
  console.log(`Environment: ${keys.environment}`)
})

```

Great, in this service we can see that there's a job called a ***clock*** that will manage hours to wake up, let's see how to configure this.

## How cron-jobs works
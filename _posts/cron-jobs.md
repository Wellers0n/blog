---
title: 'Build a Cron-Job in Nodejs'
excerpt: 'Learn how to set up cron jobs in Node.js applications'
coverImage: '/assets/blog/cron-jobs/cron-jobs.jpeg'
date: '2022-02-13T05:35:07.322Z'
author:
  name: Wellerson
  picture: '/assets/blog/authors/wellerson.jpg'
ogImage:
  url: '/assets/blog/cron-jobs/cron-jobs.jpeg'
---

## TL;DR
In this article we're gonna learn how to create a simple clock alarm to wake us up at 7am using ***nodejs***. A cron job let you define a pattern of recurrence to perform a given task.
we are going to use the package cron to make the cron job handling easier, a cron uses a specific syntax to create a recurrence pattern,
***[crontab.guru](https://crontab.guru)*** is a great place to learn more about the syntax and find what patterns do you need for your application

> You need to be aware of the basics about ***nodejs*** and ***express***, we build a server with these technologies.

## Installing Dependencies

```sh
 yarn add express

 yarn add cron
```

## Introduction

Our cron jobs stayed in the backend, therefore we need to up a server in Nodejs, I’m using express but we can use koaJS too, to make it easier I created a repository on my [github](https://github.com/Wellers0n/cron-job).  In app.js we will have a server importing a job service.

Let's understand how a job works, we will import it into ***app.js***

```js

// app.js

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

Inside the ***[jobs→clock](https://github.com/Wellers0n/cron-job/tree/master/src/app/jobs/clock)*** folder on github, let's explain what each thing does. starting with index.js it does the work of calling all the other files needed to run the job.

```js

import { CronJob } from 'cron'
import moment from 'moment'

import getCronTime from './getCronTime'
import { getJob } from './getJob'
import cronJobCompleted from './cronJobCompleted'
import cronJobShouldStart from './cronJobShouldStart'
import getTimeZone from './getTimeZone' 

function clock(): void {
  const job = new CronJob(
    getCronTime(),
    getJob,
    cronJobCompleted,
    cronJobShouldStart(),
    getTimeZone()
  )

  const nextDate = job.nextDate().format('DD/MM/YYYY HH:mm:ss')
  const appStartedAt = moment().format('DD/MM/YYYY HH:mm:ss')

  const loggerPrefix = '[CRON JOB] clock job'
  
  console.log(`${loggerPrefix} next date: ${nextDate}`)
  console.log(`${loggerPrefix} started at: ${appStartedAt}`)
}

export { clock }

```

Starting with the ***imports***, we first import ***[cron](https://github.com/kelektiv/node-cron)***, a javascript lib to handle cron jobs, just below comes the ***[moment](https://github.com/moment/moment)*** to handle date and time, nothing out of this world.

Now comes the imports of the files that we need to create to run a cron-job, let's start with ***getCronTime***

```js

function getCronTime(): string {
  return '0 7 * * *'
}

export default getCronTime

```

This file is very important, it determines what time your ***[cron-job](https://crontab.guru)*** will run, we have a website to practice this, you can train here crontab-guru, we want our cron job to run every day at 7 am so we will have cron-time like this `0 7 * * *`

Let's take a look at getJob, this is another important file, every time our cron runs at 7 am it will run what is inside this ***getJob*** for now we have a ***console.log*** inside it, see how it turned out

```js

const getJob = (): void => {
  console.log('ALARM CLOCK RINGING!!!')
}

export { getJob }

```

This is a simple code, but we can see how powerful it becomes, we can have a script to send email among other things inside this file called ***getJob***

Let's go to the next one, ***cronJobCompleted*** this file contains a return of ***null***, because we don't want to do anything else after it completes the cron. Then it will look like this:

```js

function cronJobCompleted(): null {
  return null
}

export default cronJobCompleted

```

Now we have the ***cronJobShouldStart*** this file will return ***true***, if this file is ***false*** inside your job you will need to call a ***.start()*** for the job to start, so we leave it as ***true*** to not waste time with it.

```js

function cronJobShouldStart(): boolean {
  return true
}

export default cronJobShouldStart

```

Finally, we have ***getTimeZone***, which is the São Paulo time zone as a reference so as not to get lost and always have Brazil as a reference

```js

function getTimeZone(): string {
  return 'America/Sao_Paulo'
}

export default getTimeZone

```

Basically our cron-job is ready, if you want to have an idea when it started and when it will be the next time it will run, you can have these consoles inside the function

```js

const nextDate = job.nextDate().format('DD/MM/YYYY HH:mm:ss')
const appStartedAt = moment().format('DD/MM/YYYY HH:mm:ss')

const loggerPrefix = '[CRON JOB] clock job'

console.log(`${loggerPrefix} next date: ${nextDate}`)
console.log(`${loggerPrefix} started at: ${appStartedAt}`)

```

Now we have a cron job working, thanks for reading this article! If you have any questions, DM me on twitter.

## Conclusion

We see how easy it is to use a cron-jobs in nodejs using express server, now we can schedule a time to perform some function, thanks for reading

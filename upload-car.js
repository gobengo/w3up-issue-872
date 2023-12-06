#!/usr/bin/env node
import * as w3up from "@web3-storage/w3up-client"
import { parseArgs } from 'node:util'
import assert from 'assert'
import * as fs from "fs/promises"

const client = await w3up.create()

const args = parseArgs({
  options: {
    car: {
      type: 'string'
    }
  }
})

assert(args.values.car, '--car option must be provided')

const car = await fs.readFile(args.values.car)
const file = new File([car], 'my.car')
const uploaded = await client.uploadCAR(file)
console.log('uploaded', uploaded)

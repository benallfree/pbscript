# JavaScript Cloud Functions for PocketBase

PBScript is a scripting engine add-on for [PocketBase](https://pocketbase.io). Access all server-side PocketBase hooks and capabilities through JavaScript.

Big features:

✅ Typescript-first
✅ Deploy and alter clound functions without rebuilding PocketBase
✅ CLI tool for intelligent dev mode and deployment
✅ Streamlined JavaScript-style PocketBase API
✅ Access models, collections, transactions, hooks, and all server-side features of PocketBase
✅ Versioned deployment and easy rollbacks

<!-- @import "[TOC]" {cmd="toc" depthFrom=2 depthTo=6 orderedList=false} -->

<!-- code_chunk_output -->

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [1. Create a project](#1-create-a-project)
  - [2. Launch the PBScript-enhanced PockeBase server locally](#2-launch-the-pbscript-enhanced-pockebase-server-locally)
  - [3. Edit your project in Typescript (default) or JavaScript.](#3-edit-your-project-in-typescript-default-or-javascript)
- [API Reference](#api-reference)
  - [`get`](#get)
- [Deployment](#deployment)
  - [1. Connect to your live site](#1-connect-to-your-live-site)
  - [2. Deploy your latest changes](#2-deploy-your-latest-changes)
- [Advanced](#advanced)
  - [Upgrading an Existing Custom PocketBase](#upgrading-an-existing-custom-pocketbase)

<!-- /code_chunk_output -->

## Introduction

PBScript extends PocketBase with an [ES-5.1 (ECMA 262)](https://262.ecma-international.org/5.1/) scripting engine powered by [goja](https://github.com/dop251/goja).

PBScript executes in a secure sandboxed environment (no Node or Web APIs available) with access to a simplified subset of PocketBase's [native Go extension API](https://pocketbase.io/docs/use-as-framework/).

Use `pbscript` command line tool to build and publish cloud functions to any PBScript-enabled PocketBase instance.

## Getting Started

Use the PBScript CLI to create a new project:

### 1. Create a project

```bash
npx pbscript init my-first-app
cd my-first-app
```

### 2. Launch the PBScript-enhanced PockeBase server locally

```
> Server started at: http://127.0.0.1:8090
  - REST API: http://127.0.0.1:8090/api/
  - Admin UI: http://127.0.0.1:8090/_/
```

### 3. Edit your project in Typescript (default) or JavaScript.

Changes will be automatically reloaded.

```bash
cd src
code .
```

## API Reference

PBScript runs in a secure sandboxed environment inside PocketBase. A simplified subset of PocketBase's hooks are available. Complete Typescript definitions are included.

If you are a web programmer, you might be so accostomed to using the [NodeJS API](https://nodejs.org/docs/latest/api/) or the browser [Web API](https://developer.mozilla.org/en-US/docs/Web/API) that you don't even realize those APIs are not core features of ECMAScript. Neither of those APIs are safe or allowed in the PocketBase execution environment.

Instead, your script runs in the `PocketBaseApi` execution environment. `PocketBaseApi` set of API calls to interact with PocketBase. With it, you can do CRUD, transactions, hook into PocketBase events, new API endpoints, and generally extend PocketBase.

### `get`

`get` adds an API route.

```ts
get(`/api/pbscript`, (req: any, resp: any) => {
  resp.json(HttpResponseStatuses.Ok, `Hello from PBScript!`)
})
```

## Deployment

PBScript knows how to deploy to any PBScript-enabled PocketBase instance. If you don't have a PBScript-enabled PocketBase instance, you can create one free:

- pockethost.io (free)
- [fly.io](#) (free)

### 1. Connect to your live site

```bash
npx pbscript login https://yourproject.pockethost.io
username:
password:
Saved to .pbscriptconfig
```

Once you log in, PBScript CLI will remember your credentials for future deployments.

### 2. Deploy your latest changes

PBScript will deploy and make the latest changes live. You can always log in to the PocketBase admin panel, find the `pbscript` collection, and roll back to previous versions.

```bash
npx pbscript deploy
```

## Advanced

### Upgrading an Existing Custom PocketBase

The easiest way to get PBScript is to use our custom PocketBase module [github.com/benallfree/pbscript/modules/pocketbase](https://github.com/benallfree/pbscript/modules/pocketbase):

```go
package main

import (
    "log"

    "github.com/benallfree/pbscript/packages/pocketbase" // Notice this is a custom version of the PocketBase module
)

func main() {
    app := pocketbase.New()

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
```

If you are already using a custom PocketBase build, just swap out `github.com/pocketbase/pocketbase` with `github.com/benallfree/pbscript/packages/pocketbase` and everything will work as expected.

Or, if you prefer, you can do exactly what our custom module does:

```go
package main

import (
	"github.com/pocketbase/pocketbase"

	"github.com/benallfree/pbscript/packages/pbscript"
)

func main() {
    app := pocketbase.New()
    pbscript.StartPBScript(app) // Magic line to enable PBScript

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
```

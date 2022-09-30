package main

import (
	"log"

	pocketbase "github.com/benallfree/pbscript/modules/pbscript"
)


func main() {
    app := pocketbase.New()

    if err := app.Start(); err != nil {
        log.Fatal(err)
    }
}
#!/bin/bash
# Ensures Node.js is available when launched from VS Code/Cursor (which may not load nvm/fnm)
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$HOME/.fnm/env" ] && eval "$("$HOME/.fnm/env")"
exec node "$@"

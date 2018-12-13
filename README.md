# NodeFsXtra
Extends Node FS lib

# Use
```
const fs = require('fsxtra');
```

# **fs** base methods

- Includes all **fs** lib functions.

- All **fs** functions with an alternate 'Sync' method will return promises instead of requiring callbacks


# Extra methods
`.mktree(`_`<filepath>`_`)`

- Returns Promise

- Accepts full filepath, creating as many of the directories in the filepath as needed.


`.mktreeSync(`_`<filepath>`_`)`

- Synchronous version of `.mktree()`


### TODO
Add rmtree & rmtreeSync methods - include 'force' option for removing files in dirs.

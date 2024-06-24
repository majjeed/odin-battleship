# odin-battleship

Odin JavaScript Project: Battleship

To push the contents of your `dist` folder to gh-pages, use the following steps:

1. Make sure your branch to deploy gh-pages from is deleted on the remote. We'll be using the "pages" branch as an example.
2. `git checkout -b pages` to create and checkout the new branch
3. Edit your `.gitignore` to remove the ignore for `dist`
4. `git add -A` to add all changes
5. `git commit` your changes
6. `git subtree push --prefix dist origin pages` - this will push the contents of `dist` to the `pages` branch, so that it only contains the contents of `dist` and nothing else from the repository/parent folders. This means that `index.html` will be at the root of the branch and you can select it to deploy immediately in your repo's options.

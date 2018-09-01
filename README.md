# alive

The very latest in a long list of alphabetically named simulations that I'm
writing to teach and entertain myself. Goals:

1. An "analog" version of Snake in which the snake slithers around and is
   controlled with left/right inputs. Plays very similar to
   [slither.io](ttp://slither.io/).
2. The snake is controlled by a player
3. A player can be a human or an AI (or a cat; I don't care)
4. The AI can be any black box that pluts into the player's left/right inputs.
   The inputs to the AI is the raw entire game state.
5. At least one version of this implementation should select information from
   the simulation to form some kind of situational awareness (e.g. vision) and
   use this as input to a neural net to direct its actions. I think that the
   training models used have to account for time. Another idea for simplified
   vision modeling is that each element corresponds to a rod/cone in the snake's
   eye, and its distance from the eye determines its intensity. That would be
   easy to encode as a vector of floats and would give the snake depth
   perception so it could choose not to pursue food when its own body is in the
   way.
6. I feel like to pull this off, the simulation will also need to have lots of
   snakes running around at once. Part of my decision to use WebGL was that I
   WANT TO SEE THIS IN ACTION!
7. Some kind of fun visualization for the snake's vision and brains would be
   fun. I think debugging them will give me ideas.
8. Save and load state. Should be stupid dumb dead simple because Redux.
9. Import/export brains specificially

## Style and consistency

I'm using ESLint and a bunch of plugins including Prettier to enforce style so
that I don't have to think about it. I'm going to avoid customizing things, and
I'll document the rules I do customize here:

- react/jsx-filename-extension: I'm very convinced by [this argument][dot-jsx],
  i.e. we don't add file extensions for embedding Flow or other transforms, why
  for JSX? It's not special.

[Private Trello board](https://trello.com/b/0jrUP8ck/alive)

## License and Copyright

Copyright Justin Force. Licensed under the ISC License.

[dot-jsx]:https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904

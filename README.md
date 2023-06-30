# SW5e Data
All of the data for the SW5e TTRPG

## Structure

### /data
Contains the uncompiled data in markdown/frontmatter

### /docs
Contains the compiled data for use on the SW5e website, which is published at [TODO]

### /templates
Contains md templates for creating new content.

### /utility
Contains script for augmenting content and can be ignored. It's mainly hear to preserve the history of how the shape
of the data structures have changed over time.

## Compiling

`npm run build`

## Versioning

you can publish different versions of the data by bumping the version in package.json

## Notes about the `/text` dir

The site and data repos __technically__ support internationalization. Originally, every file was split between it's `/data` and `/text`
directory. For example, a background entry would have:

- /data/backgrounds/artisan.md
- /text/en/backgrounds/artisan.md

The latter markdown file (in the /text dir) contained all of the content that needed to be translated. The idea is that any individual
could copy the entirety of the /text/en folder into a different language /text/fr and work on translating everything. It was designed this
way to make it so translators did not need to know which data elements required translation.

The tradeoff is that making new content is extremely difficult, requiring two files and splitting data entry between those files.
Therefore, everything has been recombined into a single-file structure (me5e-data is not yet completely combined).
__Note: if you're trying to copy examples from the me5e-data repo, be sure to look for a corresponding file in /text/en/... to make sure
you get the full file__

There are a few byproducts remaining:
- /conditions = conditions
- /guide = GM guides/advanced guides
- /manual = Rulebook/Handbook (structure is governed by the `/data/manual-index.md` file)
- /messages = labels used throughout the site (See https://github.com/queryluke/masseffect-5e#translations for more information).
- /ship-upgrades

## Models

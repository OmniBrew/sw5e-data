# SW5e Data
All of the data for the SW5e TTRPG

## Structure

### /data
Contains the uncompiled data in markdown/frontmatter

For the most part, every "item" (species, weapon, spell, etc) is its own file contained in a directory under /data. So, all the species are under /data/species and all the weapons are under /data/weapons

However, there are 3 divergences:

#### Species and traits
"Traits" are the special features species get. For example "Amphibious" is a trait. Traits are kept in their own directory `/data/traits`.
This is done because a trait can be reused between species. "Amphibious" might apply to several different species, therefore this type of abstracted
association keeps the total number of files down. __But this also means you shouldn't reference the species name in the trait file__

For example, if "Amphibious" applied to Frogs and Toads, you would not want the text in the "Amphibious" file to say, "Frogs live in water and land environments...".
Doing so would cause the phrase "Frogs live in...." to show up under the Toads species.

#### Edges
Edges are collections/sets of features from which players choose. The standard D&D examples are Fighting styles and Eldritch invocations.

Instead of having a separate directory of each of these sets, they are all collected in a single /data/edges directory. And each set
has its own subdirectory: /data/edges/fighting-styles

When you need to reference these in the mechanics via a `model` key, you can do so by referencing the subdirectory name

```
model: fighting-styles
id: defense
```

#### Classes
Classes also use a nested subdirectory structure to make it easier for content editors.

> Note if you're looking in the ME5e data directory for examples, note that this structure has not been applied, so you need to look in `/data/classes`, `/data/subclasses`,
and `/data/class-features` for examples

Within the `/data/classes` directory, you will see a single directory for each class. For example, `/data/classes/consular`

Within that class directory are:
- the base class file, `_class.md` which contains metadata and content about the base class
- all of the base class features (any file ending in `.md` that isn't `_class.md` is a base class feature)
- all of the subclasses. Each subclass is it's own directory. For example: `/data/classes/consular/way-of-balance`

Within each subclass directory, you will find a similar setup:
- the base subclass file, `_subclass.md` which contains metadata and content about the subclass
- all of the subclass features (any file ending in `.md` that isn't `_subclass.md`)

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

# Changelog

Changes to the software will be documented here.

The format of changelog is based in [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) and [Semantic Version](https://semver.org/spec/v2.0.0.html)

## Unreleased

Modifications not released will be documented here

## 0.3.14 | 2021-08-14 Hytalo M. Bassi

#### Changed

- request now throw Error if !res.ok
- NewsPage handle error in Person().get() method

## 0.3.13 | 2021-08-14 Hytalo M. Bassi

#### Changed

- NewsPage loads author data

## 0.3.12 | 2021-08-14 Hytalo M. Bassi

#### Added

- PersonPage
- /person/:username route added to App

#### Changed

- Person('username', null).get() method fixed

## 0.3.11 | 2021-08-13 Hytalo M. Bassi

#### Added

- enzyme tests
- new devDependencies

#### Changed

- tests in App component
- setupTests.js to use enzyme adapter

#### Removed

- Footer.test.js
- Navbar.test.js

## 0.3.10 | 2021-08-12 Hytalo M. Bassi

#### Added

- person API

#### Changed

- style of NewPage
- author data in NewPage(template)

## 0.3.9 | 2021-08-12 Hytalo M. Bassi

#### Changed

- tailwind purge
- autoprefixer, tailwindcss, postcss as devDependecies

## 0.3.8 | 2021-08-12 Hytalo M. Bassi

#### Added

- postcss.config.js

#### Changed

- compatibility with postcss7 in tailwind

## 0.3.7 | 2021-08-11 Hytalo M. Bassi

#### Added

- favicon-dark.ico

#### Changed

- dark support in index.html

## 0.3.6 | 2021-08-11 Hytalo M. Bassi

#### Added

- yarn.lock added

#### Changed

- search area style improved
- navbar style improved
- color palete

## 0.3.5 | 2021-08-09 Hytalo M. Bassi

#### Added

- search area

#### Changed

- navbar as a rectangle
- logo centralized
- query title in catalog
- dark extended to display
- using tailwind classes to change logo

## 0.3.4 | 2021-08-07 Hytalo M. Bassi

#### Changed

- using logo instead of 'logo' and 'home'
- SVGs moved to public/
- Tailwind's color palete using default colors

#### Removed

- 'h-screen' class from App component

## 0.3.3 | 2021-08-07 Hytalo M. Bassi

#### Added

- not found component

#### Changed

- content area uses the screen height

## 0.3.2 | 2021-08-07 Hytalo M. Bassi

#### Added

- version to manifest.json

#### Changed

- favicon.ico changed to Tifu dark logo
- manifest.json title changed to 'Tifu'
- logo192.png and logo512.png changed to Tifu logo

## 0.3.1 | 2021-08-05 Hytalo M. Bassi

#### Changed

- Home component mobile friendly
- navigation improved

## 0.3.0 | 2021-08-05 Hytalo M. Bassi

#### Added

- NewsPage style improvement
- "Publicado dia {day} de {month} de {year}"

## Changed

- News API parses newObj
- response.date is parsed as Date

## 0.2.1 | 2021-07-31 Hytalo M. Bassi

### Added

- static function catalog added to News API
- Home components
- catalog news at home component

### Changed

- Home component instead of header 'Main page'

## 0.2.1-beta | 2021-07-31 Hytalo M. Bassi

### Added

- Tests to components

### Changed

- Test to App now find Main page instead of learn react

## 0.2.1-alpha | 2021-07-31 Hytalo M. Bassi

### Added

- Footer at App.js
- Navbar at App.js
- Dark theme support
- 'New not found!' as a response

### Changed

- style changed at components
- black color extended at tailwind

## 0.2-alpha | 2021-07-30 Hytalo M. Bassi

### Added

- dev container specifications at root
- Dockerfile and docker-compose.yml
- editor config
- CHANGELOG.md

### Changed

- code style improved based in [AirBNB](https://github.com/airbnb/javascript) Javascript style guide

# ice-bot

## About

Universal discord bot to suite all of your needs.

Want to use Ice? Invite link can be found on ice's [website](http://ice.danbulant.eu).

## Setting up

The setup is quite simple:

* Grab latest release and extract the contents somewhere on the disk
* Install dependencies (See [#dependencies])
* Aquire token (from [discord developer portal](https://discordapp.com/developers)) and save it in config.json as token
* Create `managers/mysql.js` that exports pool (see [wiki](https://github.com/danbulant/ice-bot/wiki/Setting-up-database))
* Create MySQL databse with correct tables. (See [wiki](https://github.com/danbulant/ice-bot/wiki/Setting-up-database))
* Start the bot (with `node .`)

Then optionaly if you want to have link checking, add `virustotal` field into config.json containing VirusTotal api key.

## Dependencies

* Node (Tested with v12 & v13. Running on another version? Let us know!)
* NPM (bundled with Node on modern releases)
* Deno - Use as new version as possible. Needs to be installed by same user as the one running bot.
* *(optional)* Git (or even better, hub) for simple updates - run one command and your bot is up to date

### Node dependencies

Those are installed with `npm i` automatically.

* ascii-table -> shows fancy table in logs
* discord.js -> the framework we use for ice
* discord.js-docs -> searches through documentation
* pacote -> searches through npm registry
* cowsay -> a library for cowsay command
* eventemitter3 -> better event emitter class
* got -> because request **got** deprecated
* javascript-time-ago -> yes, we are lazy to reinvent the wheel
* mysql -> connection to MySQL
* nekos.life -> Cute ~~catgirls~~ nekos
* node-html-parser -> because not every website has an API
* vm2 -> secure VM for code evaluation
* pokedex-promise-v2 -> Promises for pokedex
* unique-random-array -> for our reddit command

## Non-command related features

### Message previews

Messages can be previewed by sending a link to it. If ice has access to the server and channel the message was in, it will send an embed containing information about the message.

## Commands

The bot has as of now the following commands

### Anime

* **nekos \<endpoint>** - Wrapper to nekos-dot-life API (SFW)
* **sofurry** - Gives random image from sofurry. Please don't use this in non-furry servers
* **waifu** - Random AI-generated waifu + story
* **safebooru** - It's safe, but just to make sure...
* **konachan** - Safe version of konachan

### Balance

This category is yet to be done.

* **balance** - shows current balance of user
* **pay \<amount> \<who>** - *Not yet implemented*. Sends \<amount> to \<who>
* **mine** - Mines the daily amount. Can be called every 12 hours.
* **premium** - Shows if you have premium access or not

### Dev

This category is for developers who are working on discord. Hope it helps!

* **djs** - Searches through Discord.js documentation
* **php** - Searches through PHP documentation
* **dstatus** - Shows status of discord servers
* **eval** - Evaluates given JS code. Has a limit of 10 seconds, running in NodeVM without access to require.
* **google** - Google it!
* **code** - Shows information about given HTTP code. Supports some non-official ones. *Thanks Wikipedia!*
* **logme** - *Disabled on live version*. Logs message to console. Useful for debugging this bot.
* **npm** - Gets information about given package
* **request** (alias `req`)- Makes request. See `req help`
* **format** - Shows formatting help

### Essentials

* **achievments** - Shows which achievments you currently own
* **avatar** - Shows your or someone else's (Ping 'em!) high-res avatar
* **fact** - Gets a random fact
* **help** - ~~Shows a simple help (currently link to website).~~ Full commando help.
* **invite** - Link to invite the bot
* **news** - ~~Shows current news.~~ Depended on another bot and only for czech news, removed.
* **ping** - Pings the discord API and shows how much time it consumed
* **puppy** - Because everyone likes images of puppies
* **reddit** - Shows random image from given subreddit. If not on image-only subreddit, bot may **not** reply as of now.

### Fun

* ~~**ascii** - Figlet!~~ Broken on latest release, hidden by default
* **cow** - The original cowsay/cowthink
* **clap** - Clapify given message
* **cool** - Cools something
* **dab** - <o/
* **joke** - Random joke of given type. If no type provided, uses random
* **leet** Leetify message
* **lenny** - Everyone knows what's lenny
* **say** - Make the bot say anything you want
* **spoiler** - Annoying spoilers
* **vaporwave** - Vaporify string

### Image

* **fone** - Uses happyfone API
* **meme** - Generates memes. Usage: `meme <photo/link to avatar> [top text] [bottom text]`
* **xkcd** - Shows todays xkcd comic

### Minecraft

* **skin** - Shows skin of given player. ~~Tries using authors nickname if no player provided.~~

### Mod

* **announce** - Make an announcement in the same channel. Admin only.
* **count** - Counts members
* **info** - Info about author or given user
* **stats** - Stats of ice bot
* **allow-channels** (found in `mod/allowChannels.js`) - Sets allowed channels in which the bot should reply to (defaults to all)
* **ban** - Bans a member of guild.
* **kick** - Kicks a member from guild.
* **giveaway** - *Testing only.* Makes a giveaway in `channel` which resolves after `x` minutes and wins `item`
* **role** - Manages roles. See help.

### Music

* **join** - Joins the bot to voice channel you are currently in.
* **leave** - Leaves the voice channel
* **get** - (Alias search) finds song by URL or name
* **pause** - Pauses playback
* **play** - Starts playing queue
* **stop** - Stops playing queue
* **remove** - Removes song from queue
* **resume** - Resumes playback
* **jump** - Jumps to song in queue
* **seek** - Seeks current song
* **shuffle** - Shuffles queue
* **skip** - Skips current song
* **stash** - View music search stash
* **view** - Views current queue
* **volume** - Sets or gets volume of playback

### NSFW

These commands are premium only (and aren't in this repository)

* **nekos-lewd** - Not so safe endpoints of nekos.life
* **rule34** - Well you should know what this is
* **hypnohub** - Random image from hypnohub
* **xbooru** - The dirty sister of rule34
* **realbooru** - Realistic version of rule34
* **konachan-lewd** - Highquality wallpapers
* **gelbooru** - Random image from gelbooru
* **danbooru** - Random image from danbooru

### Pokemon

* **poke** - Has subcommands, see poke help

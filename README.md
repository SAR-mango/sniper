# Sniper
A simple, easy-to-run bot that lets you snipe messages in your Discord server. Based on the original DankMemer/sniper repository, but with a lot of changes and simplifications.

The advantage of setting this up and running it yourself is that it is reliable (because it is only part of one Discord server—your own) and safe (because the bot itself will be running on your own server that you will set up and have full control over).

Note that "Discord server" and just "server" mean different things; "Discord server" is obvious but "server" refers to another device that you will set up to run the JavaScript code for the bot.

# Setup
1. Follow [this tutorial](https://discordpy.readthedocs.io/en/stable/discord.html) to set up a Discord Developer account and add the bot to your Discord server. *Make sure you give the bot Admin permissions.* For the bot's profile picture (which you can change in the Discord Developer Portal), you can use the ```sniper-icon.png``` file included in this repository, or any other image you want.
2. Once the bot is in your Discord server, it will show up as offline. This is because you need to set up a server that runs the bot. You can do this with a Raspberry Pi, AWS or Oracle server, or any other device running a Debian-based operating system like Ubuntu or Raspbian. When you have set this up and have access to the terminal, proceed to the next step.
3. Node.js 16.6.0 or newer is required. Follow [this tutorial](https://lindevs.com/install-node-js-and-npm-on-raspberry-pi/) if you need to install it or if you have an older version installed.
4. Once you have Node.js 16.6.0 working, clone this repository.

```
git clone https://github.com/SAR-mango/sniper.git
cd /sniper
```

5. Then, using a text editor like nano or Vim, modify ```config.json``` and add your specific information, which can be found in the Developer Portal.

```
{
	"token": "ADD TOKEN HERE",
	"application_id": "ADD APPLICATION ID HERE"
}
```

Whatever you do, do NOT share your token with anyone or allow it to end up online somehow. With the token, a hacker can make your bot do whatever they want, which could lead to your server being fully compromised. As long as your token is safe, only your own server that you have set up will have access to the content in your Discord server.

6. Register the bot.

```
npm i
npm run register GUILD ID
```

Replace "GUILD ID" with the ID of your server, which can be found in Server Settings > Widget.

7. Run the bot.

```
npm run bot
```

If there are no errors, the bot should now show up as online in your Discord server (it shouldn't take more than ten seconds). Any server member who can send messages can use the bot by sending the following (these are not case sensitive; capital letters will work as well as lowercase).

Snipe:

```
s
```

Editsnipe:

```
es
```

After the bot snipes or editsnipes a given message *once*, it will be wiped from the bot's memory.

To keep the bot running even after you close the terminal on your server, consider using ```screen```. A quick search for how to use ```screen``` will yield a bunch of information; it's not that hard to figure out. Otherwise, if you close the terminal, the bot will stop running. Note that the bot's status will take several minutes to change from online to offline.

Finally, if you have any questions or need help setting the bot up, feel free to use the Discussions section of this repository! I will try to help as soon as possible.

# License
[MIT](https://tldrlegal.com/license/mit-license)

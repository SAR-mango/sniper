# Sniper
A simple, easy-to-run bot that lets you snipe messages in your Discord server. Based on the DankMemer/sniper repository, but with various simplifications and improvements.

The advantage of setting this up and running it yourself is that it is reliable (because it is only part of one Discord server—your own) and safe (because the bot itself will be running on your own server that you will set up and have full control over).

Note that "Discord server" and just "server" mean different things. "Discord server" is obvious, but "server" refers to another device that you will set up to run the JavaScript code for the bot.

# Setup
1. Follow [this tutorial](https://discordpy.readthedocs.io/en/stable/discord.html) to set up a Discord Developer account and add the bot to your Discord server. *Make sure you give the bot Admin permissions.* For the bot's profile picture (which you can change in the Discord Developer Portal), you can use the ``sniper-icon.png`` file included in this repository, or any other image you want.
2. Once the bot is in your Discord server, it will show up as offline. This is because you need to set up a server that runs the code for the bot. You can do this with a Raspberry Pi, AWS or Oracle server, or any other device running a Debian-based operating system like Ubuntu or Raspbian. When you have set this up and have access to the terminal, proceed to the next step.
3. Node.js 16.6.0 or newer is required. Follow [this tutorial](https://lindevs.com/install-node-js-and-npm-on-raspberry-pi/) if you need to install it or if you have an older version installed.
4. Once you have Node.js 16.6.0 working, clone this repository and go into its directory.

```
git clone https://github.com/SAR-mango/sniper.git
cd /sniper
```

5. Then, using a text editor like ``nano`` or ``vim``, modify ``config.json`` and add your specific information, which can be found in Discord's Developer Portal. Do not delete the quotes.

```
{
	"token": "ADD TOKEN HERE",
	"application_id": "ADD APPLICATION ID HERE"
}
```

**Make sure you do NOT share your token with anyone or allow it to end up online.** With the token, a hacker can make your bot do whatever they want, which could lead to your server being fully compromised. As long as your token is safe, only the server that you set up will have access to any content in your Discord server.

6. Similarly, modify line 91 of ``src/index.js`` and add your application ID where indicated. Again, do not delete the quotes.

```
if (message.reference && message.content.toLowerCase() === "mock" && message.author.id != "ADD APPLICATION ID HERE") {
```

7. Register the bot. Replace "GUILD ID" with the ID of your server, which can be found in Server Settings > Widget.

```
npm i
npm run register GUILD ID
```

7. Run the bot.

``npm run bot``

If there are no errors, the bot should now show up as online in your Discord server (it shouldn't take more than ten seconds).

To keep the bot running even after you close the terminal on your server, use ``screen``. CTRL + C to exit the program, then type ``screen npm run bot``. After the bot is running, press CTRL + A, then d to detach the process. You can now close the terminal; the bot will continue running.

If you ever need to stop the bot or look at its console log, type ``screen -ls`` and note the PID number next to the bot process. Then type ``screen -r PID``, replacing ``PID`` with the number you found.

# Usage
Any server member with permission to send messages can use the bot by sending the following. These are not case sensitive; capital letters will work as well as lowercase.

**Snipe**: "s"

**Editsnipe**: "es"

**Mock**: reply "mock" to the message you want to mock.

After the bot snipes or editsnipes a given message *once*, it will be wiped from the bot's memory.

Finally, if you have any questions or need help setting up the bot, let me know! esampat@ucsb.edu

# License
[MIT](https://tldrlegal.com/license/mit-license)

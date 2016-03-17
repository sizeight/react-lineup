# Macbook Air (2011-mid) Development Setup:

## 1. Basics (if you haven't already)
- Update OSX
- Move `the dock` to the left-hand side of the screen (right click menu: positioning on screen).
- Speed up `keystrokes` (System Preferences -> Keyboard): Key repeat (Fastest), Delay Until Repeat (Shortest).
- Install `XCode command-line tools` (Not the full XCode 9GB IDE install...).
  * $ `xcode-select --install`
- Install `Homebrew` (Xcode command-line tools first!)
  * $ `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
  * [Install instructions](http://brew.sh/)
- Install [Sublime Text 3](https://www.sublimetext.com/3) and [package control](https://packagecontrol.io/installation)
- Make a home for all your coding projects
  * $ `mkdir -p ~/Sites`

## 2. Essentials
Install software using homebrew, neatly places things at `/usr/local/bin`
- $ `brew update`
- $ `brew install git`
- $ `brew install wget`

## 3. Python
- $ `brew install python` # Homebrew’s Python includes the latest versions of Pip.
- Make sure you're using the correct Python:  
  $ `vim ~/.bash_profile`  
```
# Ensure user-installed binaries take precedence
export PATH=/usr/local/bin:$PATH
# Load .bashrc if it exists
test -f ~/.bashrc && source ~/.bashrc
```
- $ `source ~/.bash_profile`
- $ `which python`
- $ `pip install virtualenv`
- $ `pip install virtualenvwrapper`
- $ `mkdir -p ~/.virtualenvs`  
  $ `vim ~/.bashrc`  
```
export WORKON_HOME=$HOME/.virtualenvs
source /usr/local/bin/virtualenvwrapper.sh
```
  $ `source ~/.bash_profile`
- Check if it works OK.  
  $ `workon` # should see no error message here.

## 4 Node.js and npm modules
- $ `brew install node`
- $ `npm install -g webpack`
- $ `cd ~/Sites/lineup && npm install`



## References
- [Macbook setup gist by millermedeiros](https://gist.github.com/millermedeiros/6615994)
- [Python dev on mac osx](https://hackercodex.com/guide/python-development-environment-on-mac-osx/)
- [Installing Python virtualenvwrapper on Mac OSX](http://virtualenvwrapper.readthedocs.org/en/latest/install.html)
- [Starting up Postgresql Server on OS X](http://stackoverflow.com/questions/7975556/how-to-start-postgresql-server-on-mac-os-x)
- [Another setup gist by kevinelliott](https://gist.github.com/kevinelliott/e12aa642a8388baf2499)